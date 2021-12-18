import React, { useEffect, useState, useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import {
    View,
    Text,
    Modal,
    StyleSheet,
} from 'react-native';
import TransactionContext from '../context/transaction/transactionContext';
import Button from './Button';
import Input from './Input';

const AddEditPerson = () => {
    const transactionContext = useContext(TransactionContext);
    const { personModal, setPersonModal, addPerson, person, editPerson, setPerson } = transactionContext;

    const [item, setItem] = useState({
        name: "",
    });

    const editInput = (value) => setItem({
        ...item,
        name: value
    })

    const onSubmit = () => {
        if (person.id) {
            editPerson(item);
        } else {
            addPerson(item);
        }
        resetField();
    }

    const resetField = () => {
        setItem({
            name: "",
        })
        setPerson({});
    }

    useEffect(() => {
        if (person.id) {
            setItem(person);
        } else {
            resetField()
        }
    }, [personModal])

    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={personModal}
            >
                <TouchableOpacity style={{flex: 1, backgroundColor: '#999', opacity: 0.8}} activeOpacity={0} onPress={() => setPersonModal(false)} />
                <View style={style.modalContainer}>
                    <Text style={style.modalTitle}>{item.id ? "Edit Person" : "Add Person"}</Text>
                    <View style={{paddingBottom: 16}}>
                        <Input label="Name" placeholder="Name" value={item.name} onChangeText={(value) => editInput(value)} />
                    </View>
                    <View style={{ marginVertical: 16 }}>
                        <Button onPress={() => onSubmit()} text={item.id ? "Edit" : "Add"} />
                    </View>
                    <Button onPress={() => setPersonModal(false)} text="Cancel" />
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

export default AddEditPerson;