import React, {useState} from 'react';
import { Platform, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import {styles} from '../assets/css/Styles';


export default function CadastroLogin({ navigation }) {

    const [usuario, setUsuario] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const cadastrarUsuario = () => {
        Alert.alert("Sucesso", "Cadastro Realizado com Sucesso!");
    }

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"} 
            style={[styles.container, styles.bgColor]}>
            <View style={styles.loginImg}>
                <Text style={styles.tituloCadastro}>Faça o seu Cadastro</Text>
            </View>
            <View style={styles.loginForm}>
                <TextInput 
                style={styles.loginInput} 
                placeholder='Digite um usuário'
                onChangeText={text=>setUsuario(text)}
                />
                <TextInput 
                style={styles.loginInput} 
                placeholder='Digite um e-mail' 
                autoCorrect={false}
                onChangeText={text=>setEmail(text)}  
                />
                <TextInput 
                style={styles.loginInput} 
                placeholder='Digite a senha' 
                secureTextEntry={true} 
                onChangeText={text=>setSenha(text)}/>
                <TextInput 
                style={styles.loginInput} 
                placeholder='Digite a senha novamente' 
                secureTextEntry={true} 
                />
                <View style={[styles.btn, {flexDirection: 'row'} ]}>
                    <TouchableOpacity style={styles.loginBtn} onPress={() => cadastrarUsuario(navigation.navigate('HomeEventos'))} >
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