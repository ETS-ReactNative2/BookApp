import React from "react";
import {
    ScrollView,
    View,
    Text,
    TextInput,
    Modal,
    TouchableWithoutFeedback,
    FlatList,
    KeyboardAvoidingView,
    TouchableOpacity,
    Button

} from "react-native"

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import blogPostData from "../constants/blogData"
import { COLORS, SIZES, FONTS, icons, images } from "../constants"

const BlogDetailsEditScreen = ({ route, navigation }) => {

    /* Blog data JSON */
    const labelCategory = [
        { name: "nature" },
        { name: "ocean" },
        { name: "culture" }            
    ]

    /* Route item parameter for link post and details */
    const { editItem } = route.params;

    /* Hooks */
    const [selectedLabel, setSelectedLabel] = React.useState(null)
    const [modalVisible, setModalVisible] = React.useState(false)

    const [postText, setPostText] = React.useState('');    

    /* Edit Title Form component */
    function renderEditTitleForm() {
        return (    
            <View style={{ marginTop: SIZES.padding * 4, marginHorizontal: SIZES.padding * 2}}>
                <Text style={{ color: COLORS.darkgray, ...FONTS.body3 }}>Add new post title:</Text>
                <TextInput
                    style={{
                        height: 50,
                        marginVertical: SIZES.padding,
                        paddingHorizontal: SIZES.padding, 
                        paddingLeft: SIZES.padding * 2,
                        borderColor: COLORS.mediumGray,
                        borderWidth: 1,
                        borderRadius: 6,                                                                    
                        backgroundColor: COLORS.lightGray,
                        ...FONTS.body3
                    }}
                    placeholder={editItem.title}
                    placeholderTextColor={COLORS.mediumGray}
                    selectionColor={COLORS.mediumGray}
                    value={postText}
                    onChangeText={setPostText}
                />
            </View>
        )
    }

    /* Form component */
    function renderForm() {
        return (
            <View style={{ marginTop: SIZES.padding * 2, marginHorizontal: SIZES.padding * 2 }}>
                <Text style={{ color: COLORS.darkgray, ...FONTS.body3, paddingBottom: SIZES.padding }}>Select post label:</Text>
                <View style={{flexDirection: 'row'}}>                    
                    {/* Labels */}                    
                    <TouchableOpacity
                        style={{
                            width: SIZES.width * 0.9,
                            height: 50,                                                       
                            paddingLeft: SIZES.padding * 2,
                            borderColor: COLORS.mediumGray,
                            borderWidth: 1,
                            borderRadius: 6,
                            flexDirection: 'row',
                            backgroundColor: COLORS.lightGray,
                            justifyContent: 'space-between',
                        }}
                        onPress={() => setModalVisible(true)}
                    >
                        <View style={{ justifyContent: 'center' }}>
                            <Text>{selectedLabel?.name ? selectedLabel.name : editItem.label}</Text>
                        </View>

                        <View style={{ justifyContent: 'center', marginRight: SIZES.padding }}>
                            <FontAwesome 
                                name="chevron-down" 
                                size={20}
                                style={{color: COLORS.mediumGray}}
                            />
                        </View>                                                                    
                    </TouchableOpacity>                           
                </View> 
            </View>
        )
    }
    
    /* Label modal component - drop-down list */
    function renderLabelModal() {

        const renderItem = ({item}) => {
            return (
                <TouchableOpacity
                    style={{ padding: SIZES.padding, flexDirection: 'row' }}
                    onPress={() => {                        
                        setSelectedLabel(item)
                        setModalVisible(false)                                                
                        blogPostData[editItem.id-1].label = item.name
                    }}
                >                   
                    <Text 
                        style={{ 
                            color: COLORS.white, 
                            ...FONTS.body3, 
                            paddingLeft: 
                            SIZES.padding }}>{item.name}</Text>
                </TouchableOpacity>
            )
        }

        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <TouchableWithoutFeedback
                    onPress={() => setModalVisible(false)}
                >
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <View
                            style={{
                                height: 170,
                                width: SIZES.width * 0.91,
                                backgroundColor: COLORS.blue,
                                borderRadius: 6,
                                
                            }}
                        >
                            <FlatList
                                data={labelCategory}
                                renderItem={renderItem}
                                keyExtractor={item => `${item.name}`}
                                showsVerticalScrollIndicator={false}
                                style={{
                                    padding: SIZES.padding * 2,
                                    marginBottom: SIZES.padding * 2,                                    
                                }}
                            />                            
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        )
    }

    function renderSaveButton() {
        return (
            <View 
                style={{ 
                    marginHorizontal: SIZES.padding * 2,
                    marginTop: SIZES.padding * 5,                     
                    justifyContent: 'center',
                    height: 50,
                    borderRadius: 6, 
                    backgroundColor: COLORS.blue,
                    
                }}
            >
                <Button
                    title="Save post"
                    disabled = {postText == '' ? true: false}
                    color={COLORS.white}                    
                    onPress={() => {
                        blogPostData[editItem.id-1].title = postText
                        // Pass params back to home screen
                        navigation.navigate('Details', { postTitle: postText });                    
                    }}
                />
            </View>            
        )
    }
    
    return (                
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : null}
            style={{ flex: 1 }}
        >            
            <ScrollView>
                {renderEditTitleForm()}                
                {renderForm()}  
                {renderSaveButton()}              
            </ScrollView>
            
            {renderLabelModal()}
        </KeyboardAvoidingView>
    )
}

export default BlogDetailsEditScreen;