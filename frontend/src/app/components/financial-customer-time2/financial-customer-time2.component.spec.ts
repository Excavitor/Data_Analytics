import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialCustomerTime2Component } from './financial-customer-time2.component';

describe('FinancialCustomerTime2Component', () => {
  let component: FinancialCustomerTime2Component;
  let fixture: ComponentFixture<FinancialCustomerTime2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialCustomerTime2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancialCustomerTime2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
