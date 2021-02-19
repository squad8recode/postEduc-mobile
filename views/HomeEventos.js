import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Eventos from '../src/components/Eventos';
import Categorias from '../src/components/Categorias';

import {styles} from '../assets/css/Styles';


export default function HomeEventos() {

    const navigation = useNavigation();

    return (
        <ScrollView 
        showsVerticalScrollIndicator={false}
        style={{backgroundColor: '#fff'}}
        >
            <View style={styles.headerEventos}>
                <View style={styles.inputArea}>
                    <Feather name="search" size={24} color="black" />
                    <TextInput 
                    placeholder="Já sabe o nome do evento? Pesquise aqui."
                    style={styles.inputPesquisa}
                    />
                </View>
            </View>
            <View style={styles.conteudoEventos}>
                <Text style={styles.titulo}>Eventos</Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal: 15}} >
                <Eventos 
                cover={require('../assets/img/projeto_periferia.jpg')}
                name="Da Periferia Para o Mundo"
                description="Curso preparatório para o vestibulinho ETEC."
                onPress={() => navigation.navigate('DetalheEventos')}
                />
                <Eventos 
                cover={require('../assets/img/Fadlo_Haidar.jpg')}
                name="Centro de Estudo de Línguas"
                description="Programa da Educação proporciona ensino de até seis idiomas para alunos do Ensino Fundamental..."
                onPress={() => navigation.navigate('DetalheEventos')}
                />
                <Eventos 
                cover={require('../assets/img/GAU.jpg')}
                name="Mulheres do GAU"
                description="Natali Conceição visita o projeto Mulheres do GAU (Grupo de Agricultura Urbana), um coletivo de..."
                onPress={() => navigation.navigate('DetalheEventos')}
                />
                <Eventos 
                cover={require('../assets/img/unifesp1.jpg')}
                name="Sonoplastia Audiovisual Dramartugia"
                description="Localizado no Conjunto José Bonifácio em Itaquera, com atuação em projetos nas áreas..."
                onPress={() => navigation.navigate('DetalheEventos')}
                />
                <Eventos 
                cover={require('../assets/img/HQ-750x375.png')}
                name="Oficina de quadrinhos em Itaquera"
                description="A oficina-laboratório conta com quatro horas de duração e atividades práticas sobre noções..."
                onPress={() => navigation.navigate('DetalheEventos')}
                />
                <Eventos 
                cover={require('../assets/img/lgbt.jpg')}
                name="Exposição retrata resistência da população LGBT na zona Leste"
                description="Em tempos lúgubres a arte é sempre resistência. O Centro de Cidadania LGBTI Laura Vermont..."
                onPress={() => navigation.navigate('DetalheEventos')}
                />
            </ScrollView>
            
            <View style={{flexDirection: 'row', marginBottom: 10, alignItems: 'center'}}>
                <Text style={[styles.titulo, {marginTop: 20 }]}>Categorias</Text>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal: 15}} >
                <Categorias 
                cover={require('../assets/img/desenho.jpg')}
                name='Desenho'
                />
                <Categorias 
                cover={require('../assets/img/matematica.jpg')}
                name='Matemática'
                />
                <Categorias 
                cover={require('../assets/img/musica.jpg')}
                name='Música'
                />
                <Categorias 
                cover={require('../assets/img/palestra.jpg')}
                name='Palestra'
                />
            </ScrollView>

        </ScrollView>
    )
}