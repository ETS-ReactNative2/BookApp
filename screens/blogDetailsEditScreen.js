import React from "react";
import {
    ScrollView,
    View,
    Text,
    TextInput
} from "react-native"

import { COLORS, SIZES, FONTS, icons, images } from "../constants"

/* 
const [labels, setLabels] = React.useState([])
const [selectedLabel, setSelectedLabel] = React.useState(null)
const [modalVisible, setModalVisible] = React.useState(false)
*/

const BlogDetailsEditScreen = ({ route, navigation }) => {

    /* Route item parameter for link post and details */
    const { itemEdit } = route.params;

    /* Edit Title Form component 
    function renderEditTitleForm() {
        return (    
            <View style={{ marginVertical: SIZES.padding * 2, marginHorizontal: SIZES.padding * 2}}>
                <Text style={{ color: COLORS.darkgray, ...FONTS.body3 }}>Edit post title:</Text>
                <TextInput
                    style={{
                        marginVertical: SIZES.padding,
                        paddingHorizontal: SIZES.padding,                        
                        borderColor: COLORS.darkgray,
                        borderWidth: 1,
                        height: 40,
                        color: COLORS.mediumGray,
                        ...FONTS.body3
                    }}
                    placeholder="Enter the new title"
                    placeholderTextColor={COLORS.mediumGray}
                    selectionColor={COLORS.mediumGray}
                />
            </View>
        )
    }
    */

    /* Label modal component - drop-down list 
    function renderLabelModal() {

        const renderItem = ({item}) => {
            return (
                <TouchableOpacity
                    style={{ padding: SIZES.padding, flexDirection: 'row' }}
                    onPress={() => {
                        setSelectedLabel(item)
                        setModalVisible(false)
                    }}
                >
                    <Image
                        source={{uri: item.flag}}
                        style={{
                            width: 30,
                            height: 30,
                            marginRight: 30,
                        }}
                    />
                    <Text style={{  }}>{item.name}</Text>

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
                                height: 400,
                                width: SIZES.width * 0.8,
                                backgroundColor: COLORS.lightGreen,
                                borderRadius: SIZES.radius
                            }}
                        >
                            <FlatList
                                data={areas}
                                renderItem={renderItem}
                                keyExtractor={(item) => item.code}
                                showsVerticalScrollIndicator={false}
                                style={{
                                    padding: SIZES.padding * 2,
                                    marginBottom: SIZES.padding * 2
                                }}
                            />

                            
                        </View>
                    </View>

                </TouchableWithoutFeedback>

            </Modal>
        )
    }
    */
    return (        
        <View style={{ flex: 1, backgroundColor: COLORS.smokeWhite, paddingBottom: SIZES.padding * 3 }}>
            {/* 
            {renderEditTitleForm()}
             */}

            <Text>Edit</Text>
            <Text>{JSON.stringify(itemEdit)}</Text>
        </View>
    )
}

export default BlogDetailsEditScreen;