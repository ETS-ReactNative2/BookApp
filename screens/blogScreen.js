import React from "react";
import {
    View,
    Text,       
} from "react-native"

const BlogScreen = ({navigation}) => {

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text
                style={{paddingBottom: 20}}                
            >Blog screen</Text>
            <Text
                onPress={() => navigation.navigate('Details')}
            >See details</Text>
        </View>
    )
}

export default BlogScreen;