import { Component, OnInit } from '@angular/core';
import {Question} from '../../model/shared/question'

@Component({
  selector: 'app-question-admin-dialog',
  templateUrl: './question-admin-dialog.component.html',
  styleUrls: ['./question-admin-dialog.component.css']
})
export class QuestionAdminDialogComponent implements OnInit {

  private question: Question;

  constructor() { }

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
