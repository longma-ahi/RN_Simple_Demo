import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  TextInput,
  View,
  Button,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { Provider, useSelector, useDispatch } from "react-redux";
import { addReservation } from './app/reservationSlice';
import { RootState, store } from "./app/store"
import { ReservationCard } from './components/ReservationCard';


export const Home = () => {
    // we need to access the state in the store so we can use it
    // useSelector will gives us the state in the store
    const reservations: string[] = useSelector(
        (state: RootState) => state.reservations.value
    );

    // we are using useState hook to be able to access the local reservationNameInput state we defined here,
    // and setReservationNameInput is function registered to be able to update the reservationNameInput state
    // and we give reservationNameInput a initial value which is empty string
    const [reservationNameInput, setReservationNameInput] = useState(""); 
    
    // in Redux if we want update the state in store, we will need to dispatch the action with the reducer,
    const dispatch = useDispatch();

    const handleAddReservations = () => {
        if (!reservationNameInput) return;
        // addReservation is the action need to be dispatched
        dispatch(addReservation(reservationNameInput))
        setReservationNameInput("")
    }
   
    return (
        <View >
            {
                reservations.map((name, index) => {
                    return <ReservationCard name = {name} index = {index}/>
                })
            }
            <TextInput
                style={styles.input}
                onChangeText={text => setReservationNameInput(text)}
                value={reservationNameInput}
            />
            <Button
                onPress={handleAddReservations}
                title="Add"
            />
        </View>
    )
    
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });
  