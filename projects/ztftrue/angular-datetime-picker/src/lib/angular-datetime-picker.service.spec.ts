import { TestBed } from '@angular/core/testing';

import { AngularDatetimePickerService } from './angular-datetime-picker.service';

describe('AngularDatetimePickerService', () => {
  let service: AngularDatetimePickerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularDatetimePickerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
