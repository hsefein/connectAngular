import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleEditComponent } from './module-edit.component';

describe('ModuleEditComponent', () => {
  let component: ModuleEditComponent;
  let fixture: ComponentFixture<ModuleEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
