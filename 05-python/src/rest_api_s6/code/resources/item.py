import sqlite3
from flask_restful import Resource, reqparse
from flask_jwt import jwt_required
from models.item import ItemModel

class Item(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('price', 
        type=float,
        required=True,
        help="This field cannot be left blank!"
    )

    @jwt_required()
    def get(self, name):
        item = ItemModel.find_by_name(name)#returns an object

        if item:
            return item.json()#we need a dict here, that's whe we do .json()
        return {'message': 'Item not found'}, 404
    
    def post(self, name):
        if ItemModel.find_by_name(name):
            return {'message': "An item with name '{}' already exists".format(name)}
        # data = request.get_json()#if json is not provided include in brackets (force=True) or (silent=True)
        
        data = Item.parser.parse_args()

        item = ItemModel(name,  data['price'])
        #to deal with exceptions and failing:
        try:
            ItemModel.insert(item)
        except:
            return {'message': "An error occured inserting the item"}, 500 #internal server error

        return item.json(), 201

    def delete(self, name):
        connection = sqlite3.connect('data.db')
        cursor = connection.cursor()

        query = "DELETE FROM items WHERE name=?"
        cursor.execute(query, (name,))
        
        connection.commit()
        connection.close()

        return {'message': 'Item deleted'}

    def put(self, name):
        data = Item.parser.parse_args()

        item = ItemModel.find_by_name(name)
        updated_item = ItemModel(name,  data['price'])

        if item is None:
            try:
                updated_item.insert()
            except:
                return {'message': "An error occured inserting the item"}, 500
        else :
            try:
                updated_item.update()
                # ItemModel.update(updated_item)
            except:
                return {'message': "An error occured updating the item"}, 500

        return updated_item.json()


class ItemList(Resource):
    def get(self):
        connection = sqlite3.connect('data.db')
        cursor = connection.cursor()

        query = "SELECT * FROM items"
        result = cursor.execute(query)
        items = []
        for row in result:
            items.append({'name': row[0], 'price': row[1]})
        
        connection.close() 
        return {'items': items}       
