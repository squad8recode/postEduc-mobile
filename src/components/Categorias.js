import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

export default function Categorias(props) {
    return (
        <View style={styles.container}>
            <View>
                <Image
                source={props.cover}
                style={styles.cover}
                />
            </View>
            
            <View style={styles.conteudo}>
                <Text style={styles.description}>{props.name}</Text>
                <View style={styles.footer}>
                    <Ionicons name='ios-add-circle-outline' size={24} color='black' />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 180,
        height: 200,
        backgroundColor: '#fff',
        elevation: 2,
        padding: 5,
        marginVertical: 5,
        marginRight: 20,
        marginLeft: 2,
        borderRadius: 10,
    },
    cover: {
        borderRadius: 10,
        width: 170,
        height: 140,
    },
    conteudo: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'flex-end',
        paddingHorizontal: 5,
        marginTop: 15,
    },
    description: {
        width: '75%',
        fontSize: 14,
    },
    footer: {
        width: '20%',
    }
})

