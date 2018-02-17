import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { MatButtonToggleChange } from '@angular/material';
import { Answer } from '../../shared/model/answer.model';

@Component({
  selector: 'app-multi-choice',
  templateUrl: './multi-choice.component.html',
  styleUrls: ['./multi-choice.component.css']
})
export class MultiChoiceComponent implements OnInit {

  @Input()
  parent: FormGroup;

  @Input()
  arrayName: string;

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

  toggleChoice(choiceControl: FormControl) {
    // only with patchValue the validators are called...
    choiceControl.patchValue({
      selected: !choiceControl.value.selected
    });
  }

}
