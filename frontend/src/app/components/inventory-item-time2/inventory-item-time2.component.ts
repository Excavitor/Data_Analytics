import { Component, OnInit } from '@angular/core';
import { QueryService } from '../../services/query.service';
import { ChartDataset, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-inventory-item-time2',
  templateUrl: './inventory-item-time2.component.html',
  styleUrls: ['./inventory-item-time2.component.css']
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
      // fill: true,
      // tension: 0.3,
    },
    {
      type: 'radar',
      label: 'Stock Quantity',
      data: this.sales2,
      backgroundColor: 'rgba(54, 162, 235, 0.5)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 3,
      // fill: true,
      // tension: 0.3,
    },
  ];
  chartLabels: string[] = this.year;

  chartOptions: ChartOptions = {
    // indexAxis: 'y',

    // ⤵️ Fill the wrapper
    responsive: true,
    maintainAspectRatio: true,

    // ⤵️ Remove the grids
    scales: {
      // x: {
      //   type: 'category'
      // },
      // y: {
      //   beginAtZero: true
      // },
      // x: {
      //   type: 'linear',
      //   position: 'bottom'
      // },
      xAxis: {
        display: true,
        grid: {
          drawBorder: false, // removes random border at bottom
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

      // Process data for the chart
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

    // Update chart data
    this.chartData[0].data = this.sales1;
    this.chartData[1].data = this.sales2;
  }

  // updateChartData(): void {
  //   if (this.selectedDataCount < 1 || this.selectedDataCount > this.months.length) {
  //     console.error('Invalid selectedDataCount');
  //     return;
  //   }
  //
  //   const selectedMonths = this.months.slice(0, this.selectedDataCount);
  //
  //   this.chartData[0].data = [];
  //   this.chartData[1].data = [];
  //   this.chartData[2].data = [];
  //   this.chartData[3].data = [];
  //   this.chartData[4].data = [];
  //   this.chartData[5].data = [];
  //   this.chartData[6].data = [];
  //   this.chartData[7].data = [];
  //   this.chartData[8].data = [];
  //
  //   this.chartLabels = [];
  //
  //   for (const month of selectedMonths) {
  //     const index = this.months.indexOf(month);
  //
  //     this.chartData[0].data.push(this.sales1[index]);
  //     this.chartData[1].data.push(this.sales2[index]);
  //     this.chartData[2].data.push(this.sales3[index]);
  //     this.chartData[3].data.push(this.sales4[index]);
  //     this.chartData[4].data.push(this.sales5[index]);
  //     this.chartData[5].data.push(this.sales6[index]);
  //     this.chartData[6].data.push(this.sales7[index]);
  //     this.chartData[7].data.push(this.sales8[index]);
  //     this.chartData[8].data.push(this.sales9[index]);
  //
  //     this.chartLabels.push(month);
  //   }
  // }
}


