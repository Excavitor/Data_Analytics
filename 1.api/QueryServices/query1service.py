from flask import jsonify, request
from flask.views import MethodView
from QueryController.query1 import Query1

class Query1API(MethodView):
    def __init__(self):
        self.q1 = Query1()

    def get(self):
        result = self.q1.execute1()
        return jsonify(result)

    def post(self):
        data = {}
        data['name'] = request.json['name']
        data['age'] = request.json['age']
        return jsonify({
            'Name': data['name'],
            'Age': data['age'],
        })

class Query1API2(MethodView):
    def __init__(self):
        self.q1 = Query1()

    def get(self):
        result = self.q1.execute2()
        return jsonify(result)