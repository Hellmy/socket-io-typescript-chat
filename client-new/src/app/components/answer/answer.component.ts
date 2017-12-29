import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Answer } from '../../shared/model/answer.model';
import { FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css'],
})
export class AnswerComponent implements OnInit {

  @Input()
  answers: FormArray;

  @Input()
  parent: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
