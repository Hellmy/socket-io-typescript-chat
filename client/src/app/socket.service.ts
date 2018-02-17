import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Message } from './shared/model/message.model';
import { Question } from './shared/model/question';


import * as socketIo from 'socket.io-client';

const SERVER_URL = 'http://localhost:8080';

@Injectable()
export class SocketService {
    private socket;

    constructor() {
        this.initSocket();
    }

    private initSocket(): void {
        this.socket = socketIo(SERVER_URL);
    }

    public send(message: Message | Question): void {
        this.socket.emit('message', message);
    }
    public sendQuestion(question: Question): void {
        this.socket.emit('question', question);
    }

    public finishQuestion(): void {
        this.socket.emit('finishQuestion');
    }

    public get() {
        const observable = new Observable(observer => {
            this.socket.on('message', (data) => {
                observer.next(data);
            });
            return () => {
                this.socket.disconnect();
            };
        });
        return observable;
    }

    public listenFinish() {
        const observable = new Observable(observer => {
            this.socket.on('finishQuestion', (data) => {
                observer.next(data);
            });
            return () => {
                this.socket.disconnect();
            };
        });
        return observable;
    }

}
