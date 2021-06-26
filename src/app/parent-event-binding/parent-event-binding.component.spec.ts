import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentEventBindingComponent } from './parent-event-binding.component';

describe('ParentEventBindingComponent', () => {
  let component: ParentEventBindingComponent;
  let fixture: ComponentFixture<ParentEventBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentEventBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentEventBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
