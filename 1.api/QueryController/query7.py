from DBconnection.dbconf import PostgresConnection
import pandas as pd

class Query7:
    def __init__(self,days):
        self.days = days
        self.con = PostgresConnection().getConnection()
        print("Constructor Called")
        print(self.days)

    def execute(self):
        con = self.con
        cur = con.cursor()
        print(self.days)

        div_q = "select i.item_name from ecomdb_star_schema.fact_table f"\
                " join ecomdb_star_schema.item_dim i on i.item_key = f.item_key" \
                " join ecomdb_star_schema.time_dim t on t.time_key = f.time_key" \
                " where t.date>(CURRENT_DATE - integer '{}')".format(self.days)
        
        cur.execute(div_q)
        result = cur.fetchall()
        pd_data = pd.DataFrame(list(result), columns=["item Name"])
        # pd_data["total sales"] = pd_data["total sales"].astype("float64")
        pd_data = pd_data.dropna()
        # print(pd_data)
        return pd_data.to_dict(orient='records')
        # return result

if __name__ == '__main__':
    query7 = Query7()
    data = query7.execute()
    print(data)
