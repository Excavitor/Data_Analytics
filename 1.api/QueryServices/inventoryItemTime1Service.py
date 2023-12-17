from flask import jsonify
from flask.views import MethodView
from QueryController.inventoryItemTime1 import QueryIitemT1

class QueryIitemT1API(MethodView):
    def __init__(self):
        self.q2 = QueryIitemT1()

    def get(self):
        result_div_q1, result_div_q2, result_div_q3, result_div_q4, result_div_q5, result_div_q6, result_div_q7, result_div_q8, result_div_q9 = self.q2.execute()
        return jsonify({'div_q1': result_div_q1, 'div_q2': result_div_q2, 'div_q3': result_div_q3,
                        'div_q4': result_div_q4, 'div_q5': result_div_q5, 'div_q6': result_div_q6,
                        'div_q7': result_div_q7, 'div_q8': result_div_q8, 'div_q9': result_div_q9})
