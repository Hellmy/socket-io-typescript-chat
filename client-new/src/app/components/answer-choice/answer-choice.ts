import { Answer } from '../../shared/model/answer.model';

export interface AnswerChoice {
    value: Answer;
}


export interface ChoiceFormElement {
    name: string;
    selected: boolean;
}
