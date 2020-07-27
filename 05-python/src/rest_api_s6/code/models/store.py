import sqlite3
from db import db

class StoreModel(db.Model):

    __tablename__ = 'stores'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80))
    price = db.Column(db.Float(precision=2))

    items = db.relationship('ItemModel', lazy='dynamic') #creates a relation with database, lazy dinamic - so it wouldn't call all the items when we are calling store until we call json(self)

    def __init__(self, name):
        self.name = name

    def json(self):
        return {'name': self.name, 'items': [item.json() for item in self.items.all()]} #all calls all the objects
    
    @classmethod
    def find_by_name(cls, name):

        return cls.query.filter_by(name=name).first() #can be added after first filter: .first() ;  .filter_by(id=1) etc #select * from items where name=name
    
    def save_to_db(self):
        db.session.add(self)
        db.session.commit()

    def delete_from_db(self):
        db.session.delete(self)
        db.session.commit()

