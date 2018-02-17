import { Message } from "./message.model";

export class ChatMessage extends Message{
    constructor(from: string, content: string) {
        super(from, content);
    }
}