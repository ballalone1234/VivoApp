import React, { useState } from 'react';
import { View, ScrollView, Image, Text, StyleSheet, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import FloatingButton from '../Floating_button';
import Icon from 'react-native-vector-icons/FontAwesome5';

  

    const DetailPage = ({ route }) => {
        const { item } = route.params;
        const [selectedButton, setSelectedButton] = useState(null);
        const[selectedImageTextButton, setSelectedImageTextButton] = useState(null);

        function TextButton({ title, onPress, isSelected }) {
            const buttonColor = isSelected ? 'red' : 'black';
            return (
                <TouchableOpacity onPress={() => {
                    onPress();
                    setSelectedButton(title);
                }} style={{  borderRadius: 20, margin: 5, borderWidth: 1, borderColor: buttonColor }}>
                    <Text style={styles.textButton}>{title}</Text>
                </TouchableOpacity>
            );
        }
        function ImageTextButton({ title, onPress, isSelected ,image}) {
            const buttonColor = isSelected ? 'red' : 'black';
            return (
                <View>
                <TouchableOpacity  onPress={() => {
                    onPress();
                    setSelectedImageTextButton(title);
                }} style={{  borderRadius: 20, margin: 5, borderWidth: 1, borderColor: buttonColor , alignItems:'center' }}>
                      <Image
                                source={image}
                            />
                    
                </TouchableOpacity>
                <View>
                <Text style={styles.textImgButton}>{title}</Text>
                </View></View>
            );
        }
        

        return (
            <ScrollView style={styles.container}>
                <View style={styles.image}>
                    <Image source={item.imgz} resizeMode='cover' />
                </View>
                <View style={styles.content}>
                    <View style={styles.row}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.price}>{item.price}</Text>
                    </View>
                    <View style={styles.detail_box}>
                        <FlatList
                            data={item.detail}
                            scrollEnabled={false}
                            renderItem={({ item }) => <Text style={styles.detail}>{`\u2022 ${'  ' + item}`}</Text>}
                        ></FlatList>
                    </View>
                    <View style={{}}>
                        <Text style={{
                            fontSize: 20,
                            fontFamily: 'IBMPlexSansThai-Medium',
                        }} >รายละเอียดสินค้า</Text>
                    </View>

                    <View style={{ alignItems: 'center' }}>
                        <FlatList
                            nestedScrollEnabled={false}
                            data={item.space}
                            scrollEnabled={false}
                            horizontal={true}
                            renderItem={({ item }) =>
                                TextButton({ title: item, onPress: () => console.log('Button pressed'), isSelected: selectedButton === item })
                            }
                        />
                    </View>
                    <View style={{}}>
                        <Text style={{
                            fontSize: 20,
                            fontFamily: 'IBMPlexSansThai-Medium',
                        }} >สี</Text>
                    </View>

                    <View style={{ alignItems: 'center' }}>
                        <FlatList
                            nestedScrollEnabled={false}
                            data={item.color}
                          
                            horizontal={true}
                            renderItem={({ item }) =>
                                ImageTextButton({ title: item.color, onPress: () => console.log('Button pressed'), isSelected: selectedImageTextButton === item.color , image : item.img })
                            }
                        />
                    </View>
                    <TouchableOpacity onPress={() => {
                    
                }} style={{backgroundColor:'#74DAF0' , borderRadius: 10, margin: 5, borderWidth: 1, borderColor: '#74DAF0' }}>
                    <View style={{flexDirection:'row' , alignSelf:'center', alignItems:'center'}}>
                    <Icon name="shopping-cart" size={20} />
                    <Text style={styles.textButton}>เพิ่มลงตะกร้า</Text>
                    </View>
                </TouchableOpacity>
            
                </View>
                
            </ScrollView>
            
        );
    };

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            paddingHorizontal: 40,
        },
        image: {
            width: '100%',
            height: 300,

            alignItems: 'center',
        },
        detail: {
            fontSize: 16,
            lineHeight: 20,
            fontFamily: 'IBMPlexSansThai-Light',

        },
        detail_box: {
            paddingVertical: 10,

        },
        content: {
            paddingVertical: 50,

        },
        title: {
            fontSize: 24,
            fontFamily: 'IBMPlexSansThai-Medium',


        },
        price: {
            fontSize: 18,
            color: 'red',
            fontFamily: 'IBMPlexSansThai-Medium',
        },
        description: {
            fontSize: 16,
            lineHeight: 24,
        },
        row: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',

    },
    textButton: {
        fontSize: 16,
        fontFamily: 'IBMPlexSansThai-Medium',
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    textImgButton: {
        fontSize: 12,
        fontFamily: 'IBMPlexSansThai-Medium',
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
});

export default DetailPage;
