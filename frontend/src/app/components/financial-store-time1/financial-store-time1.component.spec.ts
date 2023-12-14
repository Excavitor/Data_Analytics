import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialStoreTime1Component } from './financial-store-time1.component';

describe('FinancialStoreTime1Component', () => {
  let component: FinancialStoreTime1Component;
  let fixture: ComponentFixture<FinancialStoreTime1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialStoreTime1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancialStoreTime1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
