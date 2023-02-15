from flask import Flask,jsonify, request
from pymongo import MongoClient
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app, support_credentials=True)

app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024  ## Increasing the Capacity of Flask

client = MongoClient()


from service import auth


