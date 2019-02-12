import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentmoduleAddComponent } from './studentmodule-add.component';

describe('StudentmoduleAddComponent', () => {
  let component: StudentmoduleAddComponent;
  let fixture: ComponentFixture<StudentmoduleAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentmoduleAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentmoduleAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
