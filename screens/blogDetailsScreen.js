import React from "react";
import {
    ScrollView,
    View,
    Text,
    Image
} from "react-native"

import { COLORS, SIZES } from "../constants"

const BlogDetailsScreen = ({ route }) => {
    
    /* Route item parameter for link post and details */
    const { item } = route.params;
    
    /* Details main component */
    function renderDetails() {
        return (
            <ScrollView style={{ paddingBottom: SIZES.padding * 20}}>
                <View
                        style={{
                            height: 260,                            
                        }}
                    >
                        <Image
                            source={item.img}
                            resizeMode="cover"
                            style={{
                                width: "100%",
                                height: "100%",                            
                            }}
                        />                            
                    </View>

                <Text
                    style={{                    
                        paddingHorizontal: SIZES.padding * 2.35,
                        paddingTop: SIZES.padding * 2,
                        paddingBottom: SIZES.padding,
                        fontSize: SIZES.h2,
                    }}
                >{item.title}</Text>
                <Text
                    style={{                    
                        paddingHorizontal: SIZES.padding * 2.35,
                        paddingBottom: SIZES.padding,
                        fontSize: SIZES.body3,
                        textAlign: "justify",
                    }}
                >{item.content}</Text>                    
            </ScrollView>
        )
    }

    return (        
        <View style={{ flex: 1, backgroundColor: COLORS.smokeWhite, paddingBottom: SIZES.padding * 3 }}>
            {renderDetails()}
        </View>
    )
}

export default BlogDetailsScreen;