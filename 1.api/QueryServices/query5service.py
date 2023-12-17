from flask import jsonify
from flask.views import MethodView
from QueryController.query5 import Query5

class Query5API(MethodView):
    def __init__(self):
        self.q5 = Query5()

    def get(self):
        result_div_q, result_div_q2, result_div_q3 = self.q5.execute()
        return jsonify({'div_q': result_div_q, 'div_q2': result_div_q2, 'div_q3': result_div_q3})
