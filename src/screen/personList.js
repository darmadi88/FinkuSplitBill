import React, { useContext, useState } from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TouchableNativeFeedback
} from 'react-native';
import AddEditPerson from '../components/AddEditPerson';
import Button from '../components/Button';
import TransactionContext from '../context/transaction/transactionContext';

const PersonList = ({ navigation }) => {
    const transactionContext = useContext(TransactionContext);
    const { persons, setPersonModal, setPerson, deletePerson } = transactionContext;

    const onAddPerson = () => {
        setPerson({})
        setPersonModal(true)
    }

    const onEditPerson = (item) => {
        setPerson(item);
        setPersonModal(true);
    }

    const onDeletePerson = (item) => deletePerson(item);

    return (
        <View style={{ flex: 1 }}>
            <View style={{ padding: 16 }}>
                <Button onPress={() => onAddPerson()} text="+ Add Person" />
            </View>
            <View style={{ flex: 1, backgroundColor: '#eaeaea' }}>
                <FlatList
                    data={persons}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableNativeFeedback
                                key={index}
                                onPress={() => onEditPerson(item)}>
                                <View style={style.personItem}>
                                    <Text style={style.personItemName}>{item.name}</Text>
                                    <Button onPress={() => onDeletePerson(item)} text="Delete" />
                                </View>
                            </TouchableNativeFeedback>)
                    }}
                />
            </View>
            <View style={{ padding: 16 }}>
                <Button onPress={() => navigation.navigate('Transaction')} text="Next" />
            </View>
            <AddEditPerson />
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
    }
})

export default PersonList;