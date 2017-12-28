import { Component, OnInit } from '@angular/core';
import {Question} from '../../model/shared/question'
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-question-admin-dialog',
  templateUrl: './question-admin-dialog.component.html',
  styleUrls: ['./question-admin-dialog.component.css']
})
export class QuestionAdminDialogComponent implements OnInit {

  private question: Question;

  form: FormGroup = this.fb.group({
    question: ['', Validators.required],
    answers: this.fb.array([])
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    if(this.question == null) {
      this.question = {
        question: 'Question...',
        answers: [
          'Answer...'
        ]
      };
    }
  }

}
