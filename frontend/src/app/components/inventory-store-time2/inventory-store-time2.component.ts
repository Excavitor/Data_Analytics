import { Component, OnInit } from '@angular/core';
import { QueryService } from '../../services/query.service';
import { ChartDataset, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-inventory-store-time2',
  templateUrl: './inventory-store-time2.component.html',
  styleUrls: ['./inventory-store-time2.component.css'],
})
export class InventoryStoreTime2Component implements OnInit {
  constructor(private queryService: QueryService) {}

  data_all: any;
  store_key: any[] = [];
  sales1: any[] = [];
  sales2: any[] = [];
  sales3: any[] = [];
  sales4: any[] = [];
  sales5: any[] = [];
  sales6: any[] = [];
  sales7: any[] = [];
  sales8: any[] = [];
  sales9: any[] = [];
  sales10: any[] = [];
  sales11: any[] = [];
  sales12: any[] = [];
  selectedDataCount: number = 1;

  chartData: ChartDataset[] = [
    {
      type: 'line',
      label: 'Jan',
      data: this.sales1,
      backgroundColor: 'rgba(75, 192, 192, 0.5)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
      fill: true,
      tension: 0.3,
    },
    {
      type: 'line',
      label: 'Feb',
      data: this.sales2,
      backgroundColor: 'rgba(54, 162, 235, 0.5)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
      fill: true,
      tension: 0.3,
    },
    {
      type: 'line',
      label: 'Mar',
      data: this.sales3,
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
      fill: true,
      tension: 0.3,
    },
    {
      type: 'line',
      label: 'Apr',
      data: this.sales4,
      backgroundColor: 'rgba(255, 159, 64, 0.5)',
      borderColor: 'rgba(255, 159, 64, 1)',
      borderWidth: 1,
      fill: true,
      tension: 0.3,
    },
    {
      type: 'line',
      label: 'May',
      data: this.sales5,
      backgroundColor: 'rgba(255, 205, 86, 0.5)',
      borderColor: 'rgba(255, 205, 86, 1)',
      borderWidth: 1,
      fill: true,
      tension: 0.3,
    },
    {
      type: 'line',
      label: 'Jun',
      data: this.sales6,
      backgroundColor: 'rgba(153, 102, 255, 0.5)',
      borderColor: 'rgba(153, 102, 255, 1)',
      borderWidth: 1,
      fill: true,
      tension: 0.3,
    },
    {
      type: 'line',
      label: 'Jul',
      data: this.sales7,
      backgroundColor: 'rgba(201, 203, 207, 0.5)',
      borderColor: 'rgba(201, 203, 207, 1)',
      borderWidth: 1,
      fill: true,
      tension: 0.3,
    },
    {
      type: 'line',
      label: 'Aug',
      data: this.sales8,
      backgroundColor: 'rgba(255, 0, 255, 0.5)',
      borderColor: 'rgba(255, 0, 255, 1)',
      borderWidth: 1,
      fill: true,
      tension: 0.3,
    },
    {
      type: 'line',
      label: 'Sep',
      data: this.sales9,
      backgroundColor: 'rgba(0, 255, 0, 0.5)',
      borderColor: 'rgba(0, 255, 0, 1)',
      borderWidth: 1,
      fill: true,
      tension: 0.3,
    },
    {
      type: 'line',
      label: 'Oct',
      data: this.sales10,
      backgroundColor: 'rgba(128, 128, 128, 0.5)',
      borderColor: 'rgba(128, 128, 128, 1)',
      borderWidth: 1,
      fill: true,
      tension: 0.3,
    },
    {
      type: 'line',
      label: 'Nov',
      data: this.sales11,
      backgroundColor: 'rgba(255, 255, 0, 0.5)',
      borderColor: 'rgba(255, 255, 0, 1)',
      borderWidth: 1,
      fill: true,
      tension: 0.3,
    },
    {
      type: 'line',
      label: 'Dec',
      data: this.sales12,
      backgroundColor: 'rgba(0, 0, 255, 0.5)',
      borderColor: 'rgba(0, 0, 255, 1)',
      borderWidth: 1,
      fill: true,
      tension: 0.3,
    },
  ];
  chartLabels: string[] = this.store_key;

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
    this.getValueIStoreT2();
  }

  getValueIStoreT2(): void {
    this.queryService.getIStoreT2().subscribe((data: any) => {
      this.data_all = data;
      this.processChartData();
    });
  }

  processChartData(): void {
    for (const d of this.data_all['div_q1']) {
      this.store_key.push(d.store_key);
      this.sales1.push(d.quantity);
    }

    for (const d of this.data_all['div_q2']) {
      this.sales2.push(d.quantity);
    }

    for (const d of this.data_all['div_q3']) {
      this.sales3.push(d.quantity);
    }

    for (const d of this.data_all['div_q4']) {
      this.sales4.push(d.quantity);
    }

    for (const d of this.data_all['div_q5']) {
      this.sales5.push(d.quantity);
    }

    for (const d of this.data_all['div_q6']) {
      this.sales6.push(d.quantity);
    }

    for (const d of this.data_all['div_q7']) {
      this.sales7.push(d.quantity);
    }

    for (const d of this.data_all['div_q8']) {
      this.sales8.push(d.quantity);
    }

    for (const d of this.data_all['div_q9']) {
      this.sales9.push(d.quantity);
    }

    for (const d of this.data_all['div_q10']) {
      this.sales10.push(d.quantity);
    }

    for (const d of this.data_all['div_q11']) {
      this.sales11.push(d.quantity);
    }

    for (const d of this.data_all['div_q12']) {
      this.sales12.push(d.quantity);
    }

    this.chartData[0].data = this.sales1;
    this.chartData[1].data = this.sales2;
    this.chartData[2].data = this.sales3;
    this.chartData[3].data = this.sales4;
    this.chartData[4].data = this.sales5;
    this.chartData[5].data = this.sales6;
    this.chartData[6].data = this.sales7;
    this.chartData[7].data = this.sales8;
    this.chartData[8].data = this.sales9;
    this.chartData[9].data = this.sales10;
    this.chartData[10].data = this.sales11;
    this.chartData[11].data = this.sales12;
  }

  updateChartData(): void {
    if (
      this.selectedDataCount < 1 ||
      this.selectedDataCount > this.store_key.length
    ) {
      console.error('Invalid selectedDataCount');
      return;
    }

    const selectedMonths = this.store_key.slice(0, this.selectedDataCount);

    this.chartData[0].data = [];
    this.chartData[1].data = [];
    this.chartData[2].data = [];
    this.chartData[3].data = [];
    this.chartData[4].data = [];
    this.chartData[5].data = [];
    this.chartData[6].data = [];
    this.chartData[7].data = [];
    this.chartData[8].data = [];
    this.chartData[9].data = [];
    this.chartData[10].data = [];
    this.chartData[11].data = [];

    this.chartLabels = [];

    for (const month of selectedMonths) {
      const index = this.store_key.indexOf(month);

      this.chartData[0].data.push(this.sales1[index]);
      this.chartData[1].data.push(this.sales2[index]);
      this.chartData[2].data.push(this.sales3[index]);
      this.chartData[3].data.push(this.sales4[index]);
      this.chartData[4].data.push(this.sales5[index]);
      this.chartData[5].data.push(this.sales6[index]);
      this.chartData[6].data.push(this.sales7[index]);
      this.chartData[7].data.push(this.sales8[index]);
      this.chartData[8].data.push(this.sales9[index]);
      this.chartData[9].data.push(this.sales10[index]);
      this.chartData[10].data.push(this.sales11[index]);
      this.chartData[11].data.push(this.sales12[index]);

      this.chartLabels.push(month);
    }
  }
}
