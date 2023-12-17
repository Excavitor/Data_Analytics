import { Component, OnInit } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { QueryService } from '../../services/query.service';
import { HttpClient } from '@angular/common/http';
import { ChartDataset, ChartOptions } from 'chart.js';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-query10',
  templateUrl: './query10.component.html',
  styleUrls: ['./query10.component.css'],
})
export class Query10Component implements OnInit, AfterViewInit {
  constructor(private queryService: QueryService, private http: HttpClient) {}

  data_all10: any;
  store_key: any[] = [];
  month: any[] = [];
  avg_total_price: any[] = [];
  option: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  selectedDataCount: number = 10;

  chartData: ChartDataset[] = [
    {
      type: 'line',
      label: 'average sales of products sales per store monthly',
      data: this.avg_total_price,
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
      fill: false,
      tension: 0.1,
    },
  ];
  chartLabels: string[] = this.store_key;

  chartOptions: ChartOptions = {
    // indexAxis: 'y',

    // ⤵️ Fill the wrapper
    responsive: true,
    maintainAspectRatio: true,

    // ⤵️ Remove the grids
    scales: {
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
    this.option = {
      paging: true,
      searching: true,
      lengthChange: true,
      pagingType: 'simple_numbers',
      language: {
        searchPlaceholder: 'Search any',
      },
    };
    this.getValue10();
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next(null);
  }

  getValue10(): void {
    this.queryService.getQuery10().subscribe((data: any) => {
      for (const d of data) {
        console.log(d);
        this.store_key.push(d.store_key);
        this.month.push(d.month);
        this.avg_total_price.push(d.avg_total_price);
      }
      this.data_all10 = data;
      this.dtTrigger.next(null);
    });
  }

  updateChartData(): void {
    if (
      this.selectedDataCount < 1 ||
      this.selectedDataCount > this.data_all10.length
    ) {
      console.error('Invalid selectedDataCount');
      return;
    }

    const selectedData = this.data_all10.slice(0, this.selectedDataCount);

    this.chartData[0].data = [];
    this.chartLabels = [];

    for (const d of selectedData) {
      this.chartData[0].data.push(d.avg_total_price);
      this.chartLabels.push(d.store_key);
    }
  }
}
