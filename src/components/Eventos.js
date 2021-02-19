import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Eventos(props) {
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.container}>
            <Image 
                source={props.cover}
                style={styles.cover}
                resizeMode='contain'
            />
            <View style={styles.conteudo}>
                <Text style={styles.titulo}>{props.name}</Text>
            </View>
            <Text style={styles.description}>
                {props.description}
            </Text>
            <View style={styles.footer}>
                <Ionicons name='ios-add-circle-outline' size={24} color='black' />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        backgroundColor: '#fff',
        height: 250,
        width: 200,
        elevation: 2,
        borderRadius: 10,
        padding: 15,
        marginRight: 30,
        marginLeft: 2,
        marginBottom: 5,
    },
    cover: {
        width: 170,
        height: 110,
        borderRadius: 10,
    },
    conteudo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 11,
        color: '#0054ff',
    },
    // dot: {
    //     width: 4,
    //     height: 4,
    //     borderRadius: 4,
    //     backgroundColor: 'red',
    //     marginHorizontal: 4,
    // },
    // badge: {
    //     color: 'red',
    //     fontSize: 9,
    //     fontWeight: 'bold'
    // },
    description: {
        fontSize: 10,
        color: '#4e4656',
    },
    footer: {
        marginTop: 10,
        alignItems: 'center',
        width: '100%',
    },
})