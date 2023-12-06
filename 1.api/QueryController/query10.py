from DBconnection.dbconf import PostgresConnection
import pandas as pd

class Query10:
    def __init__(self):
        self.con = PostgresConnection().getConnection()
        print("Constructor Called")

    def execute(self):
        con = self.con
        cur = con.cursor()

        div_q = """ SELECT s.store_key, t.month, avg(f.total_price) FROM ecomdb_star_schema.fact_table f 
                    join ecomdb_star_schema.time_dim t on t.time_key = f.time_key
                    join ecomdb_star_schema.store_dim s on s.store_key = f.store_key
                    group by cube(s.store_key, t.month)
                    order by s.store_key, t.month;
                """
        cur.execute(div_q)
        result = cur.fetchall()
        pd_data = pd.DataFrame(list(result), columns=["store_key", "month", "avg_total_price"])
        pd_data["avg_total_price"] = pd_data["avg_total_price"].astype("float64")
        pd_data = pd_data.dropna()
        # print(pd_data)
        return pd_data.to_dict(orient='records')
        # return result

if __name__ == '__main__':
    query10 = Query10()
    data = query10.execute()
    print(data)
