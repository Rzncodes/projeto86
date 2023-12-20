import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Desafio 04: Importação das telas 
import HomeScreen from "./screens/Home";
import MeteorScreen from "./screens/Meteors";
import UpdateScreen from "./screens/Updates";
import IssLocationScreen from "./screens/IssLocation";


//Desafio 05: Criação da função createStackNavigator dentro de uma constante: Stack
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = 'Home' screenOptions = {{headerShown:false}}>
        <Stack.Screen name = "Home" component={HomeScreen}/>
        <Stack.Screen name = "Meteors" component={MeteorScreen}/>
        <Stack.Screen name = "Updates" component={UpdateScreen}/>
        <Stack.Screen name = "IssLocation" component={IssLocationScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
