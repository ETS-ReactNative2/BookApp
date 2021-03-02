/* React imports */
import React from "react";
import {
    ScrollView,
    View,
    Text,
    Image,
    TouchableOpacity,    
    
} from "react-native"

/* Redux imports 
import { useSelector, useDispatch } from 'react-redux'
import { addBlogPost, deleteBlogPost } from '../reducer/booksApp'
*/

/* Constant imports */
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { COLORS, SIZES } from "../constants"

const BlogDetailsScreen = ({ route, navigation }) => {
    
    React.useEffect(() => {
        if (route.params?.postTitle) {
          // Post updated, do something with `route.params.post` (eg.: send the post to the server)        
        }
      }, [route.params?.postTitle]);
         
    /* Route item parameter for link post and details */
    const { item } = route.params;
   
   
    /* Redux consts 
    const blogs = useSelector(state => state)
    const dispatch = useDispatch()

    const addBlog = blog => {
        console.log(blog)
        dispatch(addBlogPost(blog))
    }

    const deleteBlog = id => dispatch(deleteBlogPost(id))
    */
    
    function renderEditScreen() {
        return (
            <TouchableOpacity 
                style={{paddingRight: SIZES.padding * 2, paddingTop: SIZES.padding * 1.2}}
                onPress={() => navigation.navigate('EditDetails', {
                    editItem: item,
                })}
                >                            
                <FontAwesome 
                    name="edit" 
                    size={23}
                    style={{color: COLORS.red,}}
                />
            </TouchableOpacity>      
        )
    }

    /* Details main component */
    function renderDetails() {
        return (
            <ScrollView style={{ paddingBottom: SIZES.padding * 20}}>
                {/* Image */}
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

                {/* Blog Post Title */}
                <View
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: "space-between",
                        alignItems: 'center'
                    }}
                >
                    <Text
                        style={{                    
                            paddingHorizontal: SIZES.padding * 2.35,
                            paddingTop: SIZES.padding * 2,
                            paddingBottom: SIZES.padding,
                            fontSize: SIZES.h2,
                        }}
                    >
                        
                        {route.params.postTitle ? route.params.postTitle : item.title}
                    </Text>
                    {renderEditScreen()}                    
                </View>

                {/* Blog Post Label */}
                <Text 
                    style={{ 
                        paddingHorizontal: SIZES.padding * 2.35, 
                        paddingBottom: SIZES.padding,
                        fontSize: SIZES.body3,
                        fontWeight: "700",
                        color: COLORS. darkTurquoise
                    }}
                >
                    {item.label}
                </Text>

                {/* Blog Post Content */}
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