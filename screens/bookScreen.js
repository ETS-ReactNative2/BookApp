import React from "react";
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Alert,
    StyleSheet
} from "react-native"

/* Constant imports */
import { COLORS, SIZES, FONTS, icons, images } from "../constants"
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import bookMarks from "../constants/bookMarks"

const BookScreen = () => {

    /* Hooks */    
    const [books, setBooks] = React.useState([])

    React.useEffect(() => {
        fetch("https://mockend.com/Csutkas/BookApp/posts")
            .then(response => response.json())
            .then(data => {
                let bookData = data.map(item => {
                    return {
                        id: item.id,
                        title: item.title,
                        description: item.description,
                        published: item.published
                    }                
                })
                setBooks(bookData)                
            })
    }, [])
        
    function addBookMark (bookMark) {
        
        /* Check book key in the bookMarks array */        
        if (bookMarks.hasOwnProperty(bookMark.id)) {            
            Alert.alert("Book match.","Book is already in Bookmark!");            
        } else {
            bookMarks.push({
                id: bookMark.id,
                title: bookMark.title
            })
            Alert.alert("Added to bookmarks!", "You can follow your favourite books in bookmarks page.");
        }          
    }

    const renderItem = ({item}) => {
        return (
            <TouchableOpacity
                style={styles.bookScreenBookTouchableStyle}
                onPress={() => {                                        
                    addBookMark(item)                    
                }}
            >
                {/* Book row */}
                <View style={styles.bookScreenBookRowStyle}>   
                    {/* Book */}
                    <View style={styles.bookScreenBookIconWrapperStyle}>
                        <FontAwesome 
                            name="book" 
                            size={34}
                            style={{color: COLORS.blue}}
                        />                         
                    </View>
                                        
                    {/* Title and description column */}
                    <View>
                        {/* Title */}
                        <Text style={styles.bookScreenBookTitleStyle}>
                            Book {item.id} - {item.title}
                        </Text>
                        
                        {/* Description */}
                        <View style={styles.bookScreenBookDescriptionWrapperStyle}>
                            <Text style={styles.bookScreenBookDescriptionTextStyle}>{item.description}</Text>
                            <Text style={styles.bookScreenBookDescriptionTextStyle}>{item.description}</Text>
                            <Text style={styles.bookScreenBookDescriptionTextStyle}>{item.description}</Text>
                        </View>                        
                    </View>
                </View>
                
                {/* Separator */}
                <View style={styles.bookScreenBookRowSeparatorStyle}/>
                 
            </TouchableOpacity>
        )
    }

    return (
        <View style={{flex: 1}}>           
            <FlatList
                data={books}
                renderItem={renderItem}
                keyExtractor={item => `${item.id}`}
                showsVerticalScrollIndicator={true}
                style={styles.bookScreenBookListStyle}
            />
        </View>
    )
}

/* Book screen style elements */
const styles = StyleSheet.create({
    bookScreenBookTouchableStyle: {
        padding: SIZES.padding, 
        flexDirection: 'column'
    },
    bookScreenBookRowStyle: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    bookScreenBookIconWrapperStyle: {
        height: 60,
        width: 60,
        backgroundColor: COLORS.lightBlue,
        borderRadius: 35,
        marginBottom: SIZES.padding * 1.6, 
        marginLeft: SIZES.padding,
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center"
    },
    bookScreenBookTitleStyle: {
        ...FONTS.h3, 
        paddingHorizontal:SIZES.padding * 2, 
        paddingBottom: SIZES.padding, 
        paddingTop: SIZES.padding * 0.5
    },
    bookScreenBookDescriptionWrapperStyle: {
        flexDirection: 'row', 
        paddingBottom: SIZES.padding * 2,
        paddingLeft:SIZES.padding * 2
    },
    bookScreenBookDescriptionTextStyle: {
        color: COLORS.gray,   
    },
    bookScreenBookRowSeparatorStyle: {
        alignSelf: 'flex-start',
        width: SIZES.width * 0.95,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.lightGray,
    },
    bookScreenBookListStyle: {
        marginVertical: SIZES.padding * 1.1
    }
})

export default BookScreen;