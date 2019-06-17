import { RECEIVE_DECKS, ADD_DECK, RECEIVE_CARDS, ADD_CARD } from '../actions'

export default function decks(state = {}, action) {
    switch (action.type) {
        case RECEIVE_DECKS:
            return {
                ...state,
                ...action.decks
            }
        case ADD_DECK:
            return {
                ...state,
                ...action.decks
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

