from flask import Flask, request
from flask_restful import Resource, Api, reqparse
from flask_jwt import JWT, jwt_required

from security import authentificate, identity

app = Flask(__name__)
app.secret_key='ali'
api = Api(app)

jwt = JWT(app, authentificate, identity) #JWT creates a new endpoint '/auth', 
# when it's called we send it username and password, it takes it and sends to 
# the authentificate function in security.py. Then /auth returns a JW token that 
# can be sent to the next request we make. JWT calls to identity function and gets 
# correct user id. If it can do that, id is valid.

items = []
class Item(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('price', 
        type=float,
        required=True,
        help="This field cannot be left blank!"
    )

    @jwt_required()
    def get(self, name):
        item = next(filter(lambda x: x['name'] == name, items), None)
        return {'item': item}, 200 if item else 404

    def post(self, name):

        if next(filter(lambda x: x['name'] == name, items), None): 
            return {'message': "An item with name '{} already exists".format(name)},400
        # data = request.get_json()#if json is not provided include in brackets (force=True) or (silent=True)
        
        data = Item.parser.parse_args()

        item = {'name': name, 'price': data['price']}
        items.append(item)
        return item, 201
    
    def delete(self, name):
        global items #allows to use global items list
        items = list(filter(lambda x: x['name'] != name, items))
        return {'message': 'Item deleted'}

    def put(self, name):
        data = Item.parser.parse_args()

        item = next(filter(lambda x: x['name'] == name, items), None)
        if item is None:
            item = {'name': name, 'price': data['price']}
            items.append(item)
        else :
            item.update(data)
        return item

class ItemList(Resource):
    def get(self):
        return {'items': items}


api.add_resource(Item, '/item/<string:name>')
api.add_resource(ItemList, '/items')

app.run(port=2000, debug=True)