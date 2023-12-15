from flask import jsonify
from flask.views import MethodView
from QueryController.financialCustomerTime2 import QueryFCusT2

class QueryFCusT2API(MethodView):
    def __init__(self):
        self.qFCusT2 = QueryFCusT2()  # Create an instance of QueryFST1

    def get(self):
        # Call the execute method on the instance, not the class
        result_div_q1, result_div_q2, result_div_q3, result_div_q8 = self.qFCusT2.execute()
        return jsonify({'div_q1': result_div_q1, 'div_q2': result_div_q2,
                        'div_q3': result_div_q3, 'div_q8': result_div_q8})
