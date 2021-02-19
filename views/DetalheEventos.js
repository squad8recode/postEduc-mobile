import React from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Feather, Ionicon } from '@expo/vector-icons';

import Eventos from '../src/components/Eventos';


export default function DetalheEventos(props) {
    return (
        <View style={styles.container}>
           {/* <Image 
           source={require('../assets/img/Banner.png')}
           resizeMode='contain'
           style={styles.container}
           /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 250,
        margin: 7,
        borderRadius: 5,
        backgroundColor: '#ddd'
    },
})