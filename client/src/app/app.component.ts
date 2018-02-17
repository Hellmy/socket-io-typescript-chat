import { Component, OnInit } from '@angular/core';
import { SocketService } from './socket.service';
import { Answer } from './shared/model/answer.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  private ioConnection: any;

  constructor(private socketService: SocketService) {
  }

  ngOnInit(): void {
    this.initIoConnection();
  }


  private initIoConnection(): void {
    this.ioConnection = this.socketService.get().subscribe((message: any) => {
      console.log(message);
    });
  }

  foo() {
    const question = {
      question: 'Frage',
      answers: [
        new Answer('antwort1'),
        new Answer('antwort2')
      ]
    };
    this.socketService.sendQuestion(question);
  }

  pingo() {
    this.foo();
  }

  finish() {
    this.socketService.finishQuestion();
  }
}
