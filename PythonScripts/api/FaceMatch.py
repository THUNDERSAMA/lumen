from flask import Flask, request, jsonify
from deepface import DeepFace
import base64

app = Flask(__name__)

@app.route('/verify', methods=['POST'])
def verify_images():
   
    base64_string = request.json.get('base64_string')
    id_string = request.json.get('id_string')
    image_data = base64.b64decode(base64_string)
    with open("input_image.jpg", "wb") as f:
        f.write(image_data)
    input_image_path = "input_image.jpg"
    similar_name_count = 11
    verified_count = 0
    for i in range(1, similar_name_count + 1):
        # .jpeg to be changed to jpg during production or testing
        image_check = id_string+"_"+"% s" % i+".jpeg"

        try:
            result = DeepFace.verify(input_image_path, image_check, model_name='ArcFace', enforce_detection=False)
            print(result)
            if result["verified"]:
                verified_count += 1

        except ValueError as ve:
            print(f"Error processing {image_check}: {ve}")
    accuracy = (verified_count / similar_name_count) * 100 if similar_name_count != 0 else 0

    return jsonify({
        "verified_count": verified_count,
        "total_count": similar_name_count,
        "accuracy": accuracy
    })

if __name__ == '__main__':
    app.run(debug=True)
