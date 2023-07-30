export interface QuestionInterface {
    id: string;
    title: string;
    required: boolean;
    type: string;
    triggeringQuestionId?: string;
    validations?: Validation[];
    answers?: Answer[];
    showAttachedForm?: boolean;
    timeLimitInSeconds?: number;
    rows?: string[];
  }
  
  export interface Validation {
    type: string;
    errorMessage: string;
    minLength?: number;
    maxLength?: number;
  }
  
  export interface Answer {
    id: string;
    value: string;
  }