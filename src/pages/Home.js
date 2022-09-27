import React, {useState, useEffect} from "react";

import { 
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    FlatList
    }from 'react-native';

export default function Home(){

    let [novoFilme, setNovoFilme] = useState({});

    function adicionarNovoFilme () {
        //Criando o objeto data para pegar os dados do filme
        const data = {
            id: String (new Date().getTime()),
            nome: novoFilme
        }

        //Adicionando o novo filme na lista de filme
        setLista (oldState => [...oldState, data]);
    }



    let [saudacao, setSaudacao] = useState();

    useEffect (() => {

        let horaAtual = new Date().getHours();
        console.log(horaAtual);

        if (horaAtual < 12) {
            setSaudacao('Bom Dia');
        }

        else if (horaAtual >= 12 && horaAtual <18) {
            setSaudacao ('Boa Tarde');
        }

        else {
            setSaudacao('Boa Noite');
        }

    }, []);

    // 1 parte da aula - Criando o array de filmes e listando

    let [listaFilmes, setLista] = useState ([

        {
            'id' : 1, 
            'nome' : 'Carros'
        },

        {
            'id' : 2,
            'nome' : 'Hot Whells Acelleracers'
        },

        {
            'id' : 3,
            'nome' : 'Homem-Aranha'
        },

        {
            'id' : 4,
            'nome' : 'Histórias Cruzadas'
        },

        {
            'id' : 5,
            'nome' : 'Jango'
        }

    ]);

    return(

        <View style = {styles.container}>

            <Text style = {styles.titulo}>Meu Filmes</Text>
            <Text style = {styles.subtitulo}>Olá Tavin, {saudacao}</Text>

            <TextInput
                onChangeText={setNovoFilme}
                style={styles.campo}
                placeholder = "Nome do Filme"
            />

            <TouchableOpacity style = {styles.button} onPress={adicionarNovoFilme}>
                <Text style = {styles.buttonText}>Adicionar</Text>
            </TouchableOpacity>

            <FlatList
                data = {listaFilmes}
                keyExtractor = {item => item.id}
                renderItem = {({ item }) =>  (
                    <TouchableOpacity style={styles.buttonFilme}>
                        <Text style={styles.TextFilme}>{item.nome}</Text>
                    </TouchableOpacity>
                )}
            />

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
        marginBottom: 15
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
    },
    
    buttonFilme:{
        backgroundColor: '#1F1E25',
        padding: 15,
        borderRadius: 50,
        alignItems: 'center',
        marginVertical: 10
    },

    TextFilme:{
        color: '#FFF',
        fontSize: 22,
        fontWeight: 'bold'
    },

}); //Fim dos Estilos
