import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialStoreTime2Component } from './financial-store-time2.component';

describe('FinancialStoreTime2Component', () => {
  let component: FinancialStoreTime2Component;
  let fixture: ComponentFixture<FinancialStoreTime2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialStoreTime2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancialStoreTime2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
