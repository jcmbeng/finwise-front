import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDocumentList } from './user-document-list.component';

describe('DocumentUserList', () => {
  let component: UserDocumentList;
  let fixture: ComponentFixture<UserDocumentList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDocumentList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDocumentList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
