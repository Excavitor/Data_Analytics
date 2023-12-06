from DBconnection.dbconf import PostgresConnection
import pandas as pd

class Query2:
    def __init__(self):
        self.con = PostgresConnection().getConnection()
        print("Constructor Called")

    def execute(self):
        con = self.con
        cur = con.cursor()

        div_q = """ select t.trans_type, sum(f.total_price) from ecomdb_star_schema.fact_table f
                    join ecomdb_star_schema.trans_dim t on f.payment_key = t.payment_key
                    group by cube(t.trans_type)
                    order by t.trans_type
                """
        cur.execute(div_q)
        result = cur.fetchall()
        pd_data = pd.DataFrame(list(result), columns=["trans type", "total sales"])
        pd_data["total sales"] = pd_data["total sales"].astype("float64")
        pd_data = pd_data.dropna()
        # print(pd_data)
        return pd_data.to_dict(orient='records')
        # return result

if __name__ == '__main__':
    query2 = Query2()
    data = query2.execute()
    print(data)
