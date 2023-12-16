from DBconnection.dbconf import PostgresConnection
import pandas as pd

class QueryIStoreT2:
    def __init__(self):
        self.con = PostgresConnection().getConnection()
        print("Constructor Called")

    def execute(self):
        con = self.con
        cur = con.cursor()

        div_q1 = """ select s.store_key, sum(f.quantity) from ecomdb_star_schema.fact_table f
                    join ecomdb_star_schema.store_dim s on f.store_key = s.store_key
                    join ecomdb_star_schema.time_dim t on t.time_key = f.time_key
                    where t.month = 1
                    group by cube(s.store_key)
                    order by s.store_key;
                """

        div_q2 = """ select s.store_key, sum(f.quantity) from ecomdb_star_schema.fact_table f
                    join ecomdb_star_schema.store_dim s on f.store_key = s.store_key
                    join ecomdb_star_schema.time_dim t on t.time_key = f.time_key
                    where t.month = 2
                    group by cube(s.store_key)
                    order by s.store_key;
                """

        div_q3 = """ select s.store_key, sum(f.quantity) from ecomdb_star_schema.fact_table f
                    join ecomdb_star_schema.store_dim s on f.store_key = s.store_key
                    join ecomdb_star_schema.time_dim t on t.time_key = f.time_key
                    where t.month = 3
                    group by cube(s.store_key)
                    order by s.store_key;
                """

        div_q4 = """ select s.store_key, sum(f.quantity) from ecomdb_star_schema.fact_table f
                    join ecomdb_star_schema.store_dim s on f.store_key = s.store_key
                    join ecomdb_star_schema.time_dim t on t.time_key = f.time_key
                    where t.month = 4
                    group by cube(s.store_key)
                    order by s.store_key;
                """

        div_q5 = """ select s.store_key, sum(f.quantity) from ecomdb_star_schema.fact_table f
                    join ecomdb_star_schema.store_dim s on f.store_key = s.store_key
                    join ecomdb_star_schema.time_dim t on t.time_key = f.time_key
                    where t.month = 5
                    group by cube(s.store_key)
                    order by s.store_key;
                """

        div_q6 = """ select s.store_key, sum(f.quantity) from ecomdb_star_schema.fact_table f
                    join ecomdb_star_schema.store_dim s on f.store_key = s.store_key
                    join ecomdb_star_schema.time_dim t on t.time_key = f.time_key
                    where t.month = 6
                    group by cube(s.store_key)
                    order by s.store_key;
                """

        div_q7 = """ select s.store_key, sum(f.quantity) from ecomdb_star_schema.fact_table f
                    join ecomdb_star_schema.store_dim s on f.store_key = s.store_key
                    join ecomdb_star_schema.time_dim t on t.time_key = f.time_key
                    where t.month = 7
                    group by cube(s.store_key)
                    order by s.store_key;
                """

        div_q8 = """ select s.store_key, sum(f.quantity) from ecomdb_star_schema.fact_table f
                    join ecomdb_star_schema.store_dim s on f.store_key = s.store_key
                    join ecomdb_star_schema.time_dim t on t.time_key = f.time_key
                    where t.month = 8
                    group by cube(s.store_key)
                    order by s.store_key;
                """

        div_q9 = """ select s.store_key, sum(f.quantity) from ecomdb_star_schema.fact_table f
                            join ecomdb_star_schema.store_dim s on f.store_key = s.store_key
                            join ecomdb_star_schema.time_dim t on t.time_key = f.time_key
                            where t.month = 9
                            group by cube(s.store_key)
                            order by s.store_key;
                        """

        div_qa1 = """ select s.store_key, sum(f.quantity) from ecomdb_star_schema.fact_table f
                            join ecomdb_star_schema.store_dim s on f.store_key = s.store_key
                            join ecomdb_star_schema.time_dim t on t.time_key = f.time_key
                            where t.month = 10
                            group by cube(s.store_key)
                            order by s.store_key;
                        """

        div_qb1 = """ select s.store_key, sum(f.quantity) from ecomdb_star_schema.fact_table f
                            join ecomdb_star_schema.store_dim s on f.store_key = s.store_key
                            join ecomdb_star_schema.time_dim t on t.time_key = f.time_key
                            where t.month = 11
                            group by cube(s.store_key)
                            order by s.store_key;
                        """

        div_qc1 = """ select s.store_key, sum(f.quantity) from ecomdb_star_schema.fact_table f
                            join ecomdb_star_schema.store_dim s on f.store_key = s.store_key
                            join ecomdb_star_schema.time_dim t on t.time_key = f.time_key
                            where t.month = 12
                            group by cube(s.store_key)
                            order by s.store_key;
                        """

        cur.execute(div_q1)
        result = cur.fetchall()
        pd_data1 = pd.DataFrame(list(result), columns=["store_key","quantity"])
        pd_data1 = pd_data1.dropna()

        cur.execute(div_q2)
        result = cur.fetchall()
        pd_data2 = pd.DataFrame(list(result), columns=["store_key","quantity"])
        pd_data2 = pd_data2.dropna()

        cur.execute(div_q3)
        result = cur.fetchall()
        pd_data3 = pd.DataFrame(list(result), columns=["store_key","quantity"])
        pd_data3 = pd_data3.dropna()

        cur.execute(div_q4)
        result = cur.fetchall()
        pd_data4 = pd.DataFrame(list(result), columns=["store_key","quantity"])
        pd_data4 = pd_data4.dropna()

        cur.execute(div_q5)
        result = cur.fetchall()
        pd_data5 = pd.DataFrame(list(result), columns=["store_key","quantity"])
        pd_data5 = pd_data5.dropna()

        cur.execute(div_q6)
        result = cur.fetchall()
        pd_data6 = pd.DataFrame(list(result), columns=["store_key","quantity"])
        pd_data6 = pd_data6.dropna()

        cur.execute(div_q7)
        result = cur.fetchall()
        pd_data7 = pd.DataFrame(list(result), columns=["store_key","quantity"])
        pd_data7 = pd_data7.dropna()

        cur.execute(div_q8)
        result = cur.fetchall()
        pd_data8 = pd.DataFrame(list(result), columns=["store_key","quantity"])
        pd_data8 = pd_data8.dropna()

        cur.execute(div_q9)
        result = cur.fetchall()
        pd_data9 = pd.DataFrame(list(result), columns=["store_key", "quantity"])
        pd_data9 = pd_data9.dropna()

        cur.execute(div_qa1)
        result = cur.fetchall()
        pd_data10 = pd.DataFrame(list(result), columns=["store_key", "quantity"])
        pd_data10 = pd_data10.dropna()

        cur.execute(div_qb1)
        result = cur.fetchall()
        pd_data11 = pd.DataFrame(list(result), columns=["store_key", "quantity"])
        pd_data11 = pd_data11.dropna()

        cur.execute(div_qc1)
        result = cur.fetchall()
        pd_data12 = pd.DataFrame(list(result), columns=["store_key", "quantity"])
        pd_data12 = pd_data12.dropna()

        return (
            pd_data1.to_dict(orient='records'), pd_data2.to_dict(orient='records'), pd_data3.to_dict(orient='records'),
            pd_data4.to_dict(orient='records'), pd_data5.to_dict(orient='records'), pd_data6.to_dict(orient='records'),
            pd_data7.to_dict(orient='records'), pd_data8.to_dict(orient='records'), pd_data9.to_dict(orient='records'),
            pd_data10.to_dict(orient='records'), pd_data11.to_dict(orient='records'), pd_data12.to_dict(orient='records')
        )


if __name__ == '__main__':
    QueryI_StoreT2 = QueryIStoreT2()
    data = QueryI_StoreT2.execute()
    print(data)
