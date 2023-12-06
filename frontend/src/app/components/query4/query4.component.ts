import { Component, OnInit } from '@angular/core';
import {QueryService} from "../../services/query.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-query4',
  templateUrl: './query4.component.html',
  styleUrls: ['./query4.component.css']
})
export class Query4Component implements OnInit {

  constructor(private queryService: QueryService, private http: HttpClient) { }

  data_all4: any
  ngOnInit(): void {
    this.getValue4()
  }

  getValue4(): void{
    this.queryService.getQuery4().subscribe((data: any) => {
        for (const d of data) {
          console.log(d)
        }
        this.data_all4 = data
      }
    )
  }

}
