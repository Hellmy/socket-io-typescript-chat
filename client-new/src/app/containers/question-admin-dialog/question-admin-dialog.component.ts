import { Component, OnInit } from '@angular/core';
import {Question} from '../../model/shared/question'
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-question-admin-dialog',
  templateUrl: './question-admin-dialog.component.html',
  styleUrls: ['./question-admin-dialog.component.css']
})
export class QuestionAdminDialogComponent implements OnInit {

  private question: Question;

  form: FormGroup = this.fb.group({
    question: ['Question...', Validators.required],
    answers: this.fb.array(['Answer...'])
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

  }

  get answers() {
    return this.form.get('answers') as FormArray;
  }

  echoForm() {
    console.log(this.form);
  }

}
