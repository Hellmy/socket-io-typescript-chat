import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent implements OnInit {

  @Input()
  answer: string;

  @Input()
  readonly: boolean;
  
  @Output()
  answerChange = new EventEmitter();

  @Input()
  parent: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
