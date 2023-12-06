import { Component, OnInit } from '@angular/core';
import {QueryService} from "../../services/query.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-query5',
  templateUrl: './query5.component.html',
  styleUrls: ['./query5.component.css']
})
export class Query5Component implements OnInit {

  constructor(private queryService: QueryService, private http: HttpClient) { }

  data_all5: any
  ngOnInit(): void {
    this.getValue5()
  }

  getValue5(): void{
    this.queryService.getQuery5().subscribe((data: any) => {
        for (const d of data) {
          console.log(d)
        }
        this.data_all5 = data
      }
    )
  }

}
