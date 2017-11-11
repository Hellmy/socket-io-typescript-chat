import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionAdminDialogComponent } from './question-admin-dialog.component';

describe('QuestionAdminDialogComponent', () => {
  let component: QuestionAdminDialogComponent;
  let fixture: ComponentFixture<QuestionAdminDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionAdminDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionAdminDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
