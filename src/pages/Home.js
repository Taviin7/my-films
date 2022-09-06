import React, {useState} from "react";

import { 
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    FlatList
    }from 'react-native';

export default function Home(){

    


    return(

        <View style = {styles.container}>
            <Text style = {styles.titulo}>My Films Favorites</Text>
            <Text style = {styles.subtitulo}>Olá Tavin, Boa Noite</Text>

        <TextInput
        style={styles.campo}
        placeholder = "Nome do Filme"
        />

        <TouchableOpacity style = {styles.button}>
            <Text style = {styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>

        </View>
    );
}

//Criando os etilos do layout
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#483D8B',
        paddingVertical: 70,
        paddingHorizontal: 20
    },

    titulo:{
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#FFDAB9'
        
    },

    subtitulo:{
        color:'#FFF',
        fontSize: 15
    },

    campo:{
        backgroundColor: '#1F1E25',
        color: '#FFF',
        fontSize: 18,
        marginTop: 30,
        borderRadius: 7,
        padding: 15,
        marginBottom: 5
    },

    greeting:{
        color: '#FFF'
    },

    button:{
        backgroundColor: '#A370F7',
        padding: 15,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 'bold'
    },

    buttonText:{
        color: '#FFF',
        fontSize: 17,
        fontWeight: 'bold'
    }

}); //Fim dos Estilos
