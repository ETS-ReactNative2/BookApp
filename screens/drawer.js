import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Container, Header, Content, Icon } from 'native-base';

import BlogScreen from "./screens/blogScreen"
import BlogDetailsScreen from "./screens/blogDetailsScreen"
import BookScreen from "./screens/bookScreen"
import ChatScreen from "./screens/chatScreen"

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const AppDrawer = () => {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen
                name="Blog"
                component={BlogScreen}
            />
            <Drawer.Screen 
                name="Book" 
                component={BookScreen} 
            />
            <Drawer.Screen 
                name="Chat" 
                component={ChatScreen} 
            />
        </Drawer.Navigator>
    )
}

const AppStack = () => {
    return (
        <Stack.Navigator initialRouteName="Blog">
            <Stack.Screen name="Drawer" component={AppDrawer} />
            
            <Stack.Screen name="Details" component={BlogDetailsScreen} />
        </Stack.Navigator>
    )
}

function DrawerScreen(){
    return (
        <NavigationContainer>
            <AppStack/>
        </NavigationContainer>
    )
}

export default DrawerScreen;
