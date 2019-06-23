import { AsyncStorage } from 'react-native';

export const FLASHCARD_STORAGE_KEY = "flashcards: cards";

const initialData = {
    React: {
        title: 'React',
        questions: [
            {
                question: 'What is React?',
                answer: 'A library for managing user interfaces',
                isCorrect: 'true'
            },
            {
                question: 'Where do you make Ajax requests in React?',
                answer: 'The componentDidMount lifecycle event',
                isCorrect: 'true'
            }
        ]
    },
    Javascript: {
        title: 'Javascript',
        questions: [
            {
                question: 'What is a closure?',
                answer: 'The combination of a function and the lexical environment within which that function was declared.',
                isCorrect: 'true'
            }
        ]
    }
}

export function getDecks() {
    AsyncStorage.setItem(FLASHCARD_STORAGE_KEY, JSON.stringify(initialData))
    return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY).then((result) => {
        return JSON.parse(result)
    })
}