import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { MatButtonToggleChange } from '@angular/material'
import {AnswerChoice} from './answer-choice';
import { Answer } from '../../shared/model/answer.model';

@Component({
  selector: 'app-answer-choice',
  templateUrl: './answer-choice.component.html',
  styleUrls: ['./answer-choice.component.css']
})
export class AnswerChoiceComponent implements OnInit {

  @Input()
  parent: FormGroup;

  @Input()
  answers: Answer[];

  @Output()
  click: EventEmitter<AnswerChoice> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  change(event: MatButtonToggleChange) {
    this.click.emit({value: event.value});
  }

}
