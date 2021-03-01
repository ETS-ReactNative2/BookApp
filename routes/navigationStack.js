import React from 'react';
import {
    TouchableOpacity,
    Text    
} from "react-native"

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderHeightContext } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/native';

import BlogScreen from "../screens/blogScreen"
import BlogDetailsScreen from "../screens/blogDetailsScreen"
import BlogDetailsEditScreen from "../screens/blogDetailsEditScreen"
import BookScreen from "../screens/bookScreen"
import ChatScreen from "../screens/chatScreen"
import LoginScreen from "../screens/loginScreen"

import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import { COLORS, SIZES, FONTS } from "../constants"
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

/* Appbar title handler */
function getHeaderTitle(route) {  
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';

  switch (routeName) {
    case 'Blog':
      return 'Blog';
    case 'Book':
      return 'Book';
    case 'Chat':
      return 'Chat';
  }
}

/* Drawer component */
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

/* Stack component */
const AppStack = () => {
    return (
        <Stack.Navigator 
            initialRouteName="Login"
            screenOptions={{
                headerStyle: {
                    backgroundColor: COLORS.blue
                },
                headerTintColor: COLORS.white,
                headerTitleStyle: {
                    fontSize: SIZES.h4
                }
            }}            
        >
            <Stack.Screen 
                name="Login" 
                component={LoginScreen}
                options={{ title: 'Login'}}                
            />

            <Stack.Screen 
                name="Drawer" 
                component={AppDrawer}
                options={({ route, navigation }) => ({
                    title: 'Blog',
                    headerTitle: getHeaderTitle(route),    
                    headerLeft: () => (
                        <TouchableOpacity 
                            style={{paddingLeft: SIZES.padding * 2}}
                            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
                            >                            
                            <FontAwesome 
                                name="bars" 
                                size={22}
                                style={{color: COLORS.white}}
                                />
                         </TouchableOpacity>                        
                    ),
                  })}
            />
            
            <Stack.Screen 
                name="Details" 
                component={BlogDetailsScreen} 
                options={({ navigation }) => ({
                    title: "Blog Post",
                    headerRight: () => (
                        <TouchableOpacity 
                            style={{paddingRight: SIZES.padding * 2}}
                            onPress={() => navigation.navigate('EditDetails', {
                                itemEdit: BlogDetailsScreen.item,
                            })}
                            >                            
                            <Text style={{ fontSize: SIZES.h4, color: COLORS.white }}>Edit</Text>
                         </TouchableOpacity>                        
                    ),
                })}
            />

            <Stack.Screen 
                name="EditDetails" 
                component={BlogDetailsEditScreen} 
                options={{
                    title: "Edit Post",                    
                }}
            />
        </Stack.Navigator>
    )
}

/* Navigation Container */
function Navigation({navigation}){
    return (
        <NavigationContainer>
            <AppStack/>
        </NavigationContainer>
    )
}

export default Navigation;
