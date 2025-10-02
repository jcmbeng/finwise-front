import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentViewDetail } from './document-view-detail';

describe('DocumentViewDetail', () => {
  let component: DocumentViewDetail;
  let fixture: ComponentFixture<DocumentViewDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentViewDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentViewDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
