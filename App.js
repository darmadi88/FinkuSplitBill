import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PersonList from './src/screen/personList';
import Transactions from './src/screen/transactions';

import TransactionState from './src/context/transaction/TransactionState';
import SplitBill from './src/screen/splitBill';

const Stack = createNativeStackNavigator();

function App() {
 
  return (
    <TransactionState>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Person List" component={PersonList} />
          <Stack.Screen name="Transaction" component={Transactions} />
          <Stack.Screen name="Split Bill" component={SplitBill} />
        </Stack.Navigator>
      </NavigationContainer>
    </TransactionState>
  );
}

export default App;