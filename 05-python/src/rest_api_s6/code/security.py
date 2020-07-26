from user import User


def authentificate(username, password):
    user = User.find_by_username(username)
    if user and user.password == password:
        return user

def identity(payload):#payload is the content of JSON JWT tokens
    user_id = payload['identity']
    return User.find_by_id(user_id)