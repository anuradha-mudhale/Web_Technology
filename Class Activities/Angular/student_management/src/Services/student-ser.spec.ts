import { TestBed } from '@angular/core/testing';

import { StudentSer } from './student-ser';

describe('StudentSer', () => {
  let service: StudentSer;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentSer);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
