import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TelaInicial from './componentes/TelaInicial';
import TelaPerfil from './componentes/TelaPerfil';

const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    
      <NavigationContainer>
        <StatusBar style="auto" />
          <Tabs.Navigator>
            <Tabs.Screen name="Inicio" component={TelaInicial} />
            <Tabs.Screen name="Empresa" component={TelaPerfil} /> 
            <Tabs.Screen name="Solicitar Serviços" component={TelaPerfil} />
            <Tabs.Screen name="Contatos" component={TelaPerfil} />
          </Tabs.Navigator>

      </NavigationContainer>
     
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
