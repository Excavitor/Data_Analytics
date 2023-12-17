import { Component, OnInit } from '@angular/core';
import { QueryService } from '../../services/query.service';
import { ChartDataset, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-financial-item-time1',
  templateUrl: './financial-item-time1.component.html',
  styleUrls: ['./financial-item-time1.component.css'],
})
export class FinancialItemTime1Component implements OnInit {
  constructor(private queryService: QueryService) {}

  data_all: any;
  item_name: any[] = [];
  quantity: any[] = [];
  selectedDataCount: number = 1;

  chartData: ChartDataset[] = [
    {
      type: 'line',
      label: 'Product Sold',
      data: this.quantity,
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
      fill: true,
      tension: 0.1,
    },
  ];
  chartLabels: string[] = this.item_name;

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
    this.getValueFitemT1();
  }

  getValueFitemT1(): void {
    this.queryService.getFitemT1().subscribe((data: any) => {
      for (const d of data) {
        this.quantity.push(d.quantity);
        this.item_name.push(d.item_name);
      }
      this.data_all = data;
    });
  }

  updateChartData(): void {
    if (
      this.selectedDataCount < 1 ||
      this.selectedDataCount > this.data_all.length
    ) {
      console.error('Invalid selectedDataCount');
      return;
    }

    const selectedData = this.data_all.slice(0, this.selectedDataCount);

    this.chartData[0].data = [];
    this.chartLabels = [];

    for (const d of selectedData) {
      this.chartData[0].data.push(d.quantity);
      this.chartLabels.push(d.item_name);
    }
  }
}
