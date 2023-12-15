import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialCustomerTime1Component } from './financial-customer-time1.component';

describe('FinancialCustomerTime1Component', () => {
  let component: FinancialCustomerTime1Component;
  let fixture: ComponentFixture<FinancialCustomerTime1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialCustomerTime1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancialCustomerTime1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
