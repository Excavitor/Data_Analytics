from DBconnection.dbconf import PostgresConnection
import pandas as pd

class Query5:
    def __init__(self):
        self.con = PostgresConnection().getConnection()
        print("Constructor Called")

    def execute(self):
        con = self.con
        cur = con.cursor()

        div_q = """ SELECT s.division, t.quarter, SUM(f.total_price) FROM ecomdb_star_schema.fact_table f 
                    join ecomdb_star_schema.store_dim s on s.store_key = f.store_key
                    join ecomdb_star_schema.time_dim t on t.time_key = f.time_key
                    where t.year = 2015 AND s.division = 'Barishal'
                    group by cube(s.division, t.quarter)
                    order by t.quarter;
                """

        div_q2 = """ SELECT s.division, t.quarter, SUM(f.total_price) FROM ecomdb_star_schema.fact_table f 
                            join ecomdb_star_schema.store_dim s on s.store_key = f.store_key
                            join ecomdb_star_schema.time_dim t on t.time_key = f.time_key
                            where t.year = 2015 AND s.division = 'Dhaka'
                            group by cube(s.division, t.quarter)
                            order by t.quarter;
                        """

        div_q3 = """ SELECT s.division, t.quarter, SUM(f.total_price) FROM ecomdb_star_schema.fact_table f 
                            join ecomdb_star_schema.store_dim s on s.store_key = f.store_key
                            join ecomdb_star_schema.time_dim t on t.time_key = f.time_key
                            where t.year = 2015 AND s.division = 'Chittagong'
                            group by cube(s.division, t.quarter)
                            order by t.quarter;
                        """

        cur.execute(div_q)
        result = cur.fetchall()
        pd_data = pd.DataFrame(list(result), columns=["Division", "Quarter", "total sales"])
        pd_data["total sales"] = pd_data["total sales"].astype("float64")
        pd_data = pd_data.dropna()

        cur.execute(div_q2)
        result_div_q2 = cur.fetchall()
        pd_data_div_q2 = pd.DataFrame(list(result_div_q2), columns=["Division", "Quarter", "total sales"])
        pd_data_div_q2["total sales"] = pd_data_div_q2["total sales"].astype("float64")
        pd_data_div_q2 = pd_data_div_q2.dropna()

        cur.execute(div_q3)
        result3 = cur.fetchall()
        pd_data3 = pd.DataFrame(list(result3), columns=["Division", "Quarter", "total sales"])
        pd_data3["total sales"] = pd_data3["total sales"].astype("float64")
        pd_data3 = pd_data3.dropna()

        return pd_data.to_dict(orient='records'), pd_data_div_q2.to_dict(orient='records'), pd_data3.to_dict(orient='records')


if __name__ == '__main__':
    query5 = Query5()
    data = query5.execute()
    print(data)
