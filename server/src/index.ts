import * as express from "express";
import * as http from "http";
import * as socketIo from "socket.io";

import { Message } from "./model";
import { Question } from "./model";
import * as mongoose from 'mongoose';

class Server {
    public static readonly PORT = 8080;
    public app: any;
    private server: any;
    private io: any;
  private port: number;
  private conn: any;
  private question: any;

    public static bootstrap(): Server {
        return new Server();
    }

    constructor() {
        this.createApp();
        this.config();
        this.createServer();
        this.sockets();
      this.listen();
      this.conn = mongoose.connect('mongodb://localhost/yabeng');
      this.question = this.conn.model('Question', Question);

      
    }

    private createApp(): void {
        this.app = express();
    }

    private createServer(): void {
        this.server = http.createServer(this.app);
    }

    private config(): void {
        this.port = process.env.PORT || Server.PORT;
    }

    private sockets(): void {
        this.io = socketIo(this.server);
    }

    private listen(): void {
        this.server.listen(this.port, () => {
            console.log('Running server on port %s', this.port);
        });

        this.io.on('connect', (socket: any) => {
            console.log('Connected client on port %s.', this.port);
            socket.on('message', (m: Message|Question) => {
                console.log('[server](message): %s', JSON.stringify(m));
                this.io.emit('message', m);
            });
            socket.on('question', (question: Question) => {
              console.log('foolo');
	      console.log('foo: %s', JSON.stringify(question));
	      this.conn.save(question);
            });

            socket.on('disconnect', () => {
                console.log('Client disconnected');
            });
        });
    }
}

let server = Server.bootstrap();
export = server.app;
