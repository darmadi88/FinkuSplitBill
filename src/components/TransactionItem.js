import React, { useContext } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableNativeFeedback,
    StyleSheet
} from 'react-native';
import TransactionContext from '../context/transaction/transactionContext';
import Button from './Button';
import PersonItemInput from './PersonItemInput';

const TransactionItem = ({ item }) => {
    const transactionContext = useContext(TransactionContext);
    const { setTransaction, setTransactionModal, deleteTransaction, persons } = transactionContext;

    const onEditTransaction = () => {
        setTransaction(item);
        setTransactionModal(true);
    }

    return (
        <View style={style.itemBody}>
            <View style={[style.itemRow, { marginBottom: 12 }]}>
                <View>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.itemName}</Text>
                </View>
                <View style={style.itemRow}>
                    <Button onPress={() => onEditTransaction(item)} text="Edit" textStyle={{ fontSize: 12 }} buttonStyle={{ paddingVertical: 4, paddingHorizontal: 8, marginRight: 8 }} />
                    <Button onPress={() => deleteTransaction(item)} text="Delete" textStyle={{ fontSize: 12 }} buttonStyle={{ paddingVertical: 4, paddingHorizontal: 8, padding: 8 }} />
                </View>
            </View>
            <View style={style.itemRow}>
                <View style={{ flex: 3 }} />
                <Text style={{ flex: 1, textAlign: 'right', fontWeight: 'bold' }}>Rp. {item.price}</Text>
                <Text style={{ flex: 2, textAlign: 'right', fontWeight: 'bold' }}>Rp. {item.quantity ? item.quantity * item.price : "-"}</Text>
            </View>
            <View style={style.personContainer}>
                {persons.map(person => <PersonItemInput key={`${person.id}${item.id}`} person={person} item={item} />)}
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    itemBody: {
        padding: 16,
        borderBottomWidth: 1,
        borderColor: '#d5d5d5',
        backgroundColor: "#fafafa",
        borderBottomWidth: 1,
        borderBottomColor: '#cacaca'
    },
    personContainer: {
        backgroundColor: '#eaeaea',
        marginTop: 16,
        borderRadius: 8,
        overflow: 'hidden'
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
    }
})

export default TransactionItem;