from DBconnection.dbconf import PostgresConnection
import pandas as pd

class Query4:
    def __init__(self):
        self.con = PostgresConnection().getConnection()
        print("Constructor Called")

    def execute(self):
        con = self.con
        cur = con.cursor()

        div_q = """ SELECT t.year, t.quarter, SUM(f.total_price) FROM ecomdb_star_schema.fact_table f 
                    join ecomdb_star_schema.time_dim t on t.time_key = f.time_key
                    where t.year = 2015
                    group by cube(t.year, t.quarter)
                    order by t.quarter;
                """
        cur.execute(div_q)
        result = cur.fetchall()
        pd_data = pd.DataFrame(list(result), columns=["Year", "Quarter", "total sales"])
        pd_data["total sales"] = pd_data["total sales"].astype("float64")
        pd_data = pd_data.dropna()
        # print(pd_data)
        return pd_data.to_dict(orient='records')
        # return result

if __name__ == '__main__':
    query4 = Query4()
    data = query4.execute()
    print(data)
