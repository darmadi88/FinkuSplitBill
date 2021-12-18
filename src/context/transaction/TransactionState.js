import React, { useReducer, useContext } from 'react';
import TransactionContext from './transactionContext';
import TransactionReducer from './transactionReducer';
import {
    ADD_PERSON,
    EDIT_PERSON,
    DELETE_PERSON,
    SET_PERSON,
    ADD_TRANSACTION,
    EDIT_TRANSACTION,
    DELETE_TRANSACTION,
    SET_TRANSACTION,
    SET_PERSON_MODAL,
    SET_TRANSACTION_MODAL,
    ADD_ITEM_TO_PERSON,
    EDIT_ITEM_TO_PERSON,
} from '../types';

const TransactionState = props => {
    const initialState = {
        persons: [],
        person: {},
        transactions: [],
        transaction: {},
        personItems: [],
        personModal: false,
        transactionModal: false,
    }

    const [state, dispatch] = useReducer(TransactionReducer, initialState);

    // add persons
    const addPerson = (item) => {
        const timeStamp = Date.now();

        let payload = [
            ...state.persons,
            {
                ...item,
                id: timeStamp
            }
        ]

        dispatch({
            type: ADD_PERSON,
            payload
        })
    }

    // edit persons
    const editPerson = (item) => {
        let payload = state.persons;
        let getIndex = payload.findIndex(person => person.id == item.id);

        payload[getIndex] = item;

        dispatch({
            type: EDIT_PERSON,
            payload
        })
    }

    // delete persons
    const deletePerson = (item) => {
        let payload = state.persons;
        const getIndex = payload.findIndex(person => person.id == item.id);

        payload.splice(getIndex, 1);


        dispatch({ type: DELETE_PERSON, payload })
    }

    // setPerson
    const setPerson = (item) => {
        dispatch({ type: SET_PERSON, payload: item })
    }

    // add transactions
    const addTransaction = (item) => {
        const timeStamp = Date.now();

        let payload = [
            ...state.transactions,
            {
                ...item,
                id: timeStamp
            }
        ]

        dispatch({
            type: ADD_TRANSACTION,
            payload
        })
    }

    // edit transactions
    const editTransaction = (item) => {
        let payload = state.transactions;
        const getIndex = payload.findIndex(transaction => transaction.id == item.id);

        payload[getIndex] = item;


        dispatch({ type: EDIT_TRANSACTION, payload })
    }

    // set transaction in modal
    const setTransaction = (item) => {
        dispatch({ type: SET_TRANSACTION, payload: item })
    }

    // delete transactions
    const deleteTransaction = (item) => {
        let payload = state.transactions;
        const getIndex = payload.findIndex(transaction => transaction.id == item.id);

        payload.splice(getIndex, 1);


        dispatch({ type: DELETE_TRANSACTION, payload })
    }

    // set person modal
    const setPersonModal = (payload) => {
        dispatch({ type: SET_PERSON_MODAL, payload })
    }

    // set transaction modal
    const setTransactionModal = (payload) => {
        dispatch({ type: SET_TRANSACTION_MODAL, payload })
    }

    // count total quantity per item
    const countItemQuantity = (itemId) => {
        let totalQuantity = 0;
        state.personItems.filter(item => {
            if (item.itemId == itemId) {
                totalQuantity += item.quantity
            }
        })

        return totalQuantity;
    }

    // add item to person
    const addItemToPersonItem = (personId, itemId, quantity) => {
        const personData = state.persons.find(person => person.id == personId);
        const transactionData = state.transactions.find(transaction => transaction.id == itemId);

        const payload = [
            ...state.personItems,
            {
                id: `${personId}${itemId}`,
                personId,
                itemId,
                itemName: transactionData.itemName,
                itemPrice: transactionData.price,
                quantity
            }
        ]

        editTransaction({
            ...transactionData,
            quantity: countItemQuantity(itemId)
        })
        dispatch({ type: ADD_ITEM_TO_PERSON, payload })
    }

    // update person item
    const updateItemToPersonItem = (personId, itemId, quantity) => {
        // if (quantity > 0) {
            let payload = state.personItems;
            const getIndex = payload.findIndex(item => item.id == `${personId}${itemId}`);
            const transactionData = state.transactions.find(transaction => transaction.id == itemId);

            if (getIndex >= 0) {
                payload[getIndex] = {
                    ...payload[getIndex],
                    quantity
                }
    
                editTransaction({
                    ...transactionData,
                    quantity: countItemQuantity(itemId)
                })
    
                dispatch({ type: EDIT_ITEM_TO_PERSON, payload })
            } else {
                addItemToPersonItem(personId, itemId, quantity)
            }
        // }
    }

    return <TransactionContext.Provider
        value={{
            persons: state.persons,
            person: state.person,
            transactions: state.transactions,
            transaction: state.transaction,
            personModal: state.personModal,
            transactionModal: state.transactionModal,
            personItems: state.personItems,
            addTransaction,
            editTransaction,
            deleteTransaction,
            setTransaction,
            addPerson,
            editPerson,
            deletePerson,
            setPerson,
            setPersonModal,
            setTransactionModal,
            addItemToPersonItem,
            updateItemToPersonItem
        }}
    >
        {props.children}
    </TransactionContext.Provider>
}

export default TransactionState;