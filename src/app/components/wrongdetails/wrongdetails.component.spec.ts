import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrongdetailsComponent } from './wrongdetails.component';

describe('WrongdetailsComponent', () => {
  let component: WrongdetailsComponent;
  let fixture: ComponentFixture<WrongdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrongdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrongdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
