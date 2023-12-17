import { Component, OnInit } from '@angular/core';
import { QueryService } from '../../services/query.service';
import { ChartDataset, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-inventory-store-time1',
  templateUrl: './inventory-store-time1.component.html',
  styleUrls: ['./inventory-store-time1.component.css'],
})
export class InventoryStoreTime1Component implements OnInit {
  constructor(private queryService: QueryService) {}

  data_all: any;
  year: any[] = [];
  sales1: any[] = [];
  sales2: any[] = [];
  sales3: any[] = [];
  selectedDataCount: number = 1;

  chartData: ChartDataset[] = [
    {
      type: 'bar',
      label: 'Small',
      data: this.sales1,
      backgroundColor: 'rgba(75, 192, 192, 0.5)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
    {
      type: 'bar',
      label: 'Medium',
      data: this.sales2,
      backgroundColor: 'rgba(54, 162, 235, 0.5)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
    },
    {
      type: 'bar',
      label: 'High',
      data: this.sales3,
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      borderColor: 'rgba(255, 99, 132, 1)',
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
    this.getValueIStoreT1();
  }

  getValueIStoreT1(): void {
    this.queryService.getIStoreT1().subscribe((data: any) => {
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

    for (const d of this.data_all['div_q3']) {
      this.sales3.push(d.quantity);
    }
    this.chartData[0].data = this.sales1;
    this.chartData[1].data = this.sales2;
    this.chartData[2].data = this.sales3;
  }

  updateChartData(): void {
    if (
      this.selectedDataCount < 1 ||
      this.selectedDataCount > this.year.length
    ) {
      console.error('Invalid selectedDataCount');
      return;
    }

    const selectedMonths = this.year.slice(0, this.selectedDataCount);

    this.chartData[0].data = [];
    this.chartData[1].data = [];
    this.chartData[2].data = [];
    this.chartLabels = [];

    for (const month of selectedMonths) {
      const index = this.year.indexOf(month);

      this.chartData[0].data.push(this.sales1[index]);
      this.chartData[1].data.push(this.sales2[index]);
      this.chartData[2].data.push(this.sales3[index]);

      this.chartLabels.push(month);
    }
  }
}
