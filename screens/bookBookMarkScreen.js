import React from "react";
import {
    View,
    Text,
    FlatList,
    TouchableOpacity     
} from "react-native"

/* Constant imports */
import { COLORS, SIZES, FONTS, icons, images } from "../constants"
import bookMarks from "../constants/bookMarks"

const BookMarkScreen = ({navigation}) => {

    const renderItem = ({item}) => {
        return (
            <View>
                <Text>Book {item.id} - {item.title}</Text>
            </View>
        )
    }

    return (
        <View style={{flex: 1}}>
            <Text>
                Bookmarks: 
            </Text>
            <FlatList
                data={bookMarks}
                renderItem={renderItem}
                keyExtractor={item => `${item.id}`}
                showsVerticalScrollIndicator={true}
                style={{                    
                    marginVertical: SIZES.padding * 1.1
                }}
            />
        </View>
    )
}

export default BookMarkScreen;