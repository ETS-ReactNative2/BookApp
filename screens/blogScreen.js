import React from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    FlatList,    
} from "react-native"

import { COLORS, SIZES, FONTS, icons, images } from "../constants"
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
                onPress={() => navigation.navigate('Details')}
            >
                <View
                    style={{
                        height: 80,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        backgroundColor: COLORS.transparent
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
                        padding: SIZES.padding,
                        backgroundColor: COLORS.lightGray,
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20
                    }}
                >
                    <Text style={{ ...FONTS.h4 }}>{item.title}</Text>
                    <Text style={{ ...FONTS.body4 }}>{item.description}</Text>

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
        <View style={{ flex: 1, backgroundColor: COLORS.white, paddingBottom: SIZES.padding * 3 }}>
            {renderBlogPage()}            
        </View>        
    )
}

export default BlogScreen;