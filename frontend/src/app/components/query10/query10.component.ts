import { Component, OnInit } from '@angular/core';
import { QueryService } from "../../services/query.service";
import { HttpClient } from "@angular/common/http";
import { ChartDataset, ChartOptions } from "chart.js";

@Component({
  selector: 'app-query10',
  templateUrl: './query10.component.html',
  styleUrls: ['./query10.component.css']
})
export class Query10Component implements OnInit {

  constructor(private queryService: QueryService, private http: HttpClient) { }

  data_all10: any
  store_key: any[] = [];
  month: any[] = [];
  avg_total_price: any[] = [];

  chartData: ChartDataset[] = [
    {
      type: "line",
      label: 'average sales of products sales per store monthly',
      data: this.avg_total_price,
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
      fill: false,
      tension: 0.1

    }
  ];
  chartLabels: string[] = this.store_key;

  chartOptions: ChartOptions = {

    // indexAxis: 'y',

    // ⤵️ Fill the wrapper
    responsive: true,
    maintainAspectRatio: false,

    // ⤵️ Remove the grids
    scales: {
      // x: {
      //   type: 'category'
      // },
      // y: {
      //   beginAtZero: true
      // },
      // x: {
      //   type: 'linear',
      //   position: 'bottom'
      // },
      xAxis: {
        display: true,
        grid: {
          drawBorder: false // removes random border at bottom
        }
      },
      yAxis: {
        display: true
      }
    },

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
          size: 15
        }
      }
    }
  };
  ngOnInit(): void {
    this.getValue10()
  }

  getValue10(): void{
    this.queryService.getQuery10().subscribe((data: any) => {
        for (const d of data) {
          console.log(d)
          this.store_key.push(d.store_key)
          this.month.push(d.month)
          this.avg_total_price.push(d.avg_total_price);
        }
        this.data_all10 = data
      }
    )
  }
}
