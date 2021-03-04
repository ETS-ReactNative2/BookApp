import React from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,    
} from "react-native";
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import { COLORS, SIZES, FONTS, icons, images } from "../constants"
import { users } from "../constants"
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export function DrawerContent(props) {
    return (
        <View style={{ flex: 1}}>
            <DrawerContentScrollView>
                    {/* User header part */}
                    <View>
                        <View style={{flexDirection:'row', paddingLeft: SIZES.padding * 2}}>
                            {/* User image */}
                            <Image 
                                source={users.user2}
                                style={styles.drawerUserImgStyle}
                            />

                            {/* User name, Twitter */}
                            <View style={styles.drawerUserNameWrapperStyle}>
                                <Text style={styles.drawerUserNameStyle}>John Doe</Text>
                                <Text style={styles.drawerUserTwitterStyle}>@j_doe</Text>
                            </View>
                        </View>                        
                    </View>

                {/* Drawer Items */}
                <View style={styles.drawerItemsWrapperStyle}>

                    {/* Blog */}
                    <DrawerItem
                        icon={() => (
                            <FontAwesome 
                                name="rss" 
                                size={34}
                                style={{color: COLORS.blue}}
                            /> 
                        )}
                        label="Blog"
                        onPress={() => {props.navigation.navigate("Blog")}}
                        style={styles.drawerBlogItemStyle}
                    />

                    {/* Book */}
                    <DrawerItem
                        icon={() => (
                            <FontAwesome 
                                name="book" 
                                size={34}
                                style={{color: COLORS.blue}}
                            /> 
                        )}
                        label="Books"
                        onPress={() => {props.navigation.navigate("Book")}}
                        style={styles.drawerBookItemStyle}
                    />

                    {/* Chat */}
                    <DrawerItem
                        icon={() => (
                            <FontAwesome 
                                name="comments" 
                                size={34}
                                style={{color: COLORS.blue}}
                            /> 
                        )}
                        label="Messages"
                        onPress={() => {props.navigation.navigate("Messages")}}
                        
                    />
                </View>
            </DrawerContentScrollView>
        </View>
    )    
}


/* Drawer style elements */
const styles = StyleSheet.create({
    drawerUserImgStyle: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    drawerUserNameWrapperStyle: {
        marginLeft:SIZES.padding * 2, 
        flexDirection:'column', 
        paddingTop: SIZES.padding * 0.5
    },
    drawerUserNameStyle: {
        ...FONTS.h3
    },
    drawerUserTwitterStyle: {
        ...FONTS.body4, 
        color: COLORS.mediumGray        
    },
    drawerItemsWrapperStyle: {
        paddingLeft: SIZES.padding * 1.2, 
        paddingTop: SIZES.padding * 3
    },
    drawerBlogItemStyle: {
        paddingBottom: SIZES.padding, 
        paddingLeft: 5
    },
    drawerBookItemStyle: {
        paddingBottom: SIZES.padding
    }
})