from flask import Flask

from user.user_api_service import users_api
from post.post_api_service import posts_api

app = Flask(__name__)

app.register_blueprint(users_api)
app.register_blueprint(posts_api)

if __name__ == '__main__':
    app.run(debug=True)
