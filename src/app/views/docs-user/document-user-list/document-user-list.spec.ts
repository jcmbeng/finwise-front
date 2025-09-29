import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentUserList } from './document-user-list';

describe('DocumentUserList', () => {
  let component: DocumentUserList;
  let fixture: ComponentFixture<DocumentUserList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentUserList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentUserList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
