import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { Query1Component } from './components/query1/query1.component';
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

const routes: Routes = [
  { path: 'first-component', component: AddTutorialComponent },
  { path: 'q1', component: Query1Component },
  { path: 'my-com', component: MyComComponent },
  { path: 'q2', component: Query2Component },
  { path: 'q3', component: Query3Component },
  { path: 'q4', component: Query4Component },
  { path: 'q5', component: Query5Component },
  { path: 'q6', component: Query6Component },
  { path: 'q7', component: Query7Component },
  { path: 'q8', component: Query8Component },
  { path: 'q9', component: Query9Component },
  { path: 'q10', component: Query10Component },
  { path: 'financialStoreTime1', component: FinancialStoreTime1Component },
  { path: 'financialStoreTime2', component: FinancialStoreTime2Component },
  {
    path: 'financialCustomerTime1',
    component: FinancialCustomerTime1Component,
  },
  {
    path: 'financialCustomerTime2',
    component: FinancialCustomerTime2Component,
  },
  { path: 'financialItemTime1', component: FinancialItemTime1Component },
  { path: 'financialItemTime2', component: FinancialItemTime2Component },
  { path: 'inventoryStoreTime1', component: InventoryStoreTime1Component },
  { path: 'inventoryStoreTime2', component: InventoryStoreTime2Component },
  { path: 'inventoryItemTime1', component: InventoryItemTime1Component },
  { path: 'inventoryItemTime2', component: InventoryItemTime2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
