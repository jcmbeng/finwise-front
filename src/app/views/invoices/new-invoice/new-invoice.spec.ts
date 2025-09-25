import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewInvoice } from './new-invoice';

describe('NewInvoiceComponent', () => {
  let component: NewInvoice;
  let fixture: ComponentFixture<NewInvoice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewInvoice]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewInvoice);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
