import * as mongoose from 'mongoose';
export class Question extends mongoose.Schema{
  constructor(public question: string, public answers: string[]) {
    super();
  }
}
