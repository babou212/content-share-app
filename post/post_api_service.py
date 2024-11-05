from flask import request, make_response, jsonify, Blueprint
from pymongo import MongoClient
from bson.objectid import ObjectId
import os

SECRET_KEY = os.getenv("SECRET_KEY") 
API_VER_PATH_V1 = "/api/v1.0/"

client = MongoClient()

db = client.contentShare
postsCollection = db.postsCollection

posts_api = Blueprint("posts_api", __name__)

@posts_api.route(f'{API_VER_PATH_V1}/posts', methods=['GET'])
def get_all_posts():
    return make_response(jsonify(postsCollection.find({})))

@posts_api.route(f'{API_VER_PATH_V1}/posts/<id>', methods=['GET'])
def get_user(id):
    return make_response(jsonify(postsCollection.find_one({'_id': ObjectId(id)})), 200)


