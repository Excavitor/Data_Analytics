from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# @app.route('/', methods=['GET'])
# def hello1():
#     return jsonify({'message':'Hello world'})
#
# @app.route('/api/hello', methods=['GET'])
# def hello():
#     return jsonify({'message':'Hello world 2'})
#
# @app.route('/postdata', methods=['POST'])
# def hellopost():
#     data = {}
#     data['name'] = request.json['name']
#     data['age'] = request.json['age']
#     print(data)
#     return jsonify({
#         'Name': data['name'],
#         'Age': data['age'],
#     })


from router import query_api

app.register_blueprint(query_api, url_prefix='/api/')
# app.register_blueprint(query_api1, url_prefix='/api1/')

if __name__ == '__main__':
    app.run(host='localhost', port=5000, debug=True)