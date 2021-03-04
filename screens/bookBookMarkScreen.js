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
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const BookMarkScreen = ({navigation}) => {

    const renderItem = ({item}) => {
        return (
            <View style={{ padding: SIZES.padding, flexDirection: 'column' }}>
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
                            backgroundColor: COLORS.green,
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
                        <Text style={{ ...FONTS.h3, paddingHorizontal:SIZES.padding * 2, paddingBottom: SIZES.padding * 1.5, color: COLORS.darkgray}}>
                            Book {item.id} - {item.title}
                        </Text>
                        
                       
                        
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
            </View>
        )
    }

    return (
        <View style={{flex: 1}}>
            <Text style={{paddingHorizontal:SIZES.padding * 1.5, paddingTop: SIZES.padding * 1.8, ...FONTS.h3, color: COLORS.darkgray}}>
                Your favourite bookmarks: 
            </Text>
            <FlatList
                data={bookMarks}
                renderItem={renderItem}
                keyExtractor={item => `${item.title}`}
                showsVerticalScrollIndicator={true}
                style={{                    
                    marginVertical: SIZES.padding * 1.1
                }}
            />
        </View>
    )
}

export default BookMarkScreen;