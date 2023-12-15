import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryStoreTime2Component } from './inventory-store-time2.component';

describe('InventoryStoreTime2Component', () => {
  let component: InventoryStoreTime2Component;
  let fixture: ComponentFixture<InventoryStoreTime2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryStoreTime2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryStoreTime2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
