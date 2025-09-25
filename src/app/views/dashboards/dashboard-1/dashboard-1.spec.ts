import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashboard1 } from './dashboard-1';

describe('Dashboard1', () => {
  let component: Dashboard1;
  let fixture: ComponentFixture<Dashboard1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dashboard1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dashboard1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
