import numpy as np
from flask import Flask, request, Response
from joblib import load
import numpy as np
import PIL.Image as I
import base64
from io import BytesIO
import re
from flask.json import jsonify
import os
import logging

# Creation of the Flask app
app = Flask(__name__)

# Flask route for Liveness checks

# Flask route for predictions
@app.route('/predict',methods=['GET','POST'])
def prediction():
    result = request.get_json(silent=True, force=True)
   
    #print("Payload:",data)
   
    return jsonify(result)

if __name__ == "__main__":
	app.run(debug=False, host='0.0.0.0', port=4000)	