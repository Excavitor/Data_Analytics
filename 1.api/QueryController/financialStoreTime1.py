from DBconnection.dbconf import PostgresConnection
import pandas as pd

class QueryFST1:
    def __init__(self):
        self.con = PostgresConnection().getConnection()
        print("Constructor Called")

    def execute(self):
        con = self.con
        cur = con.cursor()

        div_q1 = """ select t.year, s.division, sum(f.total_price) from ecomdb_star_schema.fact_table f
                    join ecomdb_star_schema.store_dim s on f.store_key = s.store_key
                    join ecomdb_star_schema.time_dim t on t.time_key = f.time_key
                    where s.division = 'Dhaka'
                    group by cube(t.year, s.division)
                    order by t.year, s.division;
                """

        div_q2 = """ select t.year, s.division, sum(f.total_price) from ecomdb_star_schema.fact_table f
                            join ecomdb_star_schema.store_dim s on f.store_key = s.store_key
                            join ecomdb_star_schema.time_dim t on t.time_key = f.time_key
                            where s.division = 'Chittagong'
                            group by cube(t.year, s.division)
                            order by t.year, s.division;
                        """

        div_q3 = """ select t.year, s.division, sum(f.total_price) from ecomdb_star_schema.fact_table f
                            join ecomdb_star_schema.store_dim s on f.store_key = s.store_key
                            join ecomdb_star_schema.time_dim t on t.time_key = f.time_key
                            where s.division = 'Barishal'
                            group by cube(t.year, s.division)
                            order by t.year, s.division;
                        """

        div_q4 = """ select t.year, s.division, sum(f.total_price) from ecomdb_star_schema.fact_table f
                            join ecomdb_star_schema.store_dim s on f.store_key = s.store_key
                            join ecomdb_star_schema.time_dim t on t.time_key = f.time_key
                            where s.division = 'Khulna'
                            group by cube(t.year, s.division)
                            order by t.year, s.division;
                        """

        div_q5 = """ select t.year, s.division, sum(f.total_price) from ecomdb_star_schema.fact_table f
                            join ecomdb_star_schema.store_dim s on f.store_key = s.store_key
                            join ecomdb_star_schema.time_dim t on t.time_key = f.time_key
                            where s.division = 'Mymensingh'
                            group by cube(t.year, s.division)
                            order by t.year, s.division;
                        """

        div_q6 = """ select t.year, s.division, sum(f.total_price) from ecomdb_star_schema.fact_table f
                            join ecomdb_star_schema.store_dim s on f.store_key = s.store_key
                            join ecomdb_star_schema.time_dim t on t.time_key = f.time_key
                            where s.division = 'Rajshahi'
                            group by cube(t.year, s.division)
                            order by t.year, s.division;
                        """

        div_q7 = """ select t.year, s.division, sum(f.total_price) from ecomdb_star_schema.fact_table f
                            join ecomdb_star_schema.store_dim s on f.store_key = s.store_key
                            join ecomdb_star_schema.time_dim t on t.time_key = f.time_key
                            where s.division = 'Rangpur'
                            group by cube(t.year, s.division)
                            order by t.year, s.division;
                        """

        div_q8 = """ select t.year, s.division, sum(f.total_price) from ecomdb_star_schema.fact_table f
                            join ecomdb_star_schema.store_dim s on f.store_key = s.store_key
                            join ecomdb_star_schema.time_dim t on t.time_key = f.time_key
                            where s.division = 'Sylhet'
                            group by cube(t.year, s.division)
                            order by t.year, s.division;
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

        cur.execute(div_q4)
        result = cur.fetchall()
        pd_data4 = pd.DataFrame(list(result), columns=["year", "division", "total_sales"])
        pd_data4["total_sales"] = pd_data4["total_sales"].astype("float64")
        pd_data4 = pd_data4.dropna()

        cur.execute(div_q5)
        result = cur.fetchall()
        pd_data5 = pd.DataFrame(list(result), columns=["year", "division", "total_sales"])
        pd_data5["total_sales"] = pd_data5["total_sales"].astype("float64")
        pd_data5 = pd_data5.dropna()

        cur.execute(div_q6)
        result = cur.fetchall()
        pd_data6 = pd.DataFrame(list(result), columns=["year", "division", "total_sales"])
        pd_data6["total_sales"] = pd_data6["total_sales"].astype("float64")
        pd_data6 = pd_data6.dropna()

        cur.execute(div_q7)
        result = cur.fetchall()
        pd_data7 = pd.DataFrame(list(result), columns=["year", "division", "total_sales"])
        pd_data7["total_sales"] = pd_data7["total_sales"].astype("float64")
        pd_data7 = pd_data7.dropna()

        cur.execute(div_q8)
        result = cur.fetchall()
        pd_data8 = pd.DataFrame(list(result), columns=["year", "division", "total_sales"])
        pd_data8["total_sales"] = pd_data8["total_sales"].astype("float64")
        pd_data8 = pd_data8.dropna()

        return (
            pd_data1.to_dict(orient='records'), pd_data2.to_dict(orient='records'), pd_data3.to_dict(orient='records'),
            pd_data4.to_dict(orient='records'), pd_data5.to_dict(orient='records'), pd_data6.to_dict(orient='records'),
            pd_data7.to_dict(orient='records'), pd_data8.to_dict(orient='records')
        )


if __name__ == '__main__':
    QueryFST1 = QueryFST1()
    data = QueryFST1.execute()
    print(data)
