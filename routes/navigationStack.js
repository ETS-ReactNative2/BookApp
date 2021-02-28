import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


import BlogScreen from "../screens/blogScreen"
import BlogDetailsScreen from "../screens/blogDetailsScreen"
import BookScreen from "../screens/bookScreen"
import ChatScreen from "../screens/chatScreen"
import LoginScreen from "../screens/loginScreen"

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const AppDrawer = () => {
    return (
        <Drawer.Navigator initialRouteName="Blog">
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
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Drawer" component={AppDrawer} />
            
            <Stack.Screen name="Details" component={BlogDetailsScreen} />
        </Stack.Navigator>
    )
}

function Navigation(){
    return (
        <NavigationContainer>
            <AppStack/>
        </NavigationContainer>
    )
}

export default Navigation;
