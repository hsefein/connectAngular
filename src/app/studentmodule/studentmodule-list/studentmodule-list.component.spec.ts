import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentmoduleListComponent } from './studentmodule-list.component';

describe('StudentmoduleListComponent', () => {
  let component: StudentmoduleListComponent;
  let fixture: ComponentFixture<StudentmoduleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentmoduleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentmoduleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
