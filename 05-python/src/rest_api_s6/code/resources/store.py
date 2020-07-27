from flask_restful import Resource, reqparse
from models.store import StoreModel
from flask_jwt import jwt_required

class Store(Resource):


    @jwt_required()
    def get(self, name):
        store = StoreModel.find_by_name(name)#returns an object

        if store:
            return store.json()#we need a dict here, that's whe we do .json()
        return {'message': 'Store not found'}, 404
    
    def post(self, name):
        if StoreModel.find_by_name(name):
            return {'message': "An store with name '{}' already exists".format(name)}
        # data = request.get_json()#if json is not provided include in brackets (force=True) or (silent=True)
        store = StoreModel(name)
        #to deal with exceptions and failing:
        try:
            store.save_to_db()
        except:
            return {'message': "An error occured inserting the store"}, 500 #internal server error

        return store.json(), 201

    def delete(self, name):
        store = StoreModel.find_by_name(name)
        if store:
            store.delete_from_db()

        return {'message': 'Store deleted'}


class StoreList(Resource):
    def get(self):
        return {'stores': list(map(lambda x: x.json(), StoreModel.query.all()))} #map is more easily stackable
