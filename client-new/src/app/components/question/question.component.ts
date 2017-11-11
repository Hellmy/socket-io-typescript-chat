import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
  inputs: ['question']
})
export class QuestionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
