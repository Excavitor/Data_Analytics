from DBconnection.dbconf import PostgresConnection
import pandas as pd

class QueryFitemT1:
    def __init__(self):
        self.con = PostgresConnection().getConnection()
        print("Constructor Called")

    def execute(self):
        con = self.con
        cur = con.cursor()

        div_q = """ select i.item_name, sum(f.quantity) from ecomdb_star_schema.fact_table f
                    join ecomdb_star_schema.item_dim i on i.item_key = f.item_key
                    join ecomdb_star_schema.time_dim t on t.time_key = f.time_key
                    group by cube(i.item_name)
                    order by i.item_name;
                """

        cur.execute(div_q)
        result = cur.fetchall()
        pd_data = pd.DataFrame(list(result), columns=["item_name", "quantity"])
        pd_data = pd_data.dropna()
        return pd_data.to_dict(orient='records')

if __name__ == '__main__':
    QueryFitemT1 = QueryFitemT1()
    data = QueryFitemT1.execute()
    print(data)
