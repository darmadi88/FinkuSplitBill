import React, { useEffect, useState, useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import {
    View,
    Text,
    TouchableNativeFeedback,
    Modal,
    StyleSheet,
    TextInput,
} from 'react-native';
import TransactionContext from '../context/transaction/transactionContext';
import Button from './Button';
import Input from './Input';

const AddEditTransactionItem = () => {
    const transactionContext = useContext(TransactionContext);
    const { transactionModal, setTransactionModal, addTransaction, transaction, setTransaction, editTransaction } = transactionContext;

    const [item, setItem] = useState({
        itemName: "",
        price: "",
    });

    const editInput = (field, value) => setItem({
        ...item,
        [field]: value
    })

    const onSubmit = () => {
        if (transaction?.id > 0) {
            editTransaction(item)
        } else {
            addTransaction(item)
        }
        resetField();
    }
    
    const resetField = () => {
        setItem({
            itemName: "",
            price: "",
        })
        setTransaction({});
    }

    useEffect(() => {
        if (transaction?.id > 0) {
            setItem(transaction);
        } else {
            resetField()
        }
    }, [transactionModal])

    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={transactionModal}
            >
                <TouchableOpacity style={{flex: 1, backgroundColor: '#999', opacity: 0.8}} activeOpacity={0} onPress={() => setTransactionModal(false)} />
                <View style={style.modalContainer}>
                    <Text style={style.modalTitle}>{item.id ? "Edit Transaction Item" : "Add Transaction Item"}</Text>
                    <View style={{paddingBottom: 16}}>
                        <Input label="Item Name" placeholder="Item Name" value={item.itemName} onChangeText={(value) => editInput("itemName", value)} />
                        <Input label="Item Price" placeholder="Price" value={item.price} onChangeText={(value) => editInput("price", value)} keyboardType="numeric" />
                    </View>
                    <View style={{ marginVertical: 16 }}>
                        <Button  onPress={() => onSubmit()} text={item.id ? "Edit" : "Add"} />
                    </View>
                    <Button onPress={() => setTransactionModal(false)} text="Cancel" />
                </View>
            </Modal>

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
    modalContainer: {
        padding: 16,
        backgroundColor: '#fff',
    },
    modalTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
        paddingTop: 32,
        paddingBottom: 16
    }
})

export default AddEditTransactionItem;