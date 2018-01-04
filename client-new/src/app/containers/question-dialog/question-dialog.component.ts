import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, Validator, Validators, AbstractControl } from '@angular/forms';
import { Answer } from '../../shared/model/answer.model';
import { SocketService } from '../../socket.service';
import { ValidateSelection } from './validate-selection';

@Component({
  selector: 'app-question-dialog',
  templateUrl: './question-dialog.component.html',
  styleUrls: ['./question-dialog.component.css']
})
export class QuestionDialogComponent implements OnInit, OnChanges, OnDestroy {

  answers: Answer[] = [new Answer('Answer1'), new Answer('Answer2')];

  form: FormGroup = this.formBuilder.group({
    question: 'Question...',
    answers: this.formBuilder.array([])
  });

  private ioConnection: any;

  private finishConnection: any;

  constructor(private formBuilder: FormBuilder, private socketService: SocketService) {
    this.answers[0].selected = true;
  }

  ngOnChanges() {
  }

  ngOnInit() {
    this.initIoConnection();
    this.initAnswers(this.answers);
  }

  ngOnDestroy() {
    this.ioConnection.unsubscribe();
  }

  private initAnswers(answers: Answer[]) {
    const answerFGs = answers.map(answer => this.formBuilder.group({
      name: [answer.answer, ValidateSelection],
      selected: [answer.selected, ValidateSelection]
    }, {
      Validator: ValidateSelection
    }));
    const answerFormArray = this.formBuilder.array(answerFGs, ValidateSelection);
    this.form.setControl('answers', answerFormArray);
  }

  private initIoConnection(): void {
    this.ioConnection = this.socketService.get().subscribe((message: any) => {
      console.log(message);
      this.answers = message.answers;
    });
    this.finishConnection = this.socketService.listenFinish().subscribe(() => {
      console.log('question finished');
      this.answers = [];
    });
  }


  get formAnswers(): FormArray {
    return this.form.get('answers') as FormArray;
  }

  foo() {
    this.form.updateValueAndValidity();
  }
}
