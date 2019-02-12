import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentmoduleDetailComponent } from './studentmodule-detail.component';

describe('StudentmoduleDetailComponent', () => {
  let component: StudentmoduleDetailComponent;
  let fixture: ComponentFixture<StudentmoduleDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentmoduleDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentmoduleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
