import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Message} from './message.model';
import {Question} from './model/question.model';

import * as socketIo from 'socket.io-client';

let SERVER_URL = 'http://localhost:8080';

@Injectable()
export class SocketService {
    private socket;

    constructor() {
        this.initSocket();
    }

    private initSocket(): void {
        this.socket = socketIo(SERVER_URL);
    }

    public send(message: Message|Question): void {
      this.socket.emit('message', message);
    }
  public sendQuestion(question: Question): void {
    this.socket.emit('question', question);
  }
  
    public get() {
        let observable = new Observable(observer => {
            this.socket.on('message', (data) => {
                observer.next(data);
            });
            return () => {
                this.socket.disconnect();
            };
        });
        return observable;
    }

}
