import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule } from '@angular/material';
import {MatChipsModule} from '@angular/material/chips';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

import { AppComponent } from './app.component';
import { SocketService } from './socket.service';
import { QuestionComponent } from './components/question/question.component';
import { AnswerComponent } from './components/answer/answer.component';
import { QuestionAdminDialogComponent } from './containers/question-admin-dialog/question-admin-dialog.component';
import { QuestionDialogComponent } from './containers/question-dialog/question-dialog.component';
import { MultiChoiceComponent } from './components/multi-choice/multi-choice.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    AnswerComponent,
    QuestionAdminDialogComponent,
    QuestionDialogComponent,
    MultiChoiceComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatChipsModule,
    MatButtonToggleModule 
  ],
  providers: [SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
