import React from "react";
import {
    View,
    Text,       
} from "react-native"

import { COLORS, SIZES, FONTS, icons, images } from "../constants"

const BookScreen = ({navigation}) => {

    const bookPostData = [
        {
            id: 1,
            img: images.book1,
            title: "Roger Federer - Egy zseni élete",
            description: "Roger Federer a tenisz történetének valaha élt legnagyobb játékosa. 20 Grand Slam-cím tulajdonosa..."
        },
        {
            id: 2,
            img: images.book2,
            title: "Kobe Bryant - A Fekete Mamba élete",
            description: "Ikon volt. Világsztár. Családapa. Kobe Bryant, minden idők egyik legnagyszerűbb..."
        },
        {
            id: 3,
            img: images.book3,
            title: "A sakkjáték elemei",
            description: "A sakk kedvelői és szakértői bizonyára örömmel nyugtázzák, hogy újra kapható a szakírópáros nagy..."
        },
        {
            id: 4,
            img: images.book4,
            title: "Az isteni Diego Maradona",
            description: "Ha meghalok és újjászületek, ismét focista és Diego Armando Maradona akarok lenni. Olyan..."
        },
    ]

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text                
            >Book screen</Text>
        </View>
    )
}

export default BookScreen;