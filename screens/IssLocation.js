//Desafio 01: Criação da tela: Estação Espacial Internacional 
import React, {Component} from "react";
import {Text, View} from "react-native";

export default class IssLocationScreen extends Component{
    render(){
        return(
            <View style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Text>Tela de Localização</Text>
            </View>
        )
    }
}