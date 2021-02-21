import React, {useState, useEffect} from 'react';
import { Image, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View, Animated, Alert } from 'react-native';
import {styles} from '../assets/css/Styles';


export default function Login({ navigation }) {

    const [offset] = useState(new Animated.ValueXY({x: 0, y: 95}));
    const [opacity] = useState(new Animated.Value(0));

    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    const logar = () => {
        Alert.alert('PostEduc', 'Efetuando login...')
    }


    useEffect(() => {

        Animated.parallel([
            Animated.spring(offset.y, {
                toValue: 0,
                speed: 4,
                bounciness: 20,
                useNativeDriver: true
            }),
            Animated.timing(opacity, {
                toValue: 1,
                duration: 200,
                useNativeDriver: true
            })
        ]).start();
        
    }, []);

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
            <Animated.View 
            style={[
                styles.loginForm,
                {
                    opacity: opacity,
                    transform: [
                        {translateY: offset.y}
                    ]
                }
                ]}
            >
                <TextInput 
                    style={styles.loginInput} 
                    placeholder='Digite um usuário'
                    onChangeText={text=>setUsuario(text)}
                />
                <TextInput 
                    style={styles.loginInput} 
                    placeholder='Digite a senha' 
                    secureTextEntry={true}
                    onChangeText={text=>setSenha(text)}
                />
                <View style={styles.btn}>
                    <TouchableOpacity style={styles.loginBtn} onPress={() => logar(navigation.navigate('HomeEventos'))} >
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
            </Animated.View>
        </KeyboardAvoidingView>
    )
}