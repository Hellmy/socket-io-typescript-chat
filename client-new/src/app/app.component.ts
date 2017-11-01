import { Component } from '@angular/core';
import { SocketService } from './socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private ioConnection: any;
  
  constructor(private socketService: SocketService) {
  }

  ngOnInit(): void {
    this.initIoConnection();
}


private initIoConnection(): void {
    this.ioConnection = this.socketService.get().subscribe((message: any) => {
    });
}

  foo() {
    let question = {
      question: 'Frage',
      answer: [
        'antwort1',
        'antwort2'
      ]
    };
    this.socketService.sendQuestion(question);
  }
}
