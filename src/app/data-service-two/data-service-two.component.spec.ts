import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataServiceTwoComponent } from './data-service-two.component';

describe('DataServiceTwoComponent', () => {
  let component: DataServiceTwoComponent;
  let fixture: ComponentFixture<DataServiceTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataServiceTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataServiceTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
