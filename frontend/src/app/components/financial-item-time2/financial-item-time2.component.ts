import { Component, OnInit } from '@angular/core';
import { QueryService } from '../../services/query.service';
import { ChartDataset, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-financial-item-time2',
  templateUrl: './financial-item-time2.component.html',
  styleUrls: ['./financial-item-time2.component.css'],
})
export class FinancialItemTime2Component implements OnInit {
  constructor(private queryService: QueryService) {}

  data_all: any;
  item_name: any[] = [];
  sales1: any[] = [];
  sales2: any[] = [];
  sales3: any[] = [];
  sales4: any[] = [];
  sales5: any[] = [];
  sales6: any[] = [];
  sales7: any[] = [];
  sales8: any[] = [];
  sales9: any[] = [];
  selectedDataCount: number = 1;

  chartData: ChartDataset[] = [
    {
      type: 'line',
      label: '2014',
      data: this.sales1,
      backgroundColor: 'rgba(75, 192, 192, 0.5)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
      fill: true,
      tension: 0.3,
    },
    {
      type: 'line',
      label: '2015',
      data: this.sales2,
      backgroundColor: 'rgba(54, 162, 235, 0.5)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
      fill: true,
      tension: 0.3,
    },
    {
      type: 'line',
      label: '2016',
      data: this.sales3,
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
      fill: true,
      tension: 0.3,
    },
    {
      type: 'line',
      label: '2017',
      data: this.sales4,
      backgroundColor: 'rgba(255, 159, 64, 0.5)',
      borderColor: 'rgba(255, 159, 64, 1)',
      borderWidth: 1,
      fill: true,
      tension: 0.3,
    },
    {
      type: 'line',
      label: '2018',
      data: this.sales5,
      backgroundColor: 'rgba(255, 205, 86, 0.5)',
      borderColor: 'rgba(255, 205, 86, 1)',
      borderWidth: 1,
      fill: true,
      tension: 0.3,
    },
    {
      type: 'line',
      label: '2019',
      data: this.sales6,
      backgroundColor: 'rgba(153, 102, 255, 0.5)',
      borderColor: 'rgba(153, 102, 255, 1)',
      borderWidth: 1,
      fill: true,
      tension: 0.3,
    },
    {
      type: 'line',
      label: '2020',
      data: this.sales7,
      backgroundColor: 'rgba(201, 203, 207, 0.5)',
      borderColor: 'rgba(201, 203, 207, 1)',
      borderWidth: 1,
      fill: true,
      tension: 0.3,
    },
    {
      type: 'line',
      label: '2021',
      data: this.sales8,
      backgroundColor: 'rgba(255, 0, 255, 0.5)',
      borderColor: 'rgba(255, 0, 255, 1)',
      borderWidth: 1,
      fill: true,
      tension: 0.3,
    },
    {
      type: 'line',
      label: '2022',
      data: this.sales9,
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
      fill: true,
      tension: 0.3,
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
    this.getValueFitemT2();
  }

  getValueFitemT2(): void {
    this.queryService.getFitemT2().subscribe((data: any) => {
      this.data_all = data;
      this.processChartData();
    });
  }

  processChartData(): void {
    for (const d of this.data_all['div_q1']) {
      this.item_name.push(d.item_name);
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

    for (const d of this.data_all['div_q9']) {
      this.sales9.push(d.total_sales);
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
  }

  updateChartData(): void {
    if (
      this.selectedDataCount < 1 ||
      this.selectedDataCount > this.item_name.length
    ) {
      console.error('Invalid selectedDataCount');
      return;
    }

    const selectedMonths = this.item_name.slice(0, this.selectedDataCount);

    this.chartData[0].data = [];
    this.chartData[1].data = [];
    this.chartData[2].data = [];
    this.chartData[3].data = [];
    this.chartData[4].data = [];
    this.chartData[5].data = [];
    this.chartData[6].data = [];
    this.chartData[7].data = [];
    this.chartData[8].data = [];
    this.chartLabels = [];

    for (const month of selectedMonths) {
      const index = this.item_name.indexOf(month);

      this.chartData[0].data.push(this.sales1[index]);
      this.chartData[1].data.push(this.sales2[index]);
      this.chartData[2].data.push(this.sales3[index]);
      this.chartData[3].data.push(this.sales4[index]);
      this.chartData[4].data.push(this.sales5[index]);
      this.chartData[5].data.push(this.sales6[index]);
      this.chartData[6].data.push(this.sales7[index]);
      this.chartData[7].data.push(this.sales8[index]);
      this.chartData[8].data.push(this.sales9[index]);

      this.chartLabels.push(month);
    }
  }
}
