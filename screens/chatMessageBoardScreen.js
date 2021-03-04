import React, {useState, useEffect, useCallback} from "react";
import {
    View,    
    StyleSheet,       
} from "react-native"

import { GiftedChat, Bubble, Send } from 'react-native-gifted-chat'

/* Constant imports */
import { COLORS, SIZES } from "../constants"
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const ChatMessageBoardScreen = () => {
    const [messages, setMessages] = useState([]);

    /* Default messages */
    useEffect(() => {
        setMessages([
        {
            _id: 1,
            text: 'Hello developer',
            createdAt: new Date(),
            user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
            },
        },
        {
            _id: 2,
            text: 'Hello world',
            createdAt: new Date(),
            user: {
            _id: 1,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
            },
        },
        ])
    }, [])

    /* Send function */
    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])

    /* Message bubles layout */
    const renderBubble = (props) => {
        return (
            <Bubble
                {...props}
                wrapperStyle={{
                    left: {
                        backgroundColor: COLORS.lightGray,                        
                    },
                    right: {
                        backgroundColor: COLORS.blue
                    }
                }}
                textStyle={{
                    right: {
                        color: COLORS.white
                    }            
                }}
            />
        )
    }

    /* Send button layout */
    const renderSend = (props) => {
        return (
            <Send {...props}> 
                <View style={styles.chatMessageScreenSendIconViewStyle}>
                
                    <FontAwesome 
                        name="paper-plane" 
                        size={22}
                        style={{color: COLORS.blue}}
                    />                
                </View>
            </Send>
        )
    }

    /* Scroll icon layout */
    const renderScrollToBottomComponent = () => {
        return (            
            <FontAwesome
                name="angle-double-down"
                size={22}
                color="#333"
            />            
        )
    }

    return (
        <GiftedChat
            messages={messages}
            onSend={messages => onSend(messages)}
            user={{
            _id: 1,
            }}
            renderBubble={renderBubble}
            alwaysShowSend
            renderSend={renderSend}
            scrollToBottom
            scrollToBottomComponent={renderScrollToBottomComponent}
        />
    )
}

export default ChatMessageBoardScreen;

/* Chat message component styles */
const styles = StyleSheet.create({
    chatMessageScreenSendIconViewStyle: {
        padding: SIZES.padding,
        marginRight: SIZES.padding
    }, 
});
