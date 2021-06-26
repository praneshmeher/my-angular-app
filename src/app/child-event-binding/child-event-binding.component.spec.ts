import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildEventBindingComponent } from './child-event-binding.component';

describe('ChildEventBindingComponent', () => {
  let component: ChildEventBindingComponent;
  let fixture: ComponentFixture<ChildEventBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildEventBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildEventBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
