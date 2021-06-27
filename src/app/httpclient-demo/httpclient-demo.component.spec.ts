import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpclientDemoComponent } from './httpclient-demo.component';

describe('HttpclientDemoComponent', () => {
  let component: HttpclientDemoComponent;
  let fixture: ComponentFixture<HttpclientDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpclientDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpclientDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
