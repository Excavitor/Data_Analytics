from DBconnection.dbconf import PostgresConnection
import pandas as pd

class Query6:
    def __init__(self):
        self.con = PostgresConnection().getConnection()
        print("Constructor Called")

    def execute(self):
        con = self.con
        cur = con.cursor()

        div_q = """ SELECT s.store_key, i.item_name, sum(f.quantity) FROM ecomdb_star_schema.fact_table f 
                    join ecomdb_star_schema.store_dim s on s.store_key = f.store_key
                    join ecomdb_star_schema.item_dim i on i.item_key = f.item_key
                    group by cube(s.store_key, i.item_name)
                    order by s.store_key, sum(f.quantity) desc;
                """
        cur.execute(div_q)
        result = cur.fetchall()
        pd_data = pd.DataFrame(list(result), columns=["store_key", "item_name", "total sales(quantity)"])
        pd_data = pd_data.dropna()
        pd_data_1 = pd_data.groupby("store_key").head(3)
        # print(pd_data)
        return pd_data_1.to_dict(orient='records')
        # return result

if __name__ == '__main__':
    query6 = Query6()
    data = query6.execute()
    print(data)
