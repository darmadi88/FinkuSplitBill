import React, { useEffect, useState, useContext } from 'react';
import {
    View,
    FlatList,
    StyleSheet,
} from 'react-native';
import AddEditTransactionItem from '../components/AddEditTransactionItem';
import Button from '../components/Button';
import TransactionItem from '../components/TransactionItem';
import TransactionContext from '../context/transaction/transactionContext';

const Transactions = ({ navigation }) => {
    const transactionContext = useContext(TransactionContext);
    const { setTransactionModal, setTransaction } = transactionContext;

    const openAddTransaction = () => {
        setTransaction({})
        setTransactionModal(true);
    }

    return (
        <View style={{ flex: 1 }}>

            <View style={{ padding: 16 }}>
                <Button onPress={() => openAddTransaction()} text="+ Add Item" />
            </View>
            <View style={{ flex: 1, backgroundColor: '#eaeaea' }}>
                <FlatList
                    data={transactionContext.transactions}
                    renderItem={({ item, index }) => <TransactionItem key={index} item={item} />}
                />
            </View>
            <View style={{ padding: 16 }}>
                {/* <View style={style.totalContainer}>
                    <Text style={style.totalText}>Total :</Text>
                    <Text style={style.totalAmount}>{totalAmount}</Text>
                </View> */}
                <Button onPress={() => navigation.navigate('Split Bill')} text="Split Bill" />
            </View>
            <AddEditTransactionItem />
        </View>
    )
}

const style = StyleSheet.create({
    itemContainer: {
        padding: 16,
    },
    itemRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    personItem: {
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#d5d5d5',
        backgroundColor: "#fafafa"
    },
    personItemName: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    totalContainer: {
        paddingBottom: 16,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    totalText: {
        fontSize: 16,
    },
    totalAmount: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 16
    }
})

export default Transactions;