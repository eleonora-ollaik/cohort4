#virtualenv venv --python=python       === to install venv
#./venv/Scripts/activate.bat           === to install all the dependencies
#pip install Flask
#pip install Flask-RESTful
#pip install Flask-JWT


from flask import Flask
from flask_restful import  Api
from flask_jwt import JWT

from security import authentificate, identity
from resources.user import UserRegister
from resources.item import Item, ItemList
from db import db

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///data.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.secret_key='ali'
api = Api(app)

jwt = JWT(app, authentificate, identity) #JWT creates a new endpoint '/auth', 
# when it's called we send it username and password, it takes it and sends to 
# the authentificate function in security.py. Then /auth returns a JW token that 
# can be sent to the next request we make. JWT calls to identity function and gets 
# correct user id. If it can do that, id is valid.


api.add_resource(Item, '/item/<string:name>')
api.add_resource(ItemList, '/items')
api.add_resource(UserRegister, '/register')

if __name__ == '__main__': #in case we're importing smth from app.py to prevent it from running the flask we need this line
    db.init_app(app)
    app.run(port=2000, debug=True)