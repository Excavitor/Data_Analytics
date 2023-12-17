from QueryServices.query1service import Query1API, Query1API2
from QueryServices.query2service import Query2API
from QueryServices.query3service import Query3API
from QueryServices.query4service import Query4API
from QueryServices.query5service import Query5API
from QueryServices.query6service import Query6API
from QueryServices.query7service import Query7API
from QueryServices.query8service import Query8API
from QueryServices.query9service import Query9API
from QueryServices.query10service import Query10API
from QueryServices.financialStoreTime1Service import QueryFST1API
from QueryServices.financialStoreTime2Service import QueryFST2API
from QueryServices.financialCustomerTime1Service import QueryFCusT1API
from QueryServices.financialCustomerTime2Service import QueryFCusT2API
from QueryServices.financialItemTime1Service import QueryFitemT1API
from QueryServices.financialItemTime2Service import QueryFitemT2API
from QueryServices.inventoryStoreTime1Service import QueryIStoreT1API
from QueryServices.inventoryStoreTime2Service import QueryIStoreT2API
from QueryServices.inventoryItemTime1Service import QueryIitemT1API
from QueryServices.inventoryItemTime2Service import QueryIitemT2API


from flask import Blueprint

query_api = Blueprint('queryapi', __name__)

query_api.add_url_rule('/q1', view_func=Query1API.as_view("Get Division Wise Sales"))
query_api.add_url_rule('/q1dis', view_func=Query1API2.as_view("Get District Wise Sales"))
query_api.add_url_rule('/q2', view_func=Query2API.as_view("Get transaction(cash/mobile/card) wise total sales"))
query_api.add_url_rule('/q3', view_func=Query3API.as_view("Get Total sales in Barisal"))
query_api.add_url_rule('/q4', view_func=Query4API.as_view("Get Total sales in 2015"))
query_api.add_url_rule('/q5', view_func=Query5API.as_view("Get Total sales of Barisal in 2015"))
query_api.add_url_rule('/q6', view_func=Query6API.as_view("Get the top three products that are most often purchased each store(or item supplier)"))
query_api.add_url_rule('/q7', view_func=Query7API.as_view("Get the products that have been sold since X days?"))
query_api.add_url_rule('/q8', view_func=Query8API.as_view("Get the season(quarter)that is the worst for each product item"))
query_api.add_url_rule('/q9', view_func=Query9API.as_view("Get the total sales of items geographically (division-wise)"))
query_api.add_url_rule('/q10', view_func=Query10API.as_view("Get the average sales of products sales per store monthly"))
query_api.add_url_rule('/financialStoreTime1', view_func=QueryFST1API.as_view("store and time dimensional financial analytics 1"))
query_api.add_url_rule('/financialStoreTime2', view_func=QueryFST2API.as_view("store and time dimensional financial analytics 2"))
query_api.add_url_rule('/financialCustomerTime1', view_func=QueryFCusT1API.as_view("customer and time dimensional financial analytics 1"))
query_api.add_url_rule('/financialCustomerTime2', view_func=QueryFCusT2API.as_view("customer and time dimensional financial analytics 2"))
query_api.add_url_rule('/financialItemTime1', view_func=QueryFitemT1API.as_view("item and time dimensional financial analytics 1"))
query_api.add_url_rule('/financialItemTime2', view_func=QueryFitemT2API.as_view("item and time dimensional financial analytics 2"))
query_api.add_url_rule('/inventoryStoreTime1', view_func=QueryIStoreT1API.as_view("store and time dimensional inventory analytics 1"))
query_api.add_url_rule('/inventoryStoreTime2', view_func=QueryIStoreT2API.as_view("store and time dimensional inventory analytics 2"))
query_api.add_url_rule('/inventoryItemTime1', view_func=QueryIitemT1API.as_view("item and time dimensional inventory analytics 1"))
query_api.add_url_rule('/inventoryItemTime2', view_func=QueryIitemT2API.as_view("item and time dimensional inventory analytics 2"))

