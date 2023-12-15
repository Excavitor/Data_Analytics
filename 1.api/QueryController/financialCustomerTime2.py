from DBconnection.dbconf import PostgresConnection
import pandas as pd

class QueryFCusT2:
    def __init__(self):
        self.con = PostgresConnection().getConnection()
        print("Constructor Called")

    def execute(self):
        con = self.con
        cur = con.cursor()

        div_q1 = """select t.year, c.division, sum(f.total_price) from ecomdb_star_schema.fact_table f
                    join ecomdb_star_schema.customer_dim c on c.coustomer_key = f.coustomer_key
                    join ecomdb_star_schema.time_dim t on t.time_key = f.time_key
                    where c.division = 'Dhaka'
                    group by cube(t.year, c.division)
                    order by t.year, c.division, sum(f.total_price);
                """

        div_q2 = """ select t.year, c.division, sum(f.total_price) from ecomdb_star_schema.fact_table f
                    join ecomdb_star_schema.customer_dim c on c.coustomer_key = f.coustomer_key
                    join ecomdb_star_schema.time_dim t on t.time_key = f.time_key
                    where c.division = 'Chittagong'
                    group by cube(t.year, c.division)
                    order by t.year, c.division, sum(f.total_price);
                        """

        div_q3 = """ select t.year, c.division, sum(f.total_price) from ecomdb_star_schema.fact_table f
                    join ecomdb_star_schema.customer_dim c on c.coustomer_key = f.coustomer_key
                    join ecomdb_star_schema.time_dim t on t.time_key = f.time_key
                    where c.division = 'Barishal'
                    group by cube(t.year, c.division)
                    order by t.year, c.division, sum(f.total_price);
                        """


        div_q8 = """ select t.year, c.division, sum(f.total_price) from ecomdb_star_schema.fact_table f
                    join ecomdb_star_schema.customer_dim c on c.coustomer_key = f.coustomer_key
                    join ecomdb_star_schema.time_dim t on t.time_key = f.time_key
                    where c.division = 'Sylhet'
                    group by cube(t.year, c.division)
                    order by t.year, c.division, sum(f.total_price);
                        """

        cur.execute(div_q1)
        result = cur.fetchall()
        pd_data1 = pd.DataFrame(list(result), columns=["year","division","total_sales"])
        pd_data1["total_sales"] = pd_data1["total_sales"].astype("float64")
        pd_data1 = pd_data1.dropna()

        cur.execute(div_q2)
        result = cur.fetchall()
        pd_data2 = pd.DataFrame(list(result), columns=["year", "division", "total_sales"])
        pd_data2["total_sales"] = pd_data2["total_sales"].astype("float64")
        pd_data2 = pd_data2.dropna()

        cur.execute(div_q3)
        result = cur.fetchall()
        pd_data3 = pd.DataFrame(list(result), columns=["year", "division", "total_sales"])
        pd_data3["total_sales"] = pd_data3["total_sales"].astype("float64")
        pd_data3 = pd_data3.dropna()

        cur.execute(div_q8)
        result = cur.fetchall()
        pd_data8 = pd.DataFrame(list(result), columns=["year", "division", "total_sales"])
        pd_data8["total_sales"] = pd_data8["total_sales"].astype("float64")
        pd_data8 = pd_data8.dropna()

        return (
            pd_data1.to_dict(orient='records'), pd_data2.to_dict(orient='records'),
            pd_data3.to_dict(orient='records'), pd_data8.to_dict(orient='records')
        )


if __name__ == '__main__':
    QueryFCusT2 = QueryFCusT2()
    data = QueryFCusT2.execute()
    print(data)
