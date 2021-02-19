import React from 'react';
import {Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Feather } from '@expo/vector-icons';

import { styles } from './assets/css/Styles';

import {HomeEventos, Login, DetalheEventos, CadastroLogin} from './views';


export default function Routes() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName="Login" 
      screenOptions={{
        gestureEnabled: true, 
        gestureDirection: 'horizontal'
      }}
      >
        <Stack.Screen 
          name="HomeEventos" 
          component={HomeEventos}
          options={({ navigation }) => ({
            title: "PostEduc - Eventos",
            headerStyle: {
              backgroundColor: '#504456',
            },
            headerRight: () => (
                <TouchableOpacity 
                    style={{marginRight: 10}}
                    onPress={() => navigation.navigate('Login')}
                >
                    <Feather 
                        name="log-in"
                        size={24}
                        color="#fff"
                    />
                </TouchableOpacity>
            ),
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center'
          })} 
        />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false}} />
        <Stack.Screen 
          name="DetalheEventos" 
          component={DetalheEventos}
          options={({ navigation }) => ({
            title: "Info Eventos",
            headerStyle: {
              backgroundColor: '#504456',
            },
            headerRight: () => (
                <TouchableOpacity 
                    style={{marginRight: 10}}
                    onPress={() => navigation.navigate('Login')}
                >
                    <Feather 
                        name="log-in"
                        size={24}
                        color="#fff"
                    />
                </TouchableOpacity>
            ),
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center'
          })}
          />
        <Stack.Screen name="CadastroLogin" component={CadastroLogin} options={{ headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}