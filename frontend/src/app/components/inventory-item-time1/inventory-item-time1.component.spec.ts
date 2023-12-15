import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryItemTime1Component } from './inventory-item-time1.component';

describe('InventoryItemTime1Component', () => {
  let component: InventoryItemTime1Component;
  let fixture: ComponentFixture<InventoryItemTime1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryItemTime1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryItemTime1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
