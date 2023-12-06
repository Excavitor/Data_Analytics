import { Component, OnInit } from '@angular/core';
import {QueryService} from "../../services/query.service";
import {HttpClient} from "@angular/common/http";
import {ChartDataset, ChartOptions} from "chart.js";

@Component({
  selector: 'app-my-com',
  templateUrl: './my-com.component.html',
  styleUrls: ['./my-com.component.css']
})
export class MyComComponent implements OnInit {

  constructor(private queryService: QueryService, private http: HttpClient) { }

  data_all: any
  district: any[] = [];
  sales: any[] = [];

  chartData: ChartDataset[] = [
    {
      type: "pie",
      label: 'Sales in Taka',
      data: this.sales,
    }
  ];
  chartLabels: string[] = this.district;

  chartOptions: ChartOptions = {

    // ⤵️ Fill the wrapper
    responsive: true,
    maintainAspectRatio: true,

    // // ⤵️ Remove the grids
    // scales: {
    //   xAxis: {
    //     display: false,
    //     grid: {
    //       drawBorder: false // removes random border at bottom
    //     }
    //   },
    //   yAxis: {
    //     display: false
    //   }
    // },

    plugins: {
      legend: {
        display: true,
      },

      tooltip: {
        // ⤵️ tooltip main styles
        backgroundColor: '#ffeaff',
        displayColors: false, // removes unnecessary legend
        padding: 10,

        // ⤵️ title
        titleColor: '#0b4ad2',
        titleFont: {
          size: 18
        },

        // ⤵️ body
        bodyColor: '#2D2F33',
        bodyFont: {
          size: 13
        }
      }
    }
  };

  ngOnInit(): void {
    // this.getTest()
    this.getDistrict()
  }

  // getTest(): void{
  //   const a = 5;
  //   const b = 6;
  //   console.log("Hello")
  //   console.log(a+b)
  //   this.data_all = a+b;
  // }

  getDistrict(): void{
    this.queryService.getQuery1District().subscribe((data: any) => {
        for (const d of data) {
          console.log(d)
          this.district.push(d.district)
          this.sales.push(d['total sales'])
        }
        this.data_all = data
      }
    )
  }

}
