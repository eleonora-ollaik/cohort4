# from resources.user import User
from models.user import UserModel
from werkzeug.security import safe_str_cmp


def authentificate(username, password):
    user = UserModel.find_by_username(username)
    if user and user.password == password:
        return user

def identity(payload):#payload is the content of JSON JWT tokens
    user_id = payload['identity']
    return UserModel.find_by_id(user_id)