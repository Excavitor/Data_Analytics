from DBconnection.dbconf import PostgresConnection
import pandas as pd

class QueryIitemT1:
    def __init__(self):
        self.con = PostgresConnection().getConnection()
        print("Constructor Called")

    def execute(self):
        con = self.con
        cur = con.cursor()

        div_q1 = """ select t.quarter, sum(i.stock_quantity) from ecomdb_star_schema.fact_table f
                    join ecomdb_star_schema.item_dim i on i.item_key = f.item_key
                    join ecomdb_star_schema.time_dim t on t.time_key = f.time_key
                    where t.year = 2014
                    group by cube(t.quarter)
                    order by t.quarter;
                """

        div_q2 = """ select t.quarter, sum(i.stock_quantity) from ecomdb_star_schema.fact_table f
                    join ecomdb_star_schema.item_dim i on i.item_key = f.item_key
                    join ecomdb_star_schema.time_dim t on t.time_key = f.time_key
                    where t.year = 2015
                    group by cube(t.quarter)
                    order by t.quarter;
                """

        div_q3 = """ select t.quarter, sum(i.stock_quantity) from ecomdb_star_schema.fact_table f
                    join ecomdb_star_schema.item_dim i on i.item_key = f.item_key
                    join ecomdb_star_schema.time_dim t on t.time_key = f.time_key
                    where t.year = 2016
                    group by cube(t.quarter)
                    order by t.quarter;
                """

        div_q4 = """ select t.quarter, sum(i.stock_quantity) from ecomdb_star_schema.fact_table f
                    join ecomdb_star_schema.item_dim i on i.item_key = f.item_key
                    join ecomdb_star_schema.time_dim t on t.time_key = f.time_key
                    where t.year = 2017
                    group by cube(t.quarter)
                    order by t.quarter;
                """

        div_q5 = """ select t.quarter, sum(i.stock_quantity) from ecomdb_star_schema.fact_table f
                    join ecomdb_star_schema.item_dim i on i.item_key = f.item_key
                    join ecomdb_star_schema.time_dim t on t.time_key = f.time_key
                    where t.year = 2018
                    group by cube(t.quarter)
                    order by t.quarter;
                """

        div_q6 = """ select t.quarter, sum(i.stock_quantity) from ecomdb_star_schema.fact_table f
                    join ecomdb_star_schema.item_dim i on i.item_key = f.item_key
                    join ecomdb_star_schema.time_dim t on t.time_key = f.time_key
                    where t.year = 2019
                    group by cube(t.quarter)
                    order by t.quarter;
                """

        div_q7 = """ select t.quarter, sum(i.stock_quantity) from ecomdb_star_schema.fact_table f
                    join ecomdb_star_schema.item_dim i on i.item_key = f.item_key
                    join ecomdb_star_schema.time_dim t on t.time_key = f.time_key
                    where t.year = 2020
                    group by cube(t.quarter)
                    order by t.quarter;
                """

        div_q8 = """ select t.quarter, sum(i.stock_quantity) from ecomdb_star_schema.fact_table f
                    join ecomdb_star_schema.item_dim i on i.item_key = f.item_key
                    join ecomdb_star_schema.time_dim t on t.time_key = f.time_key
                    where t.year = 2022
                    group by cube(t.quarter)
                    order by t.quarter;
                """

        div_q9 = """ select t.quarter, sum(i.stock_quantity) from ecomdb_star_schema.fact_table f
                    join ecomdb_star_schema.item_dim i on i.item_key = f.item_key
                    join ecomdb_star_schema.time_dim t on t.time_key = f.time_key
                    where t.year = 2023
                    group by cube(t.quarter)
                    order by t.quarter;
                """

        cur.execute(div_q1)
        result = cur.fetchall()
        pd_data1 = pd.DataFrame(list(result), columns=["quarter","stock_quantity"])
        pd_data1 = pd_data1.dropna()

        cur.execute(div_q2)
        result = cur.fetchall()
        pd_data2 = pd.DataFrame(list(result), columns=["quarter","stock_quantity"])
        pd_data2 = pd_data2.dropna()

        cur.execute(div_q3)
        result = cur.fetchall()
        pd_data3 = pd.DataFrame(list(result), columns=["quarter","stock_quantity"])
        pd_data3 = pd_data3.dropna()

        cur.execute(div_q4)
        result = cur.fetchall()
        pd_data4 = pd.DataFrame(list(result), columns=["quarter","stock_quantity"])
        pd_data4 = pd_data4.dropna()

        cur.execute(div_q5)
        result = cur.fetchall()
        pd_data5 = pd.DataFrame(list(result), columns=["quarter","stock_quantity"])
        pd_data5 = pd_data5.dropna()

        cur.execute(div_q6)
        result = cur.fetchall()
        pd_data6 = pd.DataFrame(list(result), columns=["quarter","stock_quantity"])
        pd_data6 = pd_data6.dropna()

        cur.execute(div_q7)
        result = cur.fetchall()
        pd_data7 = pd.DataFrame(list(result), columns=["quarter","stock_quantity"])
        pd_data7 = pd_data7.dropna()

        cur.execute(div_q8)
        result = cur.fetchall()
        pd_data8 = pd.DataFrame(list(result), columns=["quarter","stock_quantity"])
        pd_data8 = pd_data8.dropna()

        cur.execute(div_q9)
        result = cur.fetchall()
        pd_data9 = pd.DataFrame(list(result), columns=["quarter","stock_quantity"])
        pd_data9 = pd_data9.dropna()

        return (
            pd_data1.to_dict(orient='records'), pd_data2.to_dict(orient='records'), pd_data3.to_dict(orient='records'),
            pd_data4.to_dict(orient='records'), pd_data5.to_dict(orient='records'), pd_data6.to_dict(orient='records'),
            pd_data7.to_dict(orient='records'), pd_data8.to_dict(orient='records'), pd_data9.to_dict(orient='records')
        )


if __name__ == '__main__':
    QueryI_itemT1 = QueryIitemT1()
    data = QueryI_itemT1.execute()
    print(data)
