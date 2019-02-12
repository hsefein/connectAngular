import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentmoduleEditComponent } from './studentmodule-edit.component';

describe('StudentmoduleEditComponent', () => {
  let component: StudentmoduleEditComponent;
  let fixture: ComponentFixture<StudentmoduleEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentmoduleEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentmoduleEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
