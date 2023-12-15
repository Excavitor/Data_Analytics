import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryItemTime2Component } from './inventory-item-time2.component';

describe('InventoryItemTime2Component', () => {
  let component: InventoryItemTime2Component;
  let fixture: ComponentFixture<InventoryItemTime2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryItemTime2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryItemTime2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
