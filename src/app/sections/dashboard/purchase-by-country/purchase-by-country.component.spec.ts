import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseByCountryComponent } from './purchase-by-country.component';

describe('PurchaseByCountryComponent', () => {
  let component: PurchaseByCountryComponent;
  let fixture: ComponentFixture<PurchaseByCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseByCountryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseByCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
