import React from "react";
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Alert  
} from "react-native"

/* Constant imports */
import { COLORS, SIZES, FONTS, icons, images } from "../constants"
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import bookMarks from "../constants/bookMarks"

const BookScreen = ({navigation}) => {

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
    
    const renderItem = ({item}) => {
        return (
            <TouchableOpacity
                style={{ padding: SIZES.padding, flexDirection: 'column' }}
                onPress={() => {
                    
                    Alert.alert("Added to bookmarks!", "You can follow your favourite books in bookmarks page.");
                    bookMarks.push({
                        id: item.id,
                        title: item.title
                    })
                }}
            >
                {/* Book row */}
                <View
                    style={{                        
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',                        
                    }}
                >   

                    {/* Book */}
                    <View
                        style={{                         
                            height: 60,
                            width: 60,
                            backgroundColor: COLORS.lightBlue,
                            borderRadius: 35,
                            marginBottom: SIZES.padding * 1.6, 
                            marginLeft: SIZES.padding,
                            flexDirection: 'column',
                            justifyContent: "center",
                            alignItems: "center"
                        }}                            
                    >     
                        <FontAwesome 
                            name="book" 
                            size={34}
                            style={{color: COLORS.gray}}
                        />                         
                    </View>
                    
                    
                    {/* Title and description column */}
                    <View style={{ flexDirection: 'column'}}>

                        {/* Title */}
                        <Text style={{ ...FONTS.h3, paddingHorizontal:SIZES.padding * 2, paddingBottom: SIZES.padding }}>
                            Book {item.id} - {item.title}
                        </Text>
                        
                        {/* Description */}
                        <View style={{ flexDirection: 'row', paddingBottom: SIZES.padding * 2}}>
                            <Text style={{ paddingLeft:SIZES.padding * 2}}>{item.description}</Text>
                            <Text style={{ }}>{item.description}</Text>
                            <Text style={{ }}>{item.description}</Text>    
                        </View>
                        
                    </View>
                </View>
                
                {/* Separator */}
                <View style={{ 
                        alignSelf: 'flex-start',
                        width: SIZES.width * 0.95,
                        borderBottomWidth: 1,
                        borderBottomColor: "#cccccc",
                        
                    }}>

                 </View>

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
                style={{                    
                    marginVertical: SIZES.padding * 1.1
                }}
            />
        </View>
    )
}

export default BookScreen;