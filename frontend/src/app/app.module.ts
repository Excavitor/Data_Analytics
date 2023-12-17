import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { Query1Component } from './components/query1/query1.component';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { MyComComponent } from './components/my-com/my-com.component';
import { Query2Component } from './components/query2/query2.component';
import { Query3Component } from './components/query3/query3.component';
import { Query4Component } from './components/query4/query4.component';
import { Query5Component } from './components/query5/query5.component';
import { Query6Component } from './components/query6/query6.component';
import { Query7Component } from './components/query7/query7.component';
import { Query8Component } from './components/query8/query8.component';
import { Query9Component } from './components/query9/query9.component';
import { Query10Component } from './components/query10/query10.component';
import { FinancialStoreTime1Component } from './components/financial-store-time1/financial-store-time1.component';
import { FinancialStoreTime2Component } from './components/financial-store-time2/financial-store-time2.component';
import { FinancialCustomerTime1Component } from './components/financial-customer-time1/financial-customer-time1.component';
import { FinancialCustomerTime2Component } from './components/financial-customer-time2/financial-customer-time2.component';
import { FinancialItemTime1Component } from './components/financial-item-time1/financial-item-time1.component';
import { FinancialItemTime2Component } from './components/financial-item-time2/financial-item-time2.component';
import { InventoryStoreTime1Component } from './components/inventory-store-time1/inventory-store-time1.component';
import { InventoryStoreTime2Component } from './components/inventory-store-time2/inventory-store-time2.component';
import { InventoryItemTime1Component } from './components/inventory-item-time1/inventory-item-time1.component';
import { InventoryItemTime2Component } from './components/inventory-item-time2/inventory-item-time2.component';
// import { DashComponent } from './components/dash/dash.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTutorialComponent,
    Query1Component,
    MyComComponent,
    Query2Component,
    Query3Component,
    Query4Component,
    Query5Component,
    Query6Component,
    Query7Component,
    Query8Component,
    Query9Component,
    Query10Component,
    FinancialStoreTime1Component,
    FinancialStoreTime2Component,
    FinancialCustomerTime1Component,
    FinancialCustomerTime2Component,
    FinancialItemTime1Component,
    FinancialItemTime2Component,
    InventoryStoreTime1Component,
    InventoryStoreTime2Component,
    InventoryItemTime1Component,
    InventoryItemTime2Component,
    // DashComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    NgChartsModule,
    HttpClientModule,
    ReactiveFormsModule,
    DataTablesModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
