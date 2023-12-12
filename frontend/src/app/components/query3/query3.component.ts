import { Component, OnInit } from '@angular/core';
import { QueryService } from '../../services/query.service';
import { HttpClient } from '@angular/common/http';
import { ChartDataset, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-query3',
  templateUrl: './query3.component.html',
  styleUrls: ['./query3.component.css'],
})
export class Query3Component implements OnInit {
  constructor(private queryService: QueryService, private http: HttpClient) {}

  data_all3: any;
  Division: any[] = [];
  sales: any[] = [];

  chartData: ChartDataset[] = [
    {
      type: 'pie',
      label: 'Sales',
      data: this.sales,
    },
  ];
  chartLabels: string[] = this.Division;

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
        displayColors: false, // removes unnecessary legend
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
    this.getValue3();
  }

  getValue3(): void {
    this.queryService.getQuery3().subscribe((data: any) => {
      for (const d of data) {
        console.log(d);
        this.Division.push(d.Division);
        this.sales.push(d['total sales']);
      }
      this.data_all3 = data;
    });
  }
}
