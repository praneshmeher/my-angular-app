import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependancyInjectonComponent } from './dependancy-injecton.component';

describe('DependancyInjectonComponent', () => {
  let component: DependancyInjectonComponent;
  let fixture: ComponentFixture<DependancyInjectonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DependancyInjectonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DependancyInjectonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
