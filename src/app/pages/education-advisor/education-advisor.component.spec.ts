import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationAdvisorComponent } from './education-advisor.component';

describe('EducationAdvisorComponent', () => {
  let component: EducationAdvisorComponent;
  let fixture: ComponentFixture<EducationAdvisorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationAdvisorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationAdvisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
