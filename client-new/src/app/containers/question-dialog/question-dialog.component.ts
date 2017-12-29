import { Component, OnInit, OnChanges } from '@angular/core';
import { FormBuilder, FormArray, FormGroup } from '@angular/forms';
import { AnswerChoice } from '../../components/answer-choice/answer-choice';
import { Answer } from '../../shared/model/answer.model';

@Component({
  selector: 'app-question-dialog',
  templateUrl: './question-dialog.component.html',
  styleUrls: ['./question-dialog.component.css']
})
export class QuestionDialogComponent implements OnInit, OnChanges {

  answers: Answer[] = [new Answer('Answer1'), new Answer('Answer2')];

  form: FormGroup = this.formBuilder.group({
    question: 'Question...',
    answers: this.formBuilder.array([])
  });

  constructor(private formBuilder: FormBuilder) {
    this.answers[0].selected = true;
  }
  
  ngOnChanges() {
  }

  ngOnInit() {
    this.initAnswers(this.answers);
  }

  initAnswers(answers: Answer[]) {
    const answerFGs = answers.map(answer => this.formBuilder.group(answer));
    const answerFormArray = this.formBuilder.array(answerFGs);
    this.form.setControl('answers', answerFormArray);
  }

  get formAnswers(): FormArray {
    return this.form.get('answers') as FormArray;
  }

  clickAnswer(event: AnswerChoice) {
    console.log(event);
  }

}
