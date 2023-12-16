from DBconnection.dbconf import PostgresConnection
import pandas as pd

class QueryIitemT2:
    def __init__(self):
        self.con = PostgresConnection().getConnection()
        print("Constructor Called")

    def execute(self):
        con = self.con
        cur = con.cursor()

        div_q1 = """ select t.year, sum(f.quantity) from ecomdb_star_schema.fact_table f
                    join ecomdb_star_schema.item_dim i on i.item_key = f.item_key
                    join ecomdb_star_schema.time_dim t on t.time_key = f.time_key
                    group by cube(t.year)
                    order by t.year;
                """

        div_q2 = """ select t.year, sum(i.stock_quantity) from ecomdb_star_schema.fact_table f
                    join ecomdb_star_schema.item_dim i on i.item_key = f.item_key
                    join ecomdb_star_schema.time_dim t on t.time_key = f.time_key
                    group by cube(t.year)
                    order by t.year;
                """

        cur.execute(div_q1)
        result = cur.fetchall()
        pd_data1 = pd.DataFrame(list(result), columns=["year","quantity"])
        pd_data1 = pd_data1.dropna()

        cur.execute(div_q2)
        result = cur.fetchall()
        pd_data2 = pd.DataFrame(list(result), columns=["year","quantity"])
        pd_data2 = pd_data2.dropna()

        return (
            pd_data1.to_dict(orient='records'), pd_data2.to_dict(orient='records')
        )


if __name__ == '__main__':
    QueryI_itemT2 = QueryIitemT2()
    data = QueryI_itemT2.execute()
    print(data)
