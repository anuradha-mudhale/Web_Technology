import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rps } from './rps';

describe('Rps', () => {
  let component: Rps;
  let fixture: ComponentFixture<Rps>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rps],
    }).compileComponents();

    fixture = TestBed.createComponent(Rps);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
