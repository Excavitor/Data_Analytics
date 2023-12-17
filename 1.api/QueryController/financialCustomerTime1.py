from DBconnection.dbconf import PostgresConnection
import pandas as pd

class QueryFCusT1:
    def __init__(self):
        self.con = PostgresConnection().getConnection()
        print("Constructor Called")

    def execute(self):
        con = self.con
        cur = con.cursor()

        div_q1 = """ select c.coustomer_key, sum(f.total_price) as total_price from ecomdb_star_schema.fact_table f
                    join ecomdb_star_schema.customer_dim c on f.coustomer_key = c.coustomer_key
                    join ecomdb_star_schema.time_dim t on t.time_key = f.time_key
                    group by cube(c.coustomer_key)
                    order by c.coustomer_key;
                """

        cur.execute(div_q1)
        result = cur.fetchall()
        pd_data1 = pd.DataFrame(list(result), columns=["coustomer_key","total_sales"])
        pd_data1["total_sales"] = pd_data1["total_sales"].astype("float64")
        pd_data1 = pd_data1.dropna()


        return pd_data1.to_dict(orient='records')



if __name__ == '__main__':
    QueryFCusT1 = QueryFCusT1()
    data = QueryFCusT1.execute()
    print(data)
