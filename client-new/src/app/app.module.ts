import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule } from '@angular/material';

import { AppComponent } from './app.component';
import { SocketService } from './socket.service';
import { QuestionComponent } from './components/question/question.component';
import { AnswerComponent } from './components/answer/answer.component';
import { QuestionAdminDialogComponent } from './dialogs/question-admin-dialog/question-admin-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    AnswerComponent,
    QuestionAdminDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule
  ],
  providers: [SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
