import { Component, OnInit } from '@angular/core';
import { QueryService } from '../../services/query.service';
import { HttpClient } from '@angular/common/http';
import { ChartDataset, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-query2',
  templateUrl: './query2.component.html',
  styleUrls: ['./query2.component.css'],
})
export class Query2Component implements OnInit {
  constructor(private queryService: QueryService, private http: HttpClient) {}

  data_all2: any;
  trans: any[] = [];
  sales: any[] = [];

  chartData: ChartDataset[] = [
    {
      type: 'doughnut',
      label: 'Transaction',
      data: this.sales,
    },
  ];
  chartLabels: string[] = ['Card', 'Cash', 'Mobile'];

  chartOptions: ChartOptions = {
    // ⤵️ Fill the wrapper
    responsive: true,
    maintainAspectRatio: true,

    plugins: {
      legend: {
        display: true,
      },

      tooltip: {
        // ⤵️ tooltip main styles
        backgroundColor: '#ffeaff',
        displayColors: true, // removes unnecessary legend
        padding: 10,

        // ⤵️ title
        titleColor: '#0b4ad2',
        titleFont: {
          size: 18,
        },

        // ⤵️ body
        bodyColor: '#2D2F33',
        bodyFont: {
          size: 13,
        },
      },
    },
  };

  ngOnInit(): void {
    // console.log(this.trans)
    this.getTrans();
  }

  getTrans(): void {
    this.queryService.getQuery2().subscribe((data: any) => {
      for (const d of data) {
        console.log(d);
        this.trans.push(d['trans_type']);
        this.sales.push(d['total sales']);
      }
      this.data_all2 = data;
    });
  }
}
