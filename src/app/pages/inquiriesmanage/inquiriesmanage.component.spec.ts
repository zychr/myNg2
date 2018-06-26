import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InquiriesmanageComponent } from './inquiriesmanage.component';

describe('InquiriesmanageComponent', () => {
  let component: InquiriesmanageComponent;
  let fixture: ComponentFixture<InquiriesmanageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InquiriesmanageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InquiriesmanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
