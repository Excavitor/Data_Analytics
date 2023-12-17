from flask import jsonify
from flask.views import MethodView
from QueryController.inventoryItemTime2 import QueryIitemT2

class QueryIitemT2API(MethodView):
    def __init__(self):
        self.q2 = QueryIitemT2()

    def get(self):
        result_div_q1, result_div_q2 = self.q2.execute()
        return jsonify({'div_q1': result_div_q1, 'div_q2': result_div_q2})
