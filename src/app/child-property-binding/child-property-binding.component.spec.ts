import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildPropertyBindingComponent } from './child-property-binding.component';

describe('ChildPropertyBindingComponent', () => {
  let component: ChildPropertyBindingComponent;
  let fixture: ComponentFixture<ChildPropertyBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildPropertyBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildPropertyBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
