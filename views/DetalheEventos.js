import React from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView, StyleSheet, Alert } from 'react-native';


export default function DetalheEventos({ navigation }) {
    return (
        <ScrollView vertical showsVerticalScrollIndicator={false} style={styles.container}>
            <View style={styles.containerImg}>
                <Image 
                source={require('../assets/img/projeto_periferia.jpg')}
                resizeMode='contain'
                style={{width: '100%', height: 300}}
                />
            </View>
            <View style={{marginHorizontal: 10}}>
                <View style={styles.conteudo}>
                    <Text style={styles.titulo}>Da Periferia Para o Mundo</Text>
                </View>
                <View style={{marginBottom: 10}}>
                    <Text style={styles.description}>Curso preparatório para o vestibulinho ETEC. Inscrevam-se!</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={[styles.description, {fontWeight: 'bold'}]}>Modalidade: </Text>
                    <Text style={styles.description}>online</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={[styles.description, {fontWeight: 'bold'}]}>Quando: </Text>
                    <Text style={styles.description}>2021-02-21 - 12:00:00</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={[styles.description, {fontWeight: 'bold'}]}>Duração: </Text>
                    <Text style={styles.description}>40h horas</Text>
                </View>
                <View style={styles.btn}>
                    <TouchableOpacity style={styles.participarBtn} onPress={() => Alert.alert('Inscrição realizada com sucesso!')} >
                        <Text style={styles.participarBtnText}>Participar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.participarBtn2} onPress={() => navigation.navigate('HomeEventos')} >
                        <Text style={styles.participarBtnText}>Voltar</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
           
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        marginHorizontal: 5,
    },
    containerImg:{
        marginTop: 5,
        height: 300,
        width: '100%',
    },
    conteudo: {
        alignItems: 'center',
        marginVertical: 10,
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#0054ff',
    },
    description: {
        fontSize: 12,
        color: '#4e4656',
    },
    btn: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginVertical: 10,
    },
    participarBtn: {
        padding: 10,
        backgroundColor: '#0068c8',
        alignSelf: 'center',
        borderRadius: 5,
        marginRight: 10,
    },
    participarBtn2:{
        padding: 10,
        backgroundColor: '#504456',
        alignSelf: 'center',
        borderRadius: 5,
        marginRight: 10,
    },
    participarBtnText: {
        fontWeight: 'bold',
        fontSize: 16,
        color: "#FFF",
    },
})