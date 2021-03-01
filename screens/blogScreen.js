import React from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    FlatList,    
} from "react-native"

import { COLORS, SIZES, FONTS, icons } from "../constants"
import blogPostData from "../constants/blogData"

const BlogScreen = ({navigation}) => {

    const [blogPost, setBlogPost] = React.useState(blogPostData)

    function renderBlogHeader() {
        return (
            <View style={{ flexDirection: 'row', marginVertical: SIZES.padding * 2 }}>
                <View style={{flex: 1}}>
                    <Text style={{ ...FONTS.h1 }}>Latest Blogposts</Text>
                    <View style={{ display: 'flex', flexDirection:'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ ...FONTS.body2, color: COLORS.blue }}>from Alan Wicken</Text>
                        <TouchableOpacity
                            style={{
                                height: 35,
                                width: 35,
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: COLORS.transparent,
                                
                            }}
                        >
                            <Image
                                source={icons.info}
                                style={{
                                    width: 20,
                                    height: 20,
                                    tintColor: COLORS.blue
                                }}
                            />

                        
                        </TouchableOpacity>
                    </View> 
                    
                </View>

                              
            </View>
        )
    }

    function renderBlogPage() {

        const BlogPostComponent = () => (
            <View>
                {renderBlogHeader()}                          
            </View>
        )
        
        const renderItem = ({ item }) => (
            <TouchableOpacity
                style={{
                    marginVertical: SIZES.base,
                    width: SIZES.width /1.18,                    
                }}
                /* Navigate to the Details */
                onPress={() => navigation.navigate('Details', {
                    item: item,
                })}
            >
                <View
                    style={{
                        height: 120,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,                        
                    }}
                >                    
                    <Image
                        source={item.img}
                        resizeMode="cover"
                        style={{
                            width: "100%",
                            height: "100%",
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20
                        }}
                    />
                </View>

                <View
                    style={{
                        padding: SIZES.padding * 1.2,
                        backgroundColor: COLORS.lightGray,
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20
                    }}
                >
                    <Text style={{ ...FONTS.h3, paddingBottom: SIZES.padding / 2, color: COLORS.darkgray }}>{item.title}</Text>
                    <Text style={{ ...FONTS.body4, paddingBottom: SIZES.padding / 2, color: COLORS.mediumGray }}>{item.description}</Text>

                </View>
            </TouchableOpacity>
        )

        return (
            <FlatList
                ListHeaderComponent={BlogPostComponent}
                contentContainerStyle={{ paddingHorizontal: SIZES.padding * 3 }}
                numColumns={1}                
                data={blogPost}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                ListFooterComponent={
                    <View style={{ marginBottom: 80 }}>                        
                    </View>
                }
            />
        )
    }

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.smokeWhite, paddingBottom: SIZES.padding * 3 }}>
            {renderBlogPage()}
        </View>
    )
}

export default BlogScreen;