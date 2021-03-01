import React from "react";
import {
    View,
    Text,
    TextInput,
    Image,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    ScrollView    
} from "react-native"

import { COLORS, SIZES, FONTS, icons, images } from "../constants"

const LoginScreen = ({navigation}) => {

    const [showPassword, setShowPassword] = React.useState(false)

    function renderLogo() {
        return (
            <View
                style={{
                    marginTop: SIZES.padding * 15,
                    height: 100,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Image
                    source={images.logo}
                    resizeMode="contain"
                    style={{
                        width: "60%"
                    }}
                />

            </View>
        )
    }

    function renderForm() {
        return (
            <View
                style={{
                    marginTop: SIZES.padding * 3,
                    marginHorizontal: SIZES.padding * 3 
                }}
            >
                {/* Username */}
                <View style={{ marginTop: SIZES.padding * 10}}>
                    <Text style={{ color: COLORS.darkgray, ...FONTS.body3 }}>Username</Text>
                    <TextInput
                        style={{
                            marginVertical: SIZES.padding,
                            borderBottomColor: COLORS.darkgray,
                            borderBottomWidth: 1,
                            height: 40,
                            color: COLORS.mediumGray,
                            ...FONTS.body3
                        }}
                        placeholder="Enter Username"
                        placeholderTextColor={COLORS.mediumGray}
                        selectionColor={COLORS.mediumGray}
                    />                
                </View>

                {/* Password */}
                <View style={{ marginTop: SIZES.padding * 3}}>
                    <Text style={{ color: COLORS.darkgray, ...FONTS.body3, }}>Password</Text>
                    <TextInput
                        style={{                                    
                            marginVertical: SIZES.padding,
                            borderBottomColor: COLORS.darkgray,
                            borderBottomWidth: 1,
                            height: 40,
                            color: COLORS.mediumGray,
                            ...FONTS.body3,
                        }}
                        placeholder="Enter Password"
                        placeholderTextColor={COLORS.mediumGray}
                        selectionColor={COLORS.mediumGray}                            
                        secureTextEntry={!showPassword}
                    />

                    <TouchableOpacity
                        style={{ 
                            position: 'absolute',
                            right: 0,
                            bottom: 10,
                            height: 30,
                            width: 30,
                        }}
                        onPress={() => setShowPassword(!showPassword)}
                    >
                        <Image
                            source={showPassword ? icons.disable_eye : icons.eye}
                            style={{
                                height: 20,
                                width: 20,
                                tintColor: COLORS.darkgray
                            }}
                        />

                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    function renderButton() {
        return (
            <View style={{ margin: SIZES.padding * 3 }}>
                <TouchableOpacity
                    style={{
                        height: 55,
                        backgroundColor: COLORS.blue,
                        borderRadius: SIZES.radius / 5,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    onPress={() => navigation.navigate("Drawer")}
                >
                    <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Login</Text>

                </TouchableOpacity>
            </View>
        )
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : null}
            style={{ flex: 1, backgroundColor: COLORS.smokeWhite }}
        >                           
            <ScrollView>
                {renderLogo()}
                {renderForm()}
                {renderButton()}
            </ScrollView>        
        </KeyboardAvoidingView>
    )
}


export default LoginScreen;