from flask import jsonify
from flask.views import MethodView
from QueryController.financialStoreTime2 import QueryFST2

class QueryFST2API(MethodView):
    def __init__(self):
        self.qFST2 = QueryFST2()

    def get(self):
        result_div_q1, result_div_q2, result_div_q3 = self.qFST2.execute()
        return jsonify({'div_q1': result_div_q1, 'div_q2': result_div_q2, 'div_q3': result_div_q3})
