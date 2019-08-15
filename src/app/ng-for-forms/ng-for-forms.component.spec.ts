import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForFormsComponent } from './ng-for-forms.component';

describe('NgForFormsComponent', () => {
  let component: NgForFormsComponent;
  let fixture: ComponentFixture<NgForFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgForFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgForFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
