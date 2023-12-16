from DBconnection.dbconf import PostgresConnection
import pandas as pd

class QueryIStoreT1:
    def __init__(self):
        self.con = PostgresConnection().getConnection()
        print("Constructor Called")

    def execute(self):
        con = self.con
        cur = con.cursor()

        div_q1 = """ select t.year, sum(f.quantity) from ecomdb_star_schema.fact_table f
                    join ecomdb_star_schema.store_dim s on s.store_key = f.store_key
                    join ecomdb_star_schema.time_dim t on t.time_key = f.time_key
                    where s.store_size = 'small'
                    group by cube(t.year)
                    order by t.year;
                """
        div_q2 = """ select t.year, sum(f.quantity) from ecomdb_star_schema.fact_table f
                    join ecomdb_star_schema.store_dim s on s.store_key = f.store_key
                    join ecomdb_star_schema.time_dim t on t.time_key = f.time_key
                    where s.store_size = 'medium'
                    group by cube(t.year)
                    order by t.year;
                """
        div_q3 = """ select t.year, sum(f.quantity) from ecomdb_star_schema.fact_table f
                    join ecomdb_star_schema.store_dim s on s.store_key = f.store_key
                    join ecomdb_star_schema.time_dim t on t.time_key = f.time_key
                    where s.store_size = 'high'
                    group by cube(t.year)
                    order by t.year;
                """
        # div_q4 = """ select t.year, sum(f.quantity) from ecomdb_star_schema.fact_table f
        #             join ecomdb_star_schema.store_dim s on s.store_key = f.store_key
        #             join ecomdb_star_schema.time_dim t on t.time_key = f.time_key
        #             where t.year = 2017
        #             group by cube(t.year)
        #             order by t.year;
        #         """
        # div_q5 = """ select t.year, sum(f.quantity) from ecomdb_star_schema.fact_table f
        #             join ecomdb_star_schema.store_dim s on s.store_key = f.store_key
        #             join ecomdb_star_schema.time_dim t on t.time_key = f.time_key
        #             where t.year = 2018
        #             group by cube(t.year)
        #             order by t.year;
        #         """
        # div_q6 = """ select t.year, sum(f.quantity) from ecomdb_star_schema.fact_table f
        #             join ecomdb_star_schema.store_dim s on s.store_key = f.store_key
        #             join ecomdb_star_schema.time_dim t on t.time_key = f.time_key
        #             where t.year = 2019
        #             group by cube(t.year)
        #             order by t.year;
        #         """
        # div_q7 = """ select t.year, sum(f.quantity) from ecomdb_star_schema.fact_table f
        #             join ecomdb_star_schema.store_dim s on s.store_key = f.store_key
        #             join ecomdb_star_schema.time_dim t on t.time_key = f.time_key
        #             where t.year = 2020
        #             group by cube(t.year)
        #             order by t.year;
        #         """
        # div_q8 = """ select t.year, sum(f.quantity) from ecomdb_star_schema.fact_table f
        #             join ecomdb_star_schema.store_dim s on s.store_key = f.store_key
        #             join ecomdb_star_schema.time_dim t on t.time_key = f.time_key
        #             where t.year = 2021
        #             group by cube(t.year)
        #             order by t.year;
        #         """
        # div_q9 = """ select t.year, sum(f.quantity) from ecomdb_star_schema.fact_table f
        #             join ecomdb_star_schema.store_dim s on s.store_key = f.store_key
        #             join ecomdb_star_schema.time_dim t on t.time_key = f.time_key
        #             where t.year = 2022
        #             group by cube(t.year)
        #             order by t.year;
        #         """

        cur.execute(div_q1)
        result = cur.fetchall()
        pd_data1 = pd.DataFrame(list(result), columns=["year", "quantity"])
        pd_data1 = pd_data1.dropna()

        cur.execute(div_q2)
        result = cur.fetchall()
        pd_data2 = pd.DataFrame(list(result), columns=["year", "quantity"])
        pd_data2 = pd_data2.dropna()

        cur.execute(div_q3)
        result = cur.fetchall()
        pd_data3 = pd.DataFrame(list(result), columns=["year", "quantity"])
        pd_data3 = pd_data3.dropna()

        # cur.execute(div_q4)
        # result = cur.fetchall()
        # pd_data4 = pd.DataFrame(list(result), columns=["year", "quantity"])
        # pd_data4 = pd_data4.dropna()
        #
        # cur.execute(div_q5)
        # result = cur.fetchall()
        # pd_data5 = pd.DataFrame(list(result), columns=["year", "quantity"])
        # pd_data5 = pd_data5.dropna()
        #
        # cur.execute(div_q6)
        # result = cur.fetchall()
        # pd_data6 = pd.DataFrame(list(result), columns=["year", "quantity"])
        # pd_data6 = pd_data6.dropna()
        #
        # cur.execute(div_q7)
        # result = cur.fetchall()
        # pd_data7 = pd.DataFrame(list(result), columns=["year", "quantity"])
        # pd_data7 = pd_data7.dropna()
        #
        # cur.execute(div_q8)
        # result = cur.fetchall()
        # pd_data8 = pd.DataFrame(list(result), columns=["year", "quantity"])
        # pd_data8 = pd_data8.dropna()
        #
        # cur.execute(div_q9)
        # result = cur.fetchall()
        # pd_data9 = pd.DataFrame(list(result), columns=["year", "quantity"])
        # pd_data9 = pd_data9.dropna()

        return (
            pd_data1.to_dict(orient='records'), pd_data2.to_dict(orient='records'), pd_data3.to_dict(orient='records')
        )

if __name__ == '__main__':
    QueryIStoreT1 = QueryIStoreT1()
    data = QueryIStoreT1.execute()
    print(data)
