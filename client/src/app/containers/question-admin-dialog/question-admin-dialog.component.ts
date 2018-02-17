import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Question } from '../../shared/model/question';
import { Answer } from '../../shared/model/answer.model';

@Component({
  selector: 'app-question-admin-dialog',
  templateUrl: './question-admin-dialog.component.html',
  styleUrls: ['./question-admin-dialog.component.css']
})
export class QuestionAdminDialogComponent implements OnInit {

  private question: Question;

  form: FormGroup = this.formBuilder.group({
    question: ['Question...', Validators.required],
    answers: this.formBuilder.array(['Answer...'])
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

  }

  private initAnswers(answers: Answer[]) {
    const answerFGs = answers.map(answer => this.formBuilder.group(answer));
    const answerFormArray = this.formBuilder.array(answerFGs);
    this.form.setControl('answers', answerFormArray);
  }

  get answers() {
    return this.form.get('answers') as FormArray;
  }

  echoForm() {
    console.log(this.form);
  }

}
