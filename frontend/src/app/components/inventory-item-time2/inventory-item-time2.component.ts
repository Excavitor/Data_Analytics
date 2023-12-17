import { Component, OnInit } from '@angular/core';
import { QueryService } from '../../services/query.service';
import { ChartDataset, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-inventory-item-time2',
  templateUrl: './inventory-item-time2.component.html',
  styleUrls: ['./inventory-item-time2.component.css'],
})
export class InventoryItemTime2Component implements OnInit {
  constructor(private queryService: QueryService) {}

  data_all: any;
  year: any[] = [];
  sales1: any[] = [];
  sales2: any[] = [];
  selectedDataCount: number = 1;

  chartData: ChartDataset[] = [
    {
      type: 'radar',
      label: 'Sold Quantity',
      data: this.sales1,
      backgroundColor: 'rgba(75, 192, 192, 0.5)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 3,
    },
    {
      type: 'radar',
      label: 'Stock Quantity',
      data: this.sales2,
      backgroundColor: 'rgba(54, 162, 235, 0.5)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 3,
    },
  ];
  chartLabels: string[] = this.year;

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
    this.getValueIitemT2();
  }

  getValueIitemT2(): void {
    this.queryService.getIitemT2().subscribe((data: any) => {
      this.data_all = data;

      this.processChartData();
    });
  }

  processChartData(): void {
    for (const d of this.data_all['div_q1']) {
      this.year.push(d.year);
      this.sales1.push(d.quantity);
    }

    for (const d of this.data_all['div_q2']) {
      this.sales2.push(d.quantity);
    }

    this.chartData[0].data = this.sales1;
    this.chartData[1].data = this.sales2;
  }
}
