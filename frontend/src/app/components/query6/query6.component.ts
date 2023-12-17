import { Component, OnInit } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { QueryService } from '../../services/query.service';
import { HttpClient } from '@angular/common/http';
import { ChartDataset, ChartOptions } from 'chart.js';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-query6',
  templateUrl: './query6.component.html',
  styleUrls: ['./query6.component.css'],
})
export class Query6Component implements OnInit, AfterViewInit {
  constructor(private queryService: QueryService, private http: HttpClient) {}

  data_all6: any;
  store_key: any[] = [];
  item_name: any[] = [];
  quantity: any[] = [];
  option6: DataTables.Settings = {};
  dtTrigger6: Subject<any> = new Subject<any>();
  selectedDataCount: number = 10;

  chartData: ChartDataset[] = [
    {
      type: 'bar',
      label: 'Top 3 Products Store-Wise',
      data: this.quantity,
      backgroundColor: [
        'rgba(75, 192, 192, 0.5)',
        'rgba(255, 99, 132, 0.5)',
        'rgba(153, 102, 255, 0.5)',
      ],
      borderColor: [
        'rgba(75, 192, 192, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(153, 102, 255, 0.2)',
      ],
      borderWidth: 1,
    },
  ];
  chartLabels: string[] = this.store_key;

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
    this.option6 = {
      paging: true,
      searching: true,
      lengthChange: true,
      pagingType: 'simple_numbers',
      language: {
        searchPlaceholder: 'Search any',
      },
    };
    this.getValue6();
  }

  ngAfterViewInit(): void {
    this.dtTrigger6.next(null);
  }

  getValue6(): void {
    this.queryService.getQuery6().subscribe((data: any) => {
      for (const d of data) {
        console.log(d);
        this.store_key.push(d.store_key);
        this.item_name.push(d.item_name);
        this.quantity.push(d['total sales(quantity)']);
      }
      this.data_all6 = data;
      this.dtTrigger6.next(null);
    });
  }
  updateChartData(): void {
    if (
      this.selectedDataCount < 1 ||
      this.selectedDataCount > this.data_all6.length
    ) {
      console.error('Invalid selectedDataCount');
      return;
    }

    const selectedData = this.data_all6.slice(0, this.selectedDataCount);

    this.chartData[0].data = [];
    this.chartLabels = [];

    for (const d of selectedData) {
      this.chartData[0].data.push(d['total sales(quantity)']);
      this.chartLabels.push(d.store_key);
    }
  }
}
