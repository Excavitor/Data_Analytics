import { Component, OnInit } from '@angular/core';
import { QueryService } from '../../services/query.service';
import { ChartDataset, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-financial-customer-time1',
  templateUrl: './financial-customer-time1.component.html',
  styleUrls: ['./financial-customer-time1.component.css'],
})
export class FinancialCustomerTime1Component implements OnInit {
  constructor(private queryService: QueryService) {}

  data_all_c: any;
  customer: any[] = [];
  total_sales: any[] = [];
  selectedDataCount: number = 1;

  chartData: ChartDataset[] = [
    {
      type: 'line',
      label: 'Customer Total Spent',
      data: [],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
      fill: true,
      tension: 0.1,
    },
  ];
  chartLabels: string[] = this.customer;

  chartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      xAxis: {
        display: true,
        grid: {
          drawBorder: false,
        },
      },
      yAxis: {
        display: true,
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
          size: 15,
        },
      },
    },
  };
  ngOnInit(): void {
    this.getValueFCusT1();
  }

  getValueFCusT1(): void {
    this.queryService.getFCusT1().subscribe((data: any) => {
      for (const d of data) {
        this.customer.push(d.coustomer_key);
        this.total_sales.push(d.total_sales);
      }
      this.chartData[0].data = this.total_sales;
      this.data_all_c = data;
    });
  }

  updateChartData(): void {
    if (
      this.selectedDataCount < 1 ||
      this.selectedDataCount > this.data_all_c.length
    ) {
      console.error('Invalid selectedDataCount');
      return;
    }

    const selectedData = this.data_all_c.slice(0, this.selectedDataCount);

    this.chartData[0].data = [];
    this.chartLabels = [];

    for (const d of selectedData) {
      this.chartData[0].data.push(d.total_sales);
      this.chartLabels.push(d.coustomer_key);
    }
  }
}
