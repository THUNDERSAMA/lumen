from flask import  jsonify
import base64
import fitz
import io
import os
import json
from io import BytesIO

class convrt:
    def __init__(self):
        pass
    def cnvrt(self, file_path):
      print(file_path[:5])
      if file_path[:5] == b'%PDF-':
        doc = fitz.open(stream=BytesIO(file_path))
        
        for page_number, page in enumerate(doc, start=1):
            pix = page.get_pixmap(matrix=fitz.Identity, dpi=None,
                                  colorspace=fitz.csRGB, clip=None, alpha=True, annots=True)
            pix.save("image.png")  # Save the image to a file

            with open("image.png", "rb") as f:
                image_bytes = f.read()

            encoded_image = base64.b64encode(image_bytes)
            bytes_data = encoded_image
            json_serializable_data = bytes_data.decode('utf-8')
            jd=json.dumps(json_serializable_data)
            # print(jd)
        return {'message': 'success','data':jd}



        doc.close()


      elif file_path[:2] == b'\xFF\xD8':
        img = io.BytesIO(file_path)
        img.seek(0)
        encd_img = base64.b64encode(img.read())
        b_data = encd_img
        j_data = b_data.decode('utf-8')
        jd=json.dumps(j_data)
        print(jd)
        return {'message': 'success','data':jd}


      elif file_path[:8] == b'\x89PNG\r\n\x1a\n':
        img = io.BytesIO(file_path)
        img.seek(0)
        end = base64.b64encode(img.read())
        b_d = end
        js_data = b_d.decode('utf-8')
        jd=json.dumps(js_data)
        print(jd)
        return {'message': 'success','data':jd}
      return {'message': 'failed'}