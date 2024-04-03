from flask import Flask, request, jsonify
import cv2
import numpy as np
import pytesseract
import base64
from PIL import Image
from io import BytesIO

app = Flask(__name__)

def preprocess_image(image):
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    blurred = cv2.GaussianBlur(gray, (5, 5), 0)
    edges = cv2.Canny(blurred, 100, 200)
    return edges

def filter_handwritten_text(image, contours):
    filtered_contours = []
    for contour in contours:
        area = cv2.contourArea(contour)
        x, y, w, h = cv2.boundingRect(contour)
        aspect_ratio = float(w) / h
        if area < 1000 and aspect_ratio > 1.5:
            filtered_contours.append(contour)
    return filtered_contours

def crop_printed_text(image):
    edges = preprocess_image(image)

    roi_height = int(image.shape[0] * 0.2)
    roi = edges[:roi_height, :]
    contours, _ = cv2.findContours(roi, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

    filtered_contours = filter_handwritten_text(image, contours)

    min_x = min(contour[:, :, 0].min() for contour in filtered_contours)
    min_y = min(contour[:, :, 1].min() for contour in filtered_contours)
    max_x = max(contour[:, :, 0].max() for contour in filtered_contours)
    max_y = max(contour[:, :, 1].max() for contour in filtered_contours)

    margin = 40
    min_x -= margin
    min_y -= margin
    max_x += margin
    max_y += margin

    cropped_image = image[min_y:max_y, min_x:max_x]

    return cropped_image

@app.route('/process_image', methods=['POST'])
def process_image():
    data = request.get_json()
    encoded_image = data['image']
    decoded_image = base64.b64decode(encoded_image)
    image = cv2.imdecode(np.frombuffer(decoded_image, np.uint8), -1)

    printed_text_boxes = crop_printed_text(image)
    gray = cv2.cvtColor(printed_text_boxes, cv2.COLOR_BGR2GRAY)
    thresh = cv2.threshold(gray, 0, 255, cv2.THRESH_BINARY_INV + cv2.THRESH_OTSU)[1]

    kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (3,3))
    opening = cv2.morphologyEx(thresh, cv2.MORPH_OPEN, kernel, iterations=0)
    invert = 255 - opening

    text = pytesseract.image_to_string(invert, lang='eng', config='--psm 6')

    return jsonify({'text': text})

if __name__ == '__main__':
    app.run(debug=True)
