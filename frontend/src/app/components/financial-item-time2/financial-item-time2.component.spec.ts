import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialItemTime2Component } from './financial-item-time2.component';

describe('FinancialItemTime2Component', () => {
  let component: FinancialItemTime2Component;
  let fixture: ComponentFixture<FinancialItemTime2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialItemTime2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancialItemTime2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
