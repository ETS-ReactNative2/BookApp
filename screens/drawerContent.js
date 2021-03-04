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
                
                    <View>
                        <View style={{flexDirection:'row', paddingLeft: SIZES.padding * 2}}>
                            <Image 
                                source={users.user2}
                                style={{
                                    width: 50,
                                    height: 50,
                                    borderRadius: 50,

                                }}
                            />
                            <View style={{marginLeft:SIZES.padding * 2, flexDirection:'column', paddingTop: SIZES.padding * 0.5}}>
                                <Text style={{...FONTS.h3}}>John Doe</Text>
                                <Text style={{...FONTS.body4, color: COLORS.mediumGray}}>@j_doe</Text>
                            </View>
                        </View>                        
                    </View>
               
                <View style={{ paddingLeft: SIZES.padding * 1.2, paddingTop: SIZES.padding * 3}}>
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
                    />
                    <DrawerItem
                        icon={() => (
                            <FontAwesome 
                                name="book" 
                                size={34}
                                style={{color: COLORS.blue}}
                            /> 
                        )}
                        label="Book"
                        onPress={() => {props.navigation.navigate("Book")}}
                    />
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