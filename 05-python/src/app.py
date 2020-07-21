from flask import Flask

app = Flask(__name__)

@app.route('/') #here goes a request ie 'https://google.com/'
def home():
    return 'Hello world'

app.run(port=5000)