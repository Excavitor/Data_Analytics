from flask import jsonify
from flask.views import MethodView
from QueryController.financialStoreTime1 import QueryFST1

class QueryFST1API(MethodView):
    def __init__(self):
        self.qFST1 = QueryFST1()

    def get(self):
        result_div_q1, result_div_q2, result_div_q3, result_div_q4, result_div_q5, result_div_q6, result_div_q7, result_div_q8 = self.qFST1.execute()
        return jsonify({'div_q1': result_div_q1, 'div_q2': result_div_q2, 'div_q3': result_div_q3,
                        'div_q4': result_div_q4, 'div_q5': result_div_q5, 'div_q6': result_div_q6,
                        'div_q7': result_div_q7, 'div_q8': result_div_q8})
