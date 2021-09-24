import React, { useState } from 'react'
import { View, StyleSheet, ImageBackground, ScrollView, ToastAndroid, Alert } from 'react-native'

import { Text, Button, RadioButton, TextInput } from 'react-native-paper'

import validator from 'validator'

const urlImagenFondo = 'https://www.teahub.io/photos/full/3-32607_iphone-wallpaper-black-cat.jpg';

export const Registro = () => {


    const [datos, setDatos] = useState({
        nombres: '',
        telefono: '',
        email: '',
        genero: '',
        estadoCivil: '',

    });

    return (
        <View style={styles.container}>

            <ImageBackground style={styles.fondo} source={{ uri: urlImagenFondo }}>

                <View style={styles.contenedorFormulario}>

                    <ScrollView>


                        <Text style={styles.label}>Nombre y Apelllido</Text>
                        <TextInput style={styles.textInput} placeholder="Luis Ramirez" onChangeText={(value) => setDatos({ ...datos, nombres: value })} />

                        <Text style={styles.label}>Telefono</Text>
                        <TextInput style={styles.textInput} placeholder="78454545" onChangeText={(value) => setDatos({ ...datos, telefono: value })} />


                        <Text style={styles.label}>Genero</Text>

                        <View style={styles.radioContainer}>
                            <RadioButton.Group onValueChange={generoSeleccionado => setDatos({ ...datos, genero: generoSeleccionado })} value={datos.genero}>
                                <View>
                                    <Text>Masculino</Text>
                                    <RadioButton value="Masculino" />
                                </View>
                                <View>
                                    <Text>Femenino</Text>
                                    <RadioButton value="Femenino" />
                                </View>
                            </RadioButton.Group>
                        </View>


                        <Text style={styles.label}>Estado Civil</Text>
                        <View style={styles.radioContainer}>

                            <RadioButton.Group onValueChange={estadoSeleccionado => setDatos({ ...datos, estadoCivil: estadoSeleccionado })} value={datos.estadoCivil}>
                                <View>
                                    <Text>Soltero</Text>
                                    <RadioButton value="M" />
                                </View>
                                <View>
                                    <Text>Casado</Text>
                                    <RadioButton value="F" />
                                </View>
                            </RadioButton.Group>

                        </View>

                        <Text style={styles.label}>Correo</Text>
                        <TextInput style={styles.textInput} placeholder="luisr@gmail.com" onChangeText={(value) => setDatos({ ...datos, email: value })} />


                        <Button mode="contained" onPress={() => Registrar(datos)}>Registrar</Button>


                    </ScrollView>

                </View>


            </ImageBackground>

        </View>
    )
}

const Registrar = (datos: any) => {

    if (validator.isEmpty(datos.nombres)
        || validator.isEmpty(datos.telefono)
        || validator.isEmpty(datos.email)) {


        Alert.alert(
            "Validacion",
            "Todos los campos son obligatorios",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
        );

    }
    else {

        Alert.alert(
            "Registro",
            datos.nombres + " - " + datos.genero,
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
        );

    }


}



const styles = StyleSheet.create({

    container: {
        flex: 1,


    },
    fondo: {
        flex: 1,
    },

    textInput: {

        marginVertical: 10

    },

    label: {

        fontSize: 18,
        color: 'white'

    },

    contenedorFormulario: {
        marginVertical: 50,
        marginHorizontal: 20

    },

    radioContainer: {

        flex: 1,
        alignItems: 'center',
        alignContent: 'center',
        flexDirection: 'row'
    }





})