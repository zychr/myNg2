import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DitchAdvisorComponent } from './ditch-advisor.component';

describe('DitchAdvisorComponent', () => {
  let component: DitchAdvisorComponent;
  let fixture: ComponentFixture<DitchAdvisorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DitchAdvisorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DitchAdvisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
