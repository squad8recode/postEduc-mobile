import React from 'react';
import { Platform, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {styles} from '../assets/css/Styles';


export default function CadastroLogin({ navigation }) {

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"} 
            style={[styles.container, styles.bgColor]}>
            <View style={styles.loginImg}>
                <Text style={styles.tituloCadastro}>Faça o seu Cadastro</Text>
            </View>
            <View style={styles.loginForm}>
                <TextInput style={styles.loginInput} placeholder='Digite um usuário' />
                <TextInput style={styles.loginInput} placeholder='Digite um e-mail'  />
                <TextInput style={styles.loginInput} placeholder='Digite a senha' secureTextEntry={true} />
                <TextInput style={styles.loginInput} placeholder='Digite a senha novamente' secureTextEntry={true} />
                <View style={[styles.btn, {flexDirection: 'row'} ]}>
                    <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('HomeEventos')} >
                        <Text style={styles.loginBtnText}>Cadastrar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.loginBtn2} onPress={() => navigation.navigate('Login')} >
                        <Text style={styles.loginBtnText2}>Voltar</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.cadastreContainer}>
                    <Text style={styles.cadastreText}> Quer conhecer antes de se cadastrar?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('HomeEventos')}>
                        <Text style={styles.cadastreText2}> Clique aqui</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}