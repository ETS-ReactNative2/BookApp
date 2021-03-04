import React from "react";
import {
    View,
    Text,
    FlatList,
    StyleSheet
} from "react-native"

/* Constant imports */
import { COLORS, SIZES, FONTS } from "../constants"
import bookMarks from "../constants/bookMarks"
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const BookMarkScreen = () => {

    const renderItem = ({item}) => {
        return (
            <View style={{ padding: SIZES.padding, flexDirection: 'column' }}>
                {/* Book row */}
                <View style={styles.bookMarkScreenBookRowViewStyle}>
                    {/* Book */}
                    <View style={styles.bookMarkScreenBookIconWrapperStyle}>     
                        <FontAwesome 
                            name="book" 
                            size={34}
                            style={{color: COLORS.gray}}
                        />                         
                    </View>
                    
                    {/* Title and description column */}
                    <View>
                        {/* Title */}
                        <Text style={styles.bookMarkScreenBookTitleStyle}>
                            Book {item.id} - {item.title}
                        </Text> 
                    </View>
                </View>
                
                {/* Separator */}
                <View style={styles.bookMarkScreenBookRowSeparatorStyle}/>
            </View>
        )
    }

    return (
        <View style={{flex: 1}}>
            <Text style={styles.bookMarkScreenHeaderTextStyle}>
                Your favourite bookmarks: 
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

/* Bookmark screen style elements */
const styles = StyleSheet.create({
    bookMarkScreenBookRowViewStyle: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center', 
    },
    bookMarkScreenBookIconWrapperStyle: {
        height: 60,
        width: 60,
        backgroundColor: COLORS.turquoise,
        borderRadius: 35,
        marginBottom: SIZES.padding * 1.6, 
        marginLeft: SIZES.padding,
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center"
    },
    bookMarkScreenBookTitleStyle: {
        ...FONTS.h3, 
        paddingHorizontal:SIZES.padding * 2, 
        paddingBottom: SIZES.padding * 1.5, 
        color: COLORS.darkgray
    },
    bookMarkScreenBookRowSeparatorStyle: {
        alignSelf: 'flex-start',
        width: SIZES.width * 0.95,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.lightGray,
    },
    bookMarkScreenHeaderTextStyle: {
        paddingLeft: SIZES.padding * 2, 
        paddingTop: SIZES.padding * 2.5, 
        paddingBottom: SIZES.padding * 0.8, 
        ...FONTS.h3, 
        color: COLORS.darkgray
    }
})

export default BookMarkScreen;