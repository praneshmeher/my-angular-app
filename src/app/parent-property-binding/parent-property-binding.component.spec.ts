import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentPropertyBindingComponent } from './parent-property-binding.component';

describe('ParentPropertyBindingComponent', () => {
  let component: ParentPropertyBindingComponent;
  let fixture: ComponentFixture<ParentPropertyBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentPropertyBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentPropertyBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
