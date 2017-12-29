import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-answer-choice',
  templateUrl: './answer-choice.component.html',
  styleUrls: ['./answer-choice.component.css']
})
export class AnswerChoiceComponent implements OnInit {

  @Input()
  parent: FormGroup;

  @Input()
  answers: FormArray;

  constructor() { }

  ngOnInit() {
  }

}
