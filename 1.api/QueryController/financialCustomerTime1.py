from DBconnection.dbconf import PostgresConnection
import pandas as pd

class QueryFCusT1:
    def __init__(self):
        self.con = PostgresConnection().getConnection()
        print("Constructor Called")

    def execute(self):
        con = self.con
        cur = con.cursor()

        div_q1 = """ select c.coustomer_key, sum(f.total_price) as total_price from ecomdb_star_schema.fact_table f
                    join ecomdb_star_schema.customer_dim c on f.coustomer_key = c.coustomer_key
                    join ecomdb_star_schema.time_dim t on t.time_key = f.time_key
                    group by cube(c.coustomer_key)
                    order by c.coustomer_key;
                """

        # div_q2 = """ select t.quarter, c.coustomer_key, sum(f.total_price) as total_price from ecomdb_star_schema.fact_table f
        #                     join ecomdb_star_schema.customer_dim c on f.coustomer_key = c.coustomer_key
        #                     join ecomdb_star_schema.time_dim t on t.time_key = f.time_key
        #                     where t.quarter = 'Q2'
        #                     group by cube(t.quarter, c.coustomer_key)
        #                     order by t.quarter, total_price DESC
        #                     LIMIT 22;
        #                 """
        #
        # div_q3 = """ select t.quarter, c.coustomer_key, sum(f.total_price) as total_price from ecomdb_star_schema.fact_table f
        #                     join ecomdb_star_schema.customer_dim c on f.coustomer_key = c.coustomer_key
        #                     join ecomdb_star_schema.time_dim t on t.time_key = f.time_key
        #                     where t.quarter = 'Q3'
        #                     group by cube(t.quarter, c.coustomer_key)
        #                     order by t.quarter, total_price DESC
        #                     LIMIT 22;
        #                 """
        #
        # div_q4 = """ select t.quarter, c.coustomer_key, sum(f.total_price) as total_price from ecomdb_star_schema.fact_table f
        #                     join ecomdb_star_schema.customer_dim c on f.coustomer_key = c.coustomer_key
        #                     join ecomdb_star_schema.time_dim t on t.time_key = f.time_key
        #                     where t.quarter = 'Q4'
        #                     group by cube(c.coustomer_key, t.quarter)
        #                     order by t.quarter, total_price DESC
        #                     LIMIT 22;
        #                 """

        cur.execute(div_q1)
        result = cur.fetchall()
        pd_data1 = pd.DataFrame(list(result), columns=["coustomer_key","total_sales"])
        pd_data1["total_sales"] = pd_data1["total_sales"].astype("float64")
        pd_data1 = pd_data1.dropna()

        # cur.execute(div_q2)
        # result = cur.fetchall()
        # pd_data2 = pd.DataFrame(list(result), columns=["quarter", "coustomer_key", "total_sales"])
        # pd_data2["total_sales"] = pd_data2["total_sales"].astype("float64")
        # pd_data2 = pd_data2.dropna()
        #
        # cur.execute(div_q3)
        # result = cur.fetchall()
        # pd_data3 = pd.DataFrame(list(result), columns=["quarter", "coustomer_key", "total_sales"])
        # pd_data3["total_sales"] = pd_data3["total_sales"].astype("float64")
        # pd_data3 = pd_data3.dropna()
        #
        # cur.execute(div_q4)
        # result = cur.fetchall()
        # pd_data4 = pd.DataFrame(list(result), columns=["quarter", "coustomer_key", "total_sales"])
        # pd_data4["total_sales"] = pd_data4["total_sales"].astype("float64")
        # pd_data4 = pd_data4.dropna()

        return pd_data1.to_dict(orient='records')



if __name__ == '__main__':
    QueryFCusT1 = QueryFCusT1()
    data = QueryFCusT1.execute()
    print(data)
