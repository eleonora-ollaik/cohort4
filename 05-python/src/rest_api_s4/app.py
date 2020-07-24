from flask import Flask
from flask_restful import Resource, Api

app = Flask(__name__)
api = Api(app)

items = []
class Student(Resource):
    def get(self, name):
        return {'student': name}

    def post(self, name):
        pass

api.add_resource(Item, '/item/<string:name>')

app.run(port=2000)