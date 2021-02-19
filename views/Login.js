import React from 'react';
import { Image, Platform, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {styles} from '../assets/css/Styles';


export default function Login({ navigation }) {

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"} 
            style={[styles.container, styles.bgColor]}>
            <View style={styles.loginImg}>
                <Image 
                    source={require('../assets/img/logo.png')}
                    style={{width: 150, height: 150}} 
                    resizeMode='contain'
                />
            </View>
            <View style={styles.loginForm}>
                <TextInput style={styles.loginInput} placeholder='Digite um usuário' />
                <TextInput style={styles.loginInput} placeholder='Digite a senha' secureTextEntry={true} />
                <View style={styles.btn}>
                    <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('HomeEventos')} >
                        <Text style={styles.loginBtnText}>Login</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.cadastreContainer}>
                    <Text style={styles.cadastreText}> Ainda não tem uma conta?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('CadastroLogin')}>
                        <Text style={styles.cadastreText2}> Cadastre-se</Text>
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