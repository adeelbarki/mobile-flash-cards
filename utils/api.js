import { AsyncStorage } from 'react-native';

export const DECKS_STORAGE_KEY = "flashcards: cards";

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

export const getInitialData = () => {
    // AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(initialData))
    // return AsyncStorage.getItem(DECKS_STORAGE_KEY).then((result) => {
    //     return JSON.parse(result)
    // })
    return initialData
}

export function saveDeckTitle(title) {
    return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
        [title]: {
            title: title,
            questions: []
        }
    }))
}

export function getDecks (deck) {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY)
        .then(results => {
            if(results === null) {
                AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.parse(getinitialData))
                return getInitialData
            }
            else {
                return JSON.parse(results)
            }
            }
        )
}