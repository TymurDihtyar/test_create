export interface ITest {
    id: number
    title: string
    grade: string
    testInstruction: string
    testList: IOneTest[]
}

export interface IOneTest {
    id: number
    taskSentence: string
    rightAnswer: string
    answers: IAnswer[]
}

export interface IAnswer {
    id: number
    answer: string
}