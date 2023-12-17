import { Component, OnInit } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { QueryService } from '../../services/query.service';
import { HttpClient } from '@angular/common/http';
import { ChartDataset, ChartOptions } from 'chart.js';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-query9',
  templateUrl: './query9.component.html',
  styleUrls: ['./query9.component.css'],
})
export class Query9Component implements OnInit, AfterViewInit {
  constructor(private queryService: QueryService, private http: HttpClient) {}

  data_all9: any;
  division: any[] = [];
  item_name: any[] = [];
  sales: any[] = [];
  option: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  selectedDataCount: number = 10;

  chartData: ChartDataset[] = [
    {
      type: 'bar',
      label: 'Total Sales of items Geographically',
      data: this.sales,
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
  ];
  chartLabels: string[] = this.division;

  chartOptions: ChartOptions = {
    // indexAxis: 'y',

    // ⤵️ Fill the wrapper
    responsive: true,
    maintainAspectRatio: false,

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
    this.getValue9();
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next(null);
  }

  getValue9(): void {
    this.queryService.getQuery9().subscribe((data: any) => {
      for (const d of data) {
        console.log(d);
        this.division.push(d.division);
        this.item_name.push(d.item_name);
        this.sales.push(d['total sales']);
      }
      this.data_all9 = data;
      this.dtTrigger.next(null);
    });
  }

  updateChartData(): void {
    if (
      this.selectedDataCount < 1 ||
      this.selectedDataCount > this.data_all9.length
    ) {
      console.error('Invalid selectedDataCount');
      return;
    }

    const selectedData = this.data_all9.slice(0, this.selectedDataCount);

    this.chartData[0].data = [];
    this.chartLabels = [];

    for (const d of selectedData) {
      this.chartData[0].data.push(d['total sales']);
      this.chartLabels.push(d.division);
    }
  }
}
