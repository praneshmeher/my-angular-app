import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataServiceOneComponent } from './data-service-one.component';

describe('DataServiceOneComponent', () => {
  let component: DataServiceOneComponent;
  let fixture: ComponentFixture<DataServiceOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataServiceOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataServiceOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
