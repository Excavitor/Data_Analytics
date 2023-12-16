from flask import jsonify, request
from flask.views import MethodView
from QueryController.inventoryStoreTime1 import QueryIStoreT1

class QueryIStoreT1API(MethodView):
    def __init__(self):
        self.q2 = QueryIStoreT1()

    def get(self):
        result_div_q1, result_div_q2, result_div_q3 = self.q2.execute()
        return jsonify({'div_q1': result_div_q1, 'div_q2': result_div_q2, 'div_q3': result_div_q3})