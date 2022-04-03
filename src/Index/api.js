const questions = [
    {
        questionId: 1,
        creator: 'creator',
        created: new Date(),
        questionTitle: 'question title',
        questionBody: 'question body',
        answers: [
            {
                answerId: 1,
                creator: 'answer creator',
                created: new Date(),
                answerBody: 'answer body',
            }, {
                answerId: 2,
                creator: 'answer creator',
                created: new Date(),
                answerBody: 'answer body',
            }, {
                answerId: 3,
                creator: 'answer creator',
                created: new Date(),
                answerBody: 'answer body',
            }
        ]
    },
    {
        questionId: 2,
        creator: 'creator',
        created: new Date(),
        questionTitle: 'question title',
        questionBody: 'question body',
        answers: [
            {
                answerId: 4,
                creator: 'answer creator',
                created: new Date(),
                answerBody: 'answer body',
            }, {
                answerId: 5,
                creator: 'answer creator',
                created: new Date(),
                answerBody: 'answer body',
            }, {
                answerId: 6,
                creator: 'answer creator',
                created: new Date(),
                answerBody: 'answer body',
            }
        ]
    },
]

export const getQuestionData = () => questions;