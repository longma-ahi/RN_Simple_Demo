import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { Provider, useDispatch, useSelector } from "react-redux";
import { removeReservation } from '../app/reservationSlice';
import { RootState, store } from "../app/store"

interface ReservationCardType {
    name: string;
    index: number
}

export const ReservationCard = ({name, index}: ReservationCardType) => {
    const dispatch = useDispatch()

    const clickText = () => {
        // we will need to access the state in store
        dispatch(removeReservation(index))
    }

    return (
        <View>
            <TouchableOpacity
                onPress={clickText}
            >
            <Text>
                {index + " " + name}
            </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
});
  