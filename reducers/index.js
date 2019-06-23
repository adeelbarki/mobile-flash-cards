import { RECEIVE_DECKS, ADD_DECK, ADD_CARD } from '../actions'

export default function decks(state = {}, action) {
    switch (action.type) {
        case RECEIVE_DECKS:
            return {
                ...state,
                ...action.decks
            }
        case ADD_DECK:
            const newDeck = {
                [action.deck]: {
                    title: action.deck,
                    questions: []
                }
            }
            return {
                ...state,
                ...newDeck
            }
        case ADD_CARD:
            const { question, answer, isCorrect, deck } = action.card
            return {
                ...state,
                [deck]: {
                    ...state[deck],
                    questions: [...state[deck].questions, { question, answer, isCorrect }]
                } 
            }
        default:
            return state
    }
}

// export function cards(state = {}, action) {
//     switch (action.type) {
//         case RECEIVE_CARDS:
//             return {
//                 ...state,
//                 ...action.cards
//             }
//         case ADD_CARD:
//             return {
//                 ...state,
//                 ...action.cards
//             }
//         default:
//             return state
//     }
// }

