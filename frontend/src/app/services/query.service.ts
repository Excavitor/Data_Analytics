import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://127.0.0.1:5000/api';

@Injectable({
  providedIn: 'root',
})
export class QueryService {
  constructor(private http: HttpClient) {}

  getQuery1Division(): Observable<any> {
    return this.http.get<any>(`${baseUrl}/q1`);
  }
  getQuery1District(): Observable<any> {
    return this.http.get<any>(`${baseUrl}/q1dis`);
  }

  getQuery2(): Observable<any> {
    return this.http.get<any>(`${baseUrl}/q2`);
  }

  getQuery3(): Observable<any> {
    return this.http.get<any>(`${baseUrl}/q3`);
  }

  getQuery4(): Observable<any> {
    return this.http.get<any>(`${baseUrl}/q4`);
  }

  getQuery5(): Observable<any> {
    return this.http.get<any>(`${baseUrl}/q5`);
  }

  getQuery6(): Observable<any> {
    return this.http.get<any>(`${baseUrl}/q6`);
  }

  getQuery7(days?: any): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify({ days: days });
    return this.http.post(`${baseUrl}/q7`, body, { headers: headers });
  }

  getQuery8(): Observable<any> {
    return this.http.get<any>(`${baseUrl}/q8`);
  }

  getQuery9(): Observable<any> {
    return this.http.get<any>(`${baseUrl}/q9`);
  }

  getQuery10(): Observable<any> {
    return this.http.get<any>(`${baseUrl}/q10`);
  }

  getFST1(): Observable<any> {
    return this.http.get<any>(`${baseUrl}/financialStoreTime1`);
  }

  getFST2(): Observable<any> {
    return this.http.get<any>(`${baseUrl}/financialStoreTime2`);
  }

  getFCusT1(): Observable<any> {
    return this.http.get<any>(`${baseUrl}/financialCustomerTime1`);
  }

  getFCusT2(): Observable<any> {
    return this.http.get<any>(`${baseUrl}/financialCustomerTime2`);
  }

  getFitemT1(): Observable<any> {
    return this.http.get<any>(`${baseUrl}/financialItemTime1`);
  }

  getFitemT2(): Observable<any> {
    return this.http.get<any>(`${baseUrl}/financialItemTime2`);
  }

  getIStoreT1(): Observable<any> {
    return this.http.get<any>(`${baseUrl}/inventoryStoreTime1`);
  }

  getIStoreT2(): Observable<any> {
    return this.http.get<any>(`${baseUrl}/inventoryStoreTime2`);
  }

  getIitemT1(): Observable<any> {
    return this.http.get<any>(`${baseUrl}/inventoryItemTime1`);
  }

  getIitemT2(): Observable<any> {
    return this.http.get<any>(`${baseUrl}/inventoryItemTime2`);
  }
}
