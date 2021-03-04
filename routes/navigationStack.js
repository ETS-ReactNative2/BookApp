/* React imports */
import React from 'react';
import {
    TouchableOpacity,    
} from "react-native"

/* Redux import */
import { Provider as StoreProvider } from 'react-redux'
import store from '../reducer/store'

/* Navigation imports */
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/native';

/* Screen imports */
import BlogScreen from "../screens/blogScreen"
import BlogDetailsScreen from "../screens/blogDetailsScreen"
import BlogDetailsEditScreen from "../screens/blogDetailsEditScreen"
import BookScreen from "../screens/bookScreen"
import BookMarkScreen from "../screens/bookMarkScreen"
import ChatMessagesScreen from "../screens/chatMessagesScreen"
import ChatMessageBoardScreen from "../screens/chatMessageBoardScreen"
import LoginScreen from "../screens/loginScreen"
import { DrawerContent } from '../screens/drawerContent'

import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

/* Constant imports */
import { COLORS, SIZES } from "../constants"
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
                    style={{color: COLORS.turquoise, paddingRight: SIZES.padding * 2}}
                />
            </TouchableOpacity>
        );        
    }
}

/* Drawer component */
const AppDrawer = () => {
    return (
        <Drawer.Navigator initialRouteName="Blog" drawerContent={props => <DrawerContent {...props} />}>
            {/* Blog drawer item */}
            <Drawer.Screen
                name="Blog"
                component={BlogScreen}
            />

            {/* Book drawer item */}
            <Drawer.Screen 
                name="Book" 
                component={BookScreen}
            />

            {/* Messages drawer item */}
            <Drawer.Screen 
                name="Messages" 
                component={ChatMessagesScreen}
            />
        </Drawer.Navigator>
    )
}

/* Stack navigator */
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
            {/* Login stack */}
            <Stack.Screen 
                name="Login"
                component={LoginScreen}
                options={{ title: 'Login'}}
            />

            {/* Drawer stack inside the stack navigator */}
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
            
            {/* Blog details stack */}
            <Stack.Screen 
                name="Details" 
                component={BlogDetailsScreen} 
                options={({ navigation }) => ({
                    title: "Blog Post",
                })}
            />

            {/* Blog details edit stack */}
            <Stack.Screen 
                name="EditDetails" 
                component={BlogDetailsEditScreen} 
                options={{
                    title: "Edit Post",
                }}
            />

            {/* Bookmarks stack */}
            <Stack.Screen 
                name="BookMark" 
                component={BookMarkScreen} 
                options={{
                    title: "Bookmarks",
                }}
            />

            {/* Chat message stack */}
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
