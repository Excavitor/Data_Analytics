import { Component, OnInit } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { QueryService } from '../../services/query.service';
import { HttpClient } from '@angular/common/http';
import { ChartDataset, ChartOptions } from 'chart.js';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-query8',
  templateUrl: './query8.component.html',
  styleUrls: ['./query8.component.css'],
})
export class Query8Component implements OnInit, AfterViewInit {
  constructor(private queryService: QueryService, private http: HttpClient) {}

  data_all8: any;
  quarter: any[] = [];
  item_name: any[] = [];
  sales: any[] = [];
  option: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  selectedDataCount: number = 10;

  chartData: ChartDataset[] = [
    {
      type: 'bar',
      label: 'Worst Quarter',
      data: this.sales,
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 2,
    },
  ];
  chartLabels: string[] = this.item_name;

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
    this.getValue8();
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next(null);
  }

  getValue8(): void {
    this.queryService.getQuery8().subscribe((data: any) => {
      for (const d of data) {
        console.log(d);
        this.quarter.push(d.quarter);
        this.item_name.push(d.item_name);
        this.sales.push(d['total sales']);
      }
      this.data_all8 = data;
      this.dtTrigger.next(null);
    });
  }

  updateChartData(): void {
    if (
      this.selectedDataCount < 1 ||
      this.selectedDataCount > this.data_all8.length
    ) {
      console.error('Invalid selectedDataCount');
      return;
    }

    const selectedData = this.data_all8.slice(0, this.selectedDataCount);

    this.chartData[0].data = [];
    this.chartLabels = [];

    for (const d of selectedData) {
      this.chartData[0].data.push(d['total sales']);
      this.chartLabels.push(d.item_name);
    }
  }
}
