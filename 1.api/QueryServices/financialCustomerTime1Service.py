from flask import jsonify
from flask.views import MethodView
from QueryController.financialCustomerTime1 import QueryFCusT1

class QueryFCusT1API(MethodView):
    def __init__(self):
        self.qFCusT1 = QueryFCusT1()

    def get(self):
        result_div_q1, result_div_q2, result_div_q3, result_div_q4 = self.qFCusT1.execute()
        return jsonify({'div_q1': result_div_q1, 'div_q2': result_div_q2, 'div_q3': result_div_q3, 'div_q4': result_div_q4})
