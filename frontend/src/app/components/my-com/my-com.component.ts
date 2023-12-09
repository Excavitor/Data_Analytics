import { Component, OnInit } from '@angular/core';
import {QueryService} from "../../services/query.service";
import {HttpClient} from "@angular/common/http";
import {ChartDataset, ChartOptions} from "chart.js";
import { Subject } from 'rxjs';

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
  option: DataTables.Settings = {};
  dtTrigger:Subject<any>=new Subject<any>();
  selectedDataCount: number = 10; // Default value

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
    this.option = {
      paging: true,
      searching: true,
      lengthChange: true,
      // pageLength: 10,
      // processing: true,
      // serverSide: true,
      pagingType: 'simple_numbers',
      language:{
        searchPlaceholder:'Search any'
      }
    };
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
        this.dtTrigger.next(null);
      }
    )
  }

  updateChartData(): void {
    // Validate selectedDataCount
    if (this.selectedDataCount < 1 || this.selectedDataCount > this.data_all.length) {
      console.error('Invalid selectedDataCount');
      return;
    }

    // Update chartData and chartLabels based on the selectedDataCount
    const selectedData = this.data_all.slice(0, this.selectedDataCount);

    // Clear existing data
    this.chartData[0].data = [];
    this.chartLabels = [];

    // Update with selected data
    for (const d of selectedData) {
      this.chartData[0].data.push(d['total sales']);
      this.chartLabels.push(d.district);
    }
  }


}
