/* React imports */
import React from 'react';
import {
    TouchableOpacity,
    Text    
} from "react-native"

/* Redux import */
import { Provider as StoreProvider } from 'react-redux'
import store from '../reducer/store'

/* Navigation imports */
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderHeightContext } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/native';

/* Screen imports */
import BlogScreen from "../screens/blogScreen"
import BlogDetailsScreen from "../screens/blogDetailsScreen"
import BlogDetailsEditScreen from "../screens/blogDetailsEditScreen"
import BookScreen from "../screens/bookScreen"
import BookMarkScreen from "../screens/bookBookMarkScreen"
import ChatMessagesScreen from "../screens/chatMessagesScreen"
import ChatMessageBoardScreen from "../screens/chatMessageBoardScreen"
import LoginScreen from "../screens/loginScreen"
import { DrawerContent } from '../screens/drawerContent'

import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

/* Constant imports */
import { COLORS, SIZES, FONTS } from "../constants"
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

/* Appbar title handler */
function getHeaderTitle(route) {  
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Blog';

  switch (routeName) {
    case 'Blog':
      return 'Blog';
    case 'Book':
      return 'Books';
    case 'Messages':
      return 'Messages';
  }
}

/* Bookmark page naviagtion handler */
function getBookmarkNavigator(route, navigation) {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Blog';

    switch (routeName) {        
        case 'Book':
        return (
            <TouchableOpacity 
                style={{paddingLeft: SIZES.padding * 2}}
                onPress={() => navigation.navigate('BookMark')}
            >                            
                <FontAwesome 
                    name="bookmark" 
                    size={22}
                    style={{color: COLORS.white, paddingRight: SIZES.padding * 2}}
                />
            </TouchableOpacity>
        );        
    }
}

/* Drawer component */
const AppDrawer = () => {
    return (
        <Drawer.Navigator initialRouteName="Blog" drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen
                name="Blog"
                component={BlogScreen}
            />
            <Drawer.Screen 
                name="Book" 
                component={BookScreen}
            />
            <Drawer.Screen 
                name="Messages" 
                component={ChatMessagesScreen}
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
                    title: '',
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
                    headerRight: () => (
                        getBookmarkNavigator(route, navigation)
                    )
                  })}
            />

            <Stack.Screen 
                name="Details" 
                component={BlogDetailsScreen} 
                options={({ navigation }) => ({
                    title: "Blog Post",
                })}
            />

            <Stack.Screen 
                name="EditDetails" 
                component={BlogDetailsEditScreen} 
                options={{
                    title: "Edit Post",
                }}
            />

            <Stack.Screen 
                name="BookMark" 
                component={BookMarkScreen} 
                options={{
                    title: "Bookmarks",
                }}
            />

            <Stack.Screen 
                name="MessageBoard" 
                component={ChatMessageBoardScreen} 
                options={({route}) => ({
                    title: route.params.userName,
                    headerBackTitleVisible: false
                })}
            />
        </Stack.Navigator>
    )
}

/* Navigation Container */
function Navigation({navigation}){
    return (
        <StoreProvider store = {store}>
            <NavigationContainer>
                <AppStack/>
            </NavigationContainer>
        </StoreProvider>
    )
}

export default Navigation;
