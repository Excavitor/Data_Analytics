import { Component, OnInit } from '@angular/core';
import { QueryService } from '../../services/query.service';
import { HttpClient } from '@angular/common/http';
import { ChartDataset, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-financial-store-time1',
  templateUrl: './financial-store-time1.component.html',
  styleUrls: ['./financial-store-time1.component.css'],
})
export class FinancialStoreTime1Component implements OnInit {
  constructor(private queryService: QueryService) {}

  data_all: any;
  year: any[] = [];
  sales1: any[] = [];
  sales2: any[] = [];
  sales3: any[] = [];
  sales4: any[] = [];
  sales5: any[] = [];
  sales6: any[] = [];
  sales7: any[] = [];
  sales8: any[] = [];

  chartData: ChartDataset[] = [
    {
      type: 'bar',
      label: 'Dhaka',
      data: this.sales1,
      backgroundColor: 'rgba(75, 192, 192, 0.5)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
    {
      type: 'bar',
      label: 'Chittagong',
      data: this.sales2,
      backgroundColor: 'rgba(54, 162, 235, 0.5)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
    },
    {
      type: 'bar',
      label: 'Barishal',
      data: this.sales3,
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
    {
      type: 'bar',
      label: 'Khulna',
      data: this.sales4,
      backgroundColor: 'rgba(255, 159, 64, 0.5)',
      borderColor: 'rgba(255, 159, 64, 1)',
      borderWidth: 1,
    },
    {
      type: 'bar',
      label: 'Mymensingh',
      data: this.sales5,
      backgroundColor: 'rgba(255, 205, 86, 0.5)',
      borderColor: 'rgba(255, 205, 86, 1)',
      borderWidth: 1,
    },
    {
      type: 'bar',
      label: 'Rajshahi',
      data: this.sales6,
      backgroundColor: 'rgba(153, 102, 255, 0.5)',
      borderColor: 'rgba(153, 102, 255, 1)',
      borderWidth: 1,
    },
    {
      type: 'bar',
      label: 'Rangpur',
      data: this.sales7,
      backgroundColor: 'rgba(201, 203, 207, 0.5)',
      borderColor: 'rgba(201, 203, 207, 1)',
      borderWidth: 1,
    },
    {
      type: 'bar',
      label: 'Sylhet',
      data: this.sales8,
      backgroundColor: 'rgba(255, 0, 255, 0.5)',
      borderColor: 'rgba(255, 0, 255, 1)',
      borderWidth: 1,
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
    this.getValueFST1();
  }

  getValueFST1(): void {
    this.queryService.getFST1().subscribe((data: any) => {
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

    for (const d of this.data_all['div_q4']) {
      this.sales4.push(d.total_sales);
    }

    for (const d of this.data_all['div_q5']) {
      this.sales5.push(d.total_sales);
    }

    for (const d of this.data_all['div_q6']) {
      this.sales6.push(d.total_sales);
    }

    for (const d of this.data_all['div_q7']) {
      this.sales7.push(d.total_sales);
    }

    for (const d of this.data_all['div_q8']) {
      this.sales8.push(d.total_sales);
    }
    this.chartData[0].data = this.sales1;
    this.chartData[1].data = this.sales2;
    this.chartData[2].data = this.sales3;
    this.chartData[3].data = this.sales4;
    this.chartData[4].data = this.sales5;
    this.chartData[5].data = this.sales6;
    this.chartData[6].data = this.sales7;
    this.chartData[7].data = this.sales8;
  }
}
