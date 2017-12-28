import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
  inputs: ['question']
})
export class QuestionComponent implements OnInit {

  @Input()
  answer: string;

  @Output()
  answerChange = new EventEmitter();

  @Input()
  parent: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
