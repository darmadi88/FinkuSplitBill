import {
    ADD_PERSON,
    EDIT_PERSON,
    DELETE_PERSON,
    SET_PERSON,
    SET_PERSON_MODAL,
    ADD_TRANSACTION,
    EDIT_TRANSACTION,
    DELETE_TRANSACTION,
    SET_TRANSACTION,
    SET_TRANSACTION_MODAL,
    ADD_ITEM_TO_PERSON,
    EDIT_ITEM_TO_PERSON
} from '../types';

export default (state, action) => {
    let { transactions } = state

    switch (action.type) {
        case ADD_PERSON:
            return {
                ...state,
                persons: action.payload,
                personModal: false,
            }
        case EDIT_PERSON:
            return {
                ...state,
                persons: action.payload,
                personModal: false,
            }
        case DELETE_PERSON:
            return {
                ...state,
                persons: action.payload
            }
        case SET_PERSON:
            return {
                ...state,
                person: action.payload
            }
        case SET_PERSON_MODAL:
            return {
                ...state,
                personModal: action.payload
            }
        case ADD_TRANSACTION:
            return {
                ...state,
                transactions: action.payload,
                transactionModal: false,
            }
        case EDIT_TRANSACTION:
            return {
                ...state,
                transactions: action.payload,
                transactionModal: false,
            }
        case DELETE_TRANSACTION:
            return {
                ...state,
                transactions: action.payload
            }
        case SET_TRANSACTION:
            return {
                ...state,
                transaction: action.payload
            }
        case SET_TRANSACTION_MODAL:
            return {
                ...state,
                transactionModal: action.payload
            }
        case ADD_ITEM_TO_PERSON:
            return {
                ...state,
                personItems: action.payload
            }
        case EDIT_ITEM_TO_PERSON:
            return {
                ...state,
                personItems: action.payload
            }
        default:
    }
}