import { Component, OnInit } from '@angular/core';
import { QueryService } from '../../services/query.service';
import { ChartDataset, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-financial-customer-time2',
  templateUrl: './financial-customer-time2.component.html',
  styleUrls: ['./financial-customer-time2.component.css'],
})
export class FinancialCustomerTime2Component implements OnInit {
  constructor(private queryService: QueryService) {}

  data_all: any;
  division: any[] = [];
  year: any[] = [];
  sales1: any[] = [];
  sales2: any[] = [];
  sales3: any[] = [];
  sales8: any[] = [];

  chartData: ChartDataset[] = [
    {
      type: 'line',
      label: 'Dhaka',
      data: this.sales1,
      backgroundColor: 'rgba(75, 192, 192, 0.5)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
      fill: true,
      tension: 0.3,
    },
    {
      type: 'line',
      label: 'Chittagong',
      data: this.sales2,
      backgroundColor: 'rgba(54, 162, 235, 0.5)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
      fill: true,
      tension: 0.3,
    },
    {
      type: 'line',
      label: 'Barishal',
      data: this.sales3,
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
      fill: true,
      tension: 0.3,
    },
    {
      type: 'line',
      label: 'Sylhet',
      data: this.sales8,
      backgroundColor: 'rgba(255, 0, 255, 0.5)',
      borderColor: 'rgba(255, 0, 255, 1)',
      borderWidth: 1,
      fill: true,
      tension: 0.3,
    },
  ];
  chartLabels: string[] = this.year;

  chartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
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
          drawBorder: false,
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
        backgroundColor: '#ffeaff',
        displayColors: false,
        padding: 10,
        titleColor: '#0b4ad2',
        titleFont: {
          size: 18,
        },
        bodyColor: '#2D2F33',
        bodyFont: {
          size: 13,
        },
      },
    },
  };
  ngOnInit(): void {
    this.getValueFCusT2();
  }

  getValueFCusT2(): void {
    this.queryService.getFCusT2().subscribe((data: any) => {
      this.data_all = data;

      this.processChartData();
    });
  }
  processChartData(): void {
    for (const d of this.data_all['div_q1']) {
      this.year.push(d.year);
      this.sales1.push(d.total_sales);
    }

    for (const d of this.data_all['div_q2']) {
      this.sales2.push(d.total_sales);
    }

    for (const d of this.data_all['div_q3']) {
      this.sales3.push(d.total_sales);
    }

    for (const d of this.data_all['div_q8']) {
      this.sales8.push(d.total_sales);
    }

    this.chartData[0].data = this.sales1;
    this.chartData[1].data = this.sales2;
    this.chartData[2].data = this.sales3;
    this.chartData[3].data = this.sales8;
  }
}
