import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryStoreTime1Component } from './inventory-store-time1.component';

describe('InventoryStoreTime1Component', () => {
  let component: InventoryStoreTime1Component;
  let fixture: ComponentFixture<InventoryStoreTime1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryStoreTime1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryStoreTime1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
