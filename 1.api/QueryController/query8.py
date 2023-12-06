from DBconnection.dbconf import PostgresConnection
import pandas as pd

class Query8:
    def __init__(self):
        self.con = PostgresConnection().getConnection()
        print("Constructor Called")

    def execute(self):
        con = self.con
        cur = con.cursor()

        div_q = """ SELECT i.item_name, t.quarter, sum(f.total_price) FROM ecomdb_star_schema.fact_table f 
                    join ecomdb_star_schema.time_dim t on t.time_key = f.time_key
                    join ecomdb_star_schema.item_dim i on i.item_key = f.item_key
                    group by cube(i.item_name, t.quarter)
                    order by i.item_name, sum(f.quantity);
                """
        cur.execute(div_q)
        result = cur.fetchall()
        pd_data = pd.DataFrame(list(result), columns=["item_name","quarter","total sales"])
        pd_data["total sales"] = pd_data["total sales"].astype("float64")
        pd_data = pd_data.dropna()
        pd_data = pd_data.groupby("item_name").head(1)
        # print(pd_data)
        return pd_data.to_dict(orient='records')
        # return result

if __name__ == '__main__':
    query8 = Query8()
    data = query8.execute()
    print(data)
