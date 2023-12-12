import { Component, OnInit } from '@angular/core';
import { QueryService } from '../../services/query.service';
import { HttpClient } from '@angular/common/http';
import { ChartDataset, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-query4',
  templateUrl: './query4.component.html',
  styleUrls: ['./query4.component.css'],
})
export class Query4Component implements OnInit {
  constructor(private queryService: QueryService, private http: HttpClient) {}

  data_all4: any;
  Year: any[] = [];
  Quarter: any[] = [];
  sales: any[] = [];

  chartData: ChartDataset[] = [
    {
      type: 'polarArea',
      label: '2015 Sales',
      data: this.sales,
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(75, 192, 192)',
        'rgb(255, 205, 86)',
        'rgb(54, 162, 235)',
      ],
      hoverBackgroundColor: ['rgba(60, 60, 60, 1)'],
      borderColor: ['rgba(0, 0, 0, 0)'],
      borderWidth: 1,
    },
  ];
  chartLabels: string[] = ['Q1', 'Q2', 'Q3', 'Q4'];

  chartOptions: ChartOptions = {
    // ⤵️ Fill the wrapper
    responsive: true,
    maintainAspectRatio: true,

    // ⤵️ Remove the grids
    scales: {
      x: {
        type: 'category',
      },
      y: {
        beginAtZero: true,
      },
      xAxis: {
        display: false,
        grid: {
          drawBorder: false, // removes random border at bottom
        },
      },
      yAxis: {
        display: false,
      },
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
    this.getValue4();
  }

  getValue4(): void {
    this.queryService.getQuery4().subscribe((data: any) => {
      for (const d of data) {
        console.log(d);
        this.Year.push(d.Year);
        this.Quarter.push(d.Quarter);
        this.sales.push(d['total sales']);
      }
      this.data_all4 = data;
    });
  }
}
