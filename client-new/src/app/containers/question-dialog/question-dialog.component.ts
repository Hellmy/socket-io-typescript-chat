import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-question-dialog',
  templateUrl: './question-dialog.component.html',
  styleUrls: ['./question-dialog.component.css']
})
export class QuestionDialogComponent implements OnInit {

  form: FormGroup = this.formBuilder.group({
    question: ['Question...'],
    answers: this.formBuilder.array(['Answer1', 'Answer2'])
  });

  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
  }
  get answers() {
    return this.form.get('answers') as FormArray;
  }

}
