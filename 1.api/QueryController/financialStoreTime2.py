from DBconnection.dbconf import PostgresConnection
import pandas as pd

class QueryFST2:
    def __init__(self):
        self.con = PostgresConnection().getConnection()
        print("Constructor Called")

    def execute(self):
        con = self.con
        cur = con.cursor()

        div_q1 = """ select t.month, s.store_size, sum(f.total_price) from ecomdb_star_schema.fact_table f
                    join ecomdb_star_schema.store_dim s on f.store_key = s.store_key
                    join ecomdb_star_schema.time_dim t on t.time_key = f.time_key
                    where s.store_size = 'small'
                    group by cube(t.month, s.store_size)
                    order by t.month;
                """
        div_q2 = """ select t.month, s.store_size, sum(f.total_price) from ecomdb_star_schema.fact_table f
                            join ecomdb_star_schema.store_dim s on f.store_key = s.store_key
                            join ecomdb_star_schema.time_dim t on t.time_key = f.time_key
                            where s.store_size = 'medium'
                            group by cube(t.month, s.store_size)
                            order by t.month;
                        """
        div_q3 = """ select t.month, s.store_size, sum(f.total_price) from ecomdb_star_schema.fact_table f
                            join ecomdb_star_schema.store_dim s on f.store_key = s.store_key
                            join ecomdb_star_schema.time_dim t on t.time_key = f.time_key
                            where s.store_size = 'high'
                            group by cube(t.month, s.store_size)
                            order by t.month;
                        """

        cur.execute(div_q1)
        result = cur.fetchall()
        pd_data1 = pd.DataFrame(list(result), columns=["month","store_size","total_sales"])
        pd_data1["total_sales"] = pd_data1["total_sales"].astype("float64")
        pd_data1 = pd_data1.dropna()

        cur.execute(div_q2)
        result = cur.fetchall()
        pd_data2 = pd.DataFrame(list(result), columns=["month", "store_size", "total_sales"])
        pd_data2["total_sales"] = pd_data2["total_sales"].astype("float64")
        pd_data2 = pd_data2.dropna()

        cur.execute(div_q3)
        result = cur.fetchall()
        pd_data3 = pd.DataFrame(list(result), columns=["month", "store_size", "total_sales"])
        pd_data3["total_sales"] = pd_data3["total_sales"].astype("float64")
        pd_data3 = pd_data3.dropna()

        return (
            pd_data1.to_dict(orient='records'), pd_data2.to_dict(orient='records'), pd_data3.to_dict(orient='records')
        )


if __name__ == '__main__':
    QueryFST2 = QueryFST2()
    data = QueryFST2.execute()
    print(data)
