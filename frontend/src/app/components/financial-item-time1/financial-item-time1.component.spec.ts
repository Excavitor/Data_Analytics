import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialItemTime1Component } from './financial-item-time1.component';

describe('FinancialItemTime1Component', () => {
  let component: FinancialItemTime1Component;
  let fixture: ComponentFixture<FinancialItemTime1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialItemTime1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancialItemTime1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
