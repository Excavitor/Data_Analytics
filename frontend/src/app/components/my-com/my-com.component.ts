import { Component, OnInit } from '@angular/core';
import { QueryService } from '../../services/query.service';
import { HttpClient } from '@angular/common/http';
import { ChartDataset, ChartOptions } from 'chart.js';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-my-com',
  templateUrl: './my-com.component.html',
  styleUrls: ['./my-com.component.css'],
})
export class MyComComponent implements OnInit {
  constructor(private queryService: QueryService, private http: HttpClient) {}

  data_all: any;
  district: any[] = [];
  sales: any[] = [];
  option: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  selectedDataCount: number = 10;

  chartData: ChartDataset[] = [
    {
      type: 'pie',
      label: 'Sales in Taka',
      data: this.sales,
    },
  ];
  chartLabels: string[] = this.district;

  chartOptions: ChartOptions = {
    // ⤵️ Fill the wrapper
    responsive: true,
    maintainAspectRatio: true,

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
    // this.getTest()
    this.option = {
      paging: true,
      searching: true,
      lengthChange: true,
      pagingType: 'simple_numbers',
      language: {
        searchPlaceholder: 'Search any',
      },
    };
    this.getDistrict();
  }

  getDistrict(): void {
    this.queryService.getQuery1District().subscribe((data: any) => {
      for (const d of data) {
        console.log(d);
        this.district.push(d.district);
        this.sales.push(d['total sales']);
      }
      this.data_all = data;
      this.dtTrigger.next(null);
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
      this.chartData[0].data.push(d['total sales']);
      this.chartLabels.push(d.district);
    }
  }
}
