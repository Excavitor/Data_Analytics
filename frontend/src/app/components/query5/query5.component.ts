import { Component, OnInit } from '@angular/core';
import { QueryService } from '../../services/query.service';
import { HttpClient } from '@angular/common/http';
import { ChartDataset, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-query5',
  templateUrl: './query5.component.html',
  styleUrls: ['./query5.component.css'],
})
export class Query5Component implements OnInit {
  constructor(private queryService: QueryService, private http: HttpClient) {}

  data_all5: any;
  Quarter: any[] = [];
  sales: any[] = [];
  sales2: any[] = [];
  sales3: any[] = [];

  chartData: ChartDataset[] = [
    {
      type: 'bar',
      label: 'Barishal',
      data: this.sales,
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
    {
      type: 'bar',
      label: 'Dhaka',
      data: this.sales2,
      backgroundColor: 'blue',
      borderColor: 'blue',
      borderWidth: 1,
    },
    {
      type: 'bar',
      label: 'Chittagong',
      data: this.sales3,
      backgroundColor: 'orange',
      borderColor: 'orange',
      borderWidth: 1,
    },
  ];
  chartLabels: string[] = this.Quarter;

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
    this.getValue5();
  }

  getValue5(): void {
    this.queryService.getQuery5().subscribe((data: any) => {
      this.data_all5 = data;
      this.processChartData();
    });
  }
  processChartData(): void {
    for (const d of this.data_all5['div_q']) {
      this.Quarter.push(d.Quarter);
      this.sales.push(d['total sales']);
    }

    for (const d of this.data_all5['div_q2']) {
      this.sales2.push(d['total sales']);
    }

    for (const d of this.data_all5['div_q3']) {
      this.sales3.push(d['total sales']);
    }

    this.chartData[0].data = this.sales;
    this.chartData[1].data = this.sales2;
    this.chartData[2].data = this.sales3;
  }

  getDhakaTotalSales(quarter: string): number {
    const dhakaData = this.data_all5['div_q2'].find(
      (dhakaD: any) => dhakaD.Quarter === quarter
    );
    return dhakaData ? dhakaData['total sales'] : 0;
  }

  getChittagongTotalSales(quarter: string): number {
    const chittagongData = this.data_all5['div_q3'].find(
      (chittagongD: any) => chittagongD.Quarter === quarter
    );
    return chittagongData ? chittagongData['total sales'] : 0;
  }
}
