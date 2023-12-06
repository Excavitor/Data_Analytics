import { Component, OnInit } from '@angular/core';
import {QueryService} from "../../services/query.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-query3',
  templateUrl: './query3.component.html',
  styleUrls: ['./query3.component.css']
})
export class Query3Component implements OnInit {

  constructor(private queryService: QueryService, private http: HttpClient) { }

  data_all3: any
  ngOnInit(): void {
    this.getValue3()
  }

  getValue3(): void{
    this.queryService.getQuery3().subscribe((data: any) => {
        for (const d of data) {
          console.log(d)
        }
        this.data_all3 = data
      }
    )
  }

}
