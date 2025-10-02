import { TestBed } from '@angular/core/testing';

import {CustomerDocumentService} from './customer-document-service';

describe('CustomerDocumentService', () => {
  let service: CustomerDocumentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerDocumentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
