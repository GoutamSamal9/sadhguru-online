import { QuestionInterface } from "../interface/survey/questionInterface";

export const questions: QuestionInterface[] = [
    {
      id: "1",
      title: "Your emergency address:",
      required: true,
      type: "Multi Line Text Box",
    },
    {
      id: "2",
      title: "Your recovery email:",
      required: true,
      type: "Single Line Text Box",
      triggeringQuestionId: "1",
      validations: [
        {
          type: "email",
          errorMessage: "Not a valid email",
        },
        {
          type: "length",
          errorMessage: "Minimum 8 and maximum 16 characters",
          minLength: 8,
          maxLength: 16,
        },
      ],
    },
    {
      id: "3",
      title: "Your ID proof",
      required: true,
      type: "Multi Choice - One Answer",
      showAttachedForm: true,
    },
    {
      id: "4",
      title: "Give 3 situations where you are really happy",
      required: true,
      type: "Multi Line Text Box",
      timeLimitInSeconds: 300,
    },
    {
      id: "5",
      title:
        "Do you have or had any conditions? (Depression, Anxiety, OCD, Schizophrenia, Psychosis, ADD/ADHD, Bipolar Disorder, etc.)",
      required: true,
      type: "Multi Choice - Multiple Answers",
      answers: [
        {
          id: "22",
          value: "Depression",
        },
        {
          id: "23",
          value: "Anxiety",
        },
      ],
    },
    {
      id: "6",
      title: "When did you do your Inner Engineering?",
      required: true,
      type: "Date",
    },
    {
      id: "7",
      title: "When did you do your first Hatha Yoga program?",
      required: true,
      type: "Matrix",
      answers: [
        {
          id: "36",
          value: "Beginner",
        },
        {
          id: "37",
          value: "Intermediate",
        },
        {
          id: "38",
          value: "Advanced",
        },
      ],
      rows: [
        "How comfortable are you in using computer?",
        "How comfortable are you in speaking Tamil?",
      ],
    },
  ];