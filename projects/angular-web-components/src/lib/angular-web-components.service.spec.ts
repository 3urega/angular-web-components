import { TestBed } from '@angular/core/testing';

import { AngularWebComponentsService } from './angular-web-components.service';

describe('AngularWebComponentsService', () => {
  let service: AngularWebComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularWebComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
