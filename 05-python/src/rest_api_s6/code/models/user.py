from db import db

class UserModel(db.Model):

    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80))
    password = db.Column(db.String(80))

    def __init__(self, username, password):
        # self.id = _id #id is a python keyword and we don't want to use it as a var name, therefore we're  using _id 
        self.username = username
        self.password = password

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()


    @classmethod #internal class method, uses cls intead of self and User
    def find_by_username(cls, username):
        return cls.query.filter_by(username=username).first() #can be added after first filter: .first() ;  .filter_by(id=1) etc #select * from items where name=name

        # connection = sqlite3.connect('data.db') #initializing connection
        # cursor = connection.cursor() #initializing cursor

        # query = "SELECT * FROM users WHERE username=?" #getting data from table
        # result = cursor.execute(query, (username,)) #comma is needed to show python that it's a tuple and not useless pair of brackets
        # row = result.fetchone() #getting first row
        # if row:
        #     # user = cls(row[0], row[1], row[2]) #if there is a row, creating User object with this data
        #     user = cls(*row) #just looks nicer
        # else:
        #     user = None

        # connection.close()
        # return user


    @classmethod #internal class method, uses cls intead of self and User
    def find_by_id(cls, _id):
        return cls.query.filter_by(id=_id).first() #can be added after first filter: .first() ;  .filter_by(id=1) etc #select * from items where name=name

        # connection = sqlite3.connect('data.db') #initializing connection
        # cursor = connection.cursor() #initializing cursor

        # query = "SELECT * FROM users WHERE id=?" #getting data from table
        # result = cursor.execute(query, (_id,)) #comma is needed to show python that it's a tuple and not useless pair of brackets
        # row = result.fetchone() #getting first row
        # if row:
        #     # user = cls(row[0], row[1], row[2]) #if there is a row, creating User object with this data
        #     user = cls(*row) #just looks nicer
        # else:
        #     user = None

        # connection.close()
        # return user
