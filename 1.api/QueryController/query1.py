from DBconnection.dbconf import PostgresConnection
import pandas as pd

class Query1:
    def __init__(self):
        self.con = PostgresConnection().getConnection()
        print("Constructor Called")

    def execute1(self):
        con = self.con
        cur = con.cursor()

        div_q = "select s.division, sum(f.total_price) from ecomdb_star_schema.fact_table f"\
                " join ecomdb_star_schema.store_dim s on f.store_key = s.store_key"\
                " group by cube(s.division)"\
                " order by s.division"

        cur.execute(div_q)
        result = cur.fetchall()
        pd_data = pd.DataFrame(list(result), columns=["division", "total sales"])
        pd_data["total sales"] = pd_data["total sales"].astype("float64")
        pd_data = pd_data.dropna()
        return pd_data.to_dict(orient='records')

    def execute2(self):
        con = self.con
        cur = con.cursor()

        div_q = div_q = "select s.district, sum(f.total_price) from ecomdb_star_schema.fact_table f"\
                        " join ecomdb_star_schema.store_dim s on f.store_key = s.store_key"\
                        " group by cube(s.district)"\
                        " order by s.district"\

        cur.execute(div_q)
        result = cur.fetchall()
        pd_data = pd.DataFrame(list(result), columns=["district","total sales"])
        pd_data["total sales"] = pd_data["total sales"].astype("float64")
        pd_data = pd_data.dropna()
        # print(pd_data)
        return pd_data.to_dict(orient='records')
        # return result

if __name__ == '__main__':
    query1 = Query1()
    data = query1.execute1()
    print(data)
