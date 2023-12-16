from flask import jsonify, request
from flask.views import MethodView
from QueryController.financialItemTime1 import QueryFitemT1

class QueryFitemT1API(MethodView):
    def __init__(self):
        self.q1 = QueryFitemT1()

    def get(self):
        result = self.q1.execute()
        return jsonify(result)