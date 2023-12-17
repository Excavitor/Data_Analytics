from flask import jsonify
from flask.views import MethodView
from QueryController.financialCustomerTime1 import QueryFCusT1

class QueryFCusT1API(MethodView):
    def __init__(self):
        self.qFCusT1 = QueryFCusT1()

    def get(self):
        result = self.qFCusT1.execute()
        return jsonify(result)
