import React from "react";
import {
    View,
    Text,
    TouchableOpacity,    
    StyleSheet,
    FlatList,
    Image 
} from "react-native"

/* Constant imports */
import { COLORS, SIZES } from "../constants"
import chatMessages from "../constants/chatData"

const ChatMessagesScreen = ({navigation}) => {
       
    return (
        <View style={styles.chatScreenContainerStyle}>                   
            <FlatList                
                data={chatMessages}
                keyExtractor={item=>item.id}                
                renderItem={({item}) => (
                    <TouchableOpacity 
                        style={styles.chatScreenCardStyle}
                        onPress={() => navigation.navigate('MessageBoard', {userName: item.userName})}
                    >
                        {/* Message row */}
                        <View style={styles.chatScreenUserInfoStyle}>
                            {/* User Image Wrapper */}
                            <View style={styles.chatScreenUserImgWrapperStyle}>
                                <Image 
                                    source={item.userImg}
                                    style={styles.chatScreenUserImgStyle}
                                />
                            </View>

                            {/* Text Content Area */}
                            <View style={styles.chatScreenTextSectionStyle}>
                                {/* User */}
                                <View style={styles.chatScreenUserInfoStyle}>
                                    <Text style={styles.chatScreenUserNameStyle}>{item.userName}</Text>
                                    <Text style={styles.chatScreenPostTimeStyle}>{item.messageTime}</Text>
                                </View>

                                {/* Message */}
                                <Text style={styles.chatScreenChatMessageStyle}>{item.messageText}</Text>
                            </View>
                            
                        </View>
                        
                    </TouchableOpacity>
                )}
            />
            
            

            <TouchableOpacity
                onPress={() => navigation.navigate('MessageBoard')}
            >
                <Text>Click here</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ChatMessagesScreen;

const styles = StyleSheet.create({
    chatScreenContainerStyle: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: 'center',
        backgroundColor: COLORS.white
    },
    chatScreenCardStyle: {
        width: '100%',
    },
    chatScreenUserInfoStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    chatScreenUserImgWrapperStyle: {
        paddingVertical: 15,
    },
    chatScreenUserImgStyle: {
        width: 50,
        height: 50,
        borderRadius: 50
    },
    chatScreenTextSectionStyle: {
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 15,
        paddingLeft: 0,
        marginLeft: 10,
        width: 300,
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc",
    },
    chatScreenUserInfoStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    chatScreenUserNameStyle: {
        fontSize: SIZES.h4,
        fontWeight: 'bold',
        color: COLORS.mediumGray,
    },
    chatScreenPostTimeStyle: {
        fontSize: SIZES.body4,
        color: COLORS.gray
    },
    chatScreenChatMessageStyle: {
        fontSize: SIZES.body3,
        color: COLORS.mediumLightGray,
    }
  });