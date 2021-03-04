import React from "react";
import {
    View,
    Text,
    TextInput,
    Image,
    TouchableOpacity,    
    ScrollView,
    StyleSheet    
} from "react-native"

import { COLORS, SIZES, FONTS, icons, images } from "../constants"

const LoginScreen = ({navigation}) => {

    /* Hooks */
    const [showPassword, setShowPassword] = React.useState(false)

    /* Logo component */
    function renderLogo() {
        return (
            <View style={styles.loginScreenLogoViewStyle}>
                <Image
                    source={images.logo}
                    resizeMode="contain"
                    style={styles.logoScreenLogoImageStyle}
                />
            </View>
        )
    }

    /* Name and password form component */
    function renderForm() {
        return (
            <View style={styles.loginScreenFormViewStyle}>

                {/* Username */}
                <View>
                    <Text style={styles.loginScreenFormUsernameTextStyle}>
                        Username
                    </Text>
                    <TextInput
                        style={styles.loginScreenFormUsernameTextInputStyle}                        
                        placeholder="Enter Username"
                        placeholderTextColor={COLORS.mediumGray}
                        selectionColor={COLORS.mediumGray}
                    />                
                </View>

                {/* Password */}
                <View style={styles.loginScreenFormPasswordViewStyle}>
                    <Text style={styles.loginScreenFormPasswordTextStyle}>Password</Text>
                    <TextInput
                        style={styles.loginScreenFormPasswordTextInputStyle}
                        placeholder="Enter Password"
                        placeholderTextColor={COLORS.mediumGray}
                        selectionColor={COLORS.mediumGray}                            
                        secureTextEntry={!showPassword}
                    />

                    <TouchableOpacity
                        style={styles.loginScreenFormPasswordTouchableStyle}
                        onPress={() => setShowPassword(!showPassword)}
                    >
                        <Image
                            source={showPassword ? icons.disable_eye : icons.eye}
                            style={styles.loginScreenFormPasswordImageStyle}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    /* Login button component */
    function renderButton() {
        return (
            <View style={{ margin: SIZES.padding * 3 }}>
                <TouchableOpacity
                    style={styles.loginScreenButtonStyle}
                    onPress={() => navigation.navigate("Drawer")}
                >
                    <Text style={styles.loginScreenButtonTextStyle}>Login</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View            
            style={{ flex: 1 }}
            backgroundColor={COLORS.smokeWhite}
        >                           
            <ScrollView>
                {renderLogo()}
                {renderForm()}
                {renderButton()}
            </ScrollView>        
        </View>
    )
}

/* Login screen style elements */
const styles = StyleSheet.create({
    loginScreenLogoViewStyle: {
        height: 10,
        marginVertical: SIZES.padding * 14,        
        alignItems: 'center',
        justifyContent: 'center'
    },
    logoScreenLogoImageStyle: {
        width: "58%"
    },
    loginScreenFormViewStyle: {        
        marginHorizontal: SIZES.padding * 3
    },
    loginScreenFormUsernameTextStyle: {
        color: COLORS.darkgray, 
        ...FONTS.body3
    },
    loginScreenFormUsernameTextInputStyle: {
        marginVertical: SIZES.padding,
        borderBottomColor: COLORS.darkgray,
        borderBottomWidth: 1,
        height: 40,
        color: COLORS.mediumGray,
        ...FONTS.body3
    },
    loginScreenFormPasswordViewStyle: {
        marginTop: SIZES.padding * 3
    },
    loginScreenFormPasswordTextStyle: {
        color: COLORS.darkgray, 
        ...FONTS.body3,
    },
    loginScreenFormPasswordTextInputStyle: {
        marginVertical: SIZES.padding,
        borderBottomColor: COLORS.darkgray,
        borderBottomWidth: 1,
        height: 40,
        color: COLORS.mediumGray,
        ...FONTS.body3,
    },
    loginScreenFormPasswordTouchableStyle: {
        position: 'absolute',
        right: 0,
        bottom: 10,
        height: 30,
        width: 30,
    },
    loginScreenFormPasswordImageStyle: {
        height: 20,
        width: 20,
        tintColor: COLORS.darkgray
    },
    loginScreenButtonStyle: {
        height: 55,
        backgroundColor: COLORS.blue,
        borderRadius: SIZES.radius / 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    loginScreenButtonTextStyle: {
        color: COLORS.white, 
        ...FONTS.h3
    }
})

export default LoginScreen;