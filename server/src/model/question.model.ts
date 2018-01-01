import * as mongoose from 'mongoose';
import {Question} from './question';
export interface QuestionModel extends Question, mongoose.Document{
}
