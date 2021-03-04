import React from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    FlatList,
    StyleSheet,
    Linking
} from "react-native"

import { COLORS, SIZES, FONTS, icons } from "../constants"
import blogPostData from "../constants/blogData"

const BlogScreen = ({navigation}) => {
    
    /* Header component */
    function renderBlogHeader() {
        return (
            <View style={{ flexDirection: 'row', marginVertical: SIZES.padding * 2 }}>
                <View style={styles.blogScreenHeaderViewStyle}>
                    <Text style={styles.blogScreenHeaderTitleTextStyle}>Latest Blogposts</Text>
                    <View style={styles.blogScreenHeaderRowViewStyle}>
                        <Text style={{ ...FONTS.body2, color: COLORS.blue }}>from Maptia</Text>
                        <TouchableOpacity style={styles.blogScreenHeaderInfoTouchableStyle}
                            onPress={() => {Linking.openURL('https://maptia.com/')}}
                        >
                            <Image
                                source={icons.info}
                                style={styles.blogScreenHeaderInfoIconStyle}
                            />                        
                        </TouchableOpacity>
                    </View>                     
                </View>                              
            </View>
        )
    }

    /* Blog Page main component */
    function renderBlogPage() {
        const BlogPostComponent = () => (
            <View>
                {renderBlogHeader()}                          
            </View>
        )
        
        /* Blog Post components */
        const renderItem = ({ item }) => (
            <TouchableOpacity
                style={styles.blogScreenBlogPostTouchableStyle}

                /* Navigate to the Details */
                onPress={() => navigation.navigate('Details', {
                    item: item,
                })}
            >   
                {/* Image */}
                <View style={styles.blogScreenBlogPostImageViewStyle}>                    
                    <Image
                        source={item.img}
                        resizeMode="cover"
                        style={styles.blogScreenBlogPostImageStyle}
                    />
                </View>
                
                {/* Title and description */}
                <View style={styles.blogScreenBlogPostContentStyle}>
                    <Text style={styles.blogScreenBlogPostTitleTextStyle}>
                        {item.title}
                    </Text>
                    <Text style={styles.blogScreenBlogPostDescriptionTextStyle}>
                        {item.description}
                    </Text>
                </View>
            </TouchableOpacity>
        )

        return (
            /* Blog Posts in list */
            <FlatList
                ListHeaderComponent={BlogPostComponent}
                contentContainerStyle={{ paddingHorizontal: SIZES.padding * 3 }}
                numColumns={1}                
                data={blogPostData}
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

/* Blog screen style elements */
const styles = StyleSheet.create({
    blogScreenHeaderViewStyle: {
        flex: 1,
    },
    blogScreenHeaderTitleTextStyle: {
        ...FONTS.h1
    },
    blogScreenHeaderRowViewStyle: {
        display: 'flex', 
        flexDirection:'row', 
        alignItems: 'center', 
        justifyContent: 'space-between' 
    },
    blogScreenHeaderInfoTouchableStyle: {
        height: 35,
        width: 35,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.transparent,
    },
    blogScreenHeaderInfoIconStyle: {
        width: 20,
        height: 20,
        tintColor: COLORS.blue
    },
    blogScreenBlogPostTouchableStyle: {
        marginVertical: SIZES.base,
        width: SIZES.width /1.18,
    },
    blogScreenBlogPostImageViewStyle: {
        height: 120,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    blogScreenBlogPostImageStyle: {
        width: "100%",
        height: "100%",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    blogScreenBlogPostContentStyle: {
        padding: SIZES.padding * 1.2,
        backgroundColor: COLORS.lightGray,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20        
    },
    blogScreenBlogPostTitleTextStyle: {
        ...FONTS.h3, 
        paddingBottom: SIZES.padding / 2, 
        color: COLORS.darkgray
    },
    blogScreenBlogPostDescriptionTextStyle: {
        ...FONTS.body4, 
        paddingBottom: SIZES.padding / 2, 
        color: COLORS.mediumGray
    }
})

export default BlogScreen;