import * as mongoose from 'mongoose';
import {Question} from './shared/question';
export interface QuestionModel extends Question, mongoose.Document{
}
