import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { MatButtonToggleChange } from '@angular/material';
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
  arrayName: string;

  @Input()
  parentArray: FormArray;

  @Input()
  answers: Answer[];

  @Output()
  toggleAnswer: EventEmitter<AnswerChoice> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log(this.formArray);
  }

  printFormArray() {
    console.log(this.formArray);
  }

  get formArray(): FormArray {
    return this.parent.get(this.arrayName) as FormArray;
  }

  change(event: MatButtonToggleChange) {
    this.toggleAnswer.emit({value: event.value});
  }

  toggleChoice(event: any, choice: any) {
    // only with patchValue the validators are called...
    this.formArray.controls.filter(control => control.value === choice).map(control => control.patchValue({selected: !control.value.selected}));
  }

}
