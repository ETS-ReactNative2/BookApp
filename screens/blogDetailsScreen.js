import React from "react";
import {
    View,
    Text,       
} from "react-native"

const BlogDetailsScreen = ({navigation}) => {

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text
                style={{paddingBottom: 20}}
            >Details</Text>
            <Text                
                onPress={() => navigation.goBack()}
            >Go back</Text>         
        </View>
    )
}

export default BlogDetailsScreen;