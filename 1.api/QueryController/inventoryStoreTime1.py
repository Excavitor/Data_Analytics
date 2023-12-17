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

        return (
            pd_data1.to_dict(orient='records'), pd_data2.to_dict(orient='records'), pd_data3.to_dict(orient='records')
        )

if __name__ == '__main__':
    QueryIStoreT1 = QueryIStoreT1()
    data = QueryIStoreT1.execute()
    print(data)
