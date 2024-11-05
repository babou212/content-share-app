from flask import request, make_response, jsonify, Blueprint
from pymongo import MongoClient
from bson.json_util import dumps
from bson.objectid import ObjectId
import jwt
from datetime import datetime, timedelta
import os
import bcrypt

users_api = Blueprint("users_api", __name__)

