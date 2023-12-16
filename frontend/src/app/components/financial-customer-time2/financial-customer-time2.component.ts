import { Component, OnInit } from '@angular/core';
import { QueryService } from '../../services/query.service';
import { ChartDataset, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-financial-customer-time2',
  templateUrl: './financial-customer-time2.component.html',
  styleUrls: ['./financial-customer-time2.component.css']
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
  // selectedDataCount: number = 1;

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
    this.getValueFCusT2();
  }

  getValueFCusT2(): void {
    this.queryService.getFCusT2().subscribe((data: any) => {
      // Assuming data_all5 contains combined data for both queries
      this.data_all = data;

      // Process data for the chart
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

    // Update chart data
    this.chartData[0].data = this.sales1;
    this.chartData[1].data = this.sales2;
    this.chartData[2].data = this.sales3;
    this.chartData[3].data = this.sales8;
  }

  // updateChartData(): void {
  //   if (
  //     this.selectedDataCount < 1 ||
  //     this.selectedDataCount > this.data_all.length
  //   ) {
  //     console.error('Invalid selectedDataCount');
  //     return;
  //   }
  //
  //   const selectedData = this.data_all.slice(0, this.selectedDataCount);
  //
  //   this.chartData[0].data = [];
  //   this.chartData[1].data = [];
  //   this.chartData[2].data = [];
  //   this.chartData[3].data = [];
  //   this.chartData[4].data = [];
  //   this.chartData[5].data = [];
  //   this.chartData[6].data = [];
  //   this.chartData[7].data = [];
  //   this.chartLabels = [];
  //
  //   for (const d of selectedData) {
  //     this.chartData[0].data.push(d.total_sales);
  //     this.chartData[1].data.push(d.total_sales);
  //     this.chartData[2].data.push(d.total_sales);
  //     this.chartData[3].data.push(d.total_sales);
  //     this.chartData[4].data.push(d.total_sales);
  //     this.chartData[5].data.push(d.total_sales);
  //     this.chartData[6].data.push(d.total_sales);
  //     this.chartData[7].data.push(d.total_sales);
  //     this.chartLabels.push(d.store_key);
  //   }
  // }

  // getChittagongTotalSales(year: string): number {
  //   const chittagongData = this.data_all['div_q2'].find((chittagongD: any) => chittagongD.year === year);
  //   return chittagongData ? chittagongData['total_sales'] : 0;
  // }
  //
  // getBarishalTotalSales(year: string): number {
  //   const barishalData = this.data_all['div_q3'].find((barishalD: any) => barishalD.year === year);
  //   return barishalData ? barishalData['total_sales'] : 0;
  // }
  //
  // getKhulnaTotalSales(year: string): number {
  //   const khulnaData = this.data_all['div_q4'].find((khulnaD: any) => khulnaD.year === year);
  //   return khulnaData ? khulnaData['total_sales'] : 0;
  // }
  //
  // getMymensinghTotalSales(year: string): number {
  //   const mymensinghData = this.data_all['div_q5'].find((mymensinghD: any) => mymensinghD.year === year);
  //   return mymensinghData ? mymensinghData['total_sales'] : 0;
  // }
  //
  // getRajshahiTotalSales(year: string): number {
  //   const rajshahiData = this.data_all['div_q6'].find((rajshahiD: any) => rajshahiD.year === year);
  //   return rajshahiData ? rajshahiData['total_sales'] : 0;
  // }
  //
  // getRangpurTotalSales(year: string): number {
  //   const rangpurData = this.data_all['div_q7'].find((rangpurD: any) => rangpurD.year === year);
  //   return rangpurData ? rangpurData['total_sales'] : 0;
  // }
  //
  // getSylhetTotalSales(year: string): number {
  //   const sylhetData = this.data_all['div_q8'].find((sylhetD: any) => sylhetD.year === year);
  //   return sylhetData ? sylhetData['total_sales'] : 0;
  // }



}

