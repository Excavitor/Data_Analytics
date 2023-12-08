from DBconnection.dbconf import PostgresConnection
import pandas as pd

class Query3:
    def __init__(self):
        self.con = PostgresConnection().getConnection()
        print("Constructor Called")

    def execute(self):
        con = self.con
        cur = con.cursor()

        div_q = """ SELECT s.division, SUM(f.total_price) FROM ecomdb_star_schema.fact_table f 
                    join ecomdb_star_schema.store_dim s on s.store_key = f.store_key
                    group by cube(s.division)
                    order by s.division;
                """
        cur.execute(div_q)
        result = cur.fetchall()
        pd_data = pd.DataFrame(list(result), columns=["Division", "total sales"])
        pd_data["total sales"] = pd_data["total sales"].astype("float64")
        pd_data = pd_data.dropna()
        # print(pd_data)
        return pd_data.to_dict(orient='records')
        # return result

if __name__ == '__main__':
    query3 = Query3()
    data = query3.execute()
    print(data)
