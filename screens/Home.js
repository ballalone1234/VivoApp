import React, { useState } from 'react';
import { ScrollView, View, Text, Image, Dimensions, StyleSheet, TouchableOpacity, FlatList, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import data from '../data_mockup';

function TextButton({ title, onPress }) {

    return (
        <TouchableOpacity onPress={onPress} style={{ backgroundColor: 'white', borderRadius: 20, margin: 5, borderWidth: 1, borderColor: 'black' }}>
            <Text style={styles.textButton}>{title}</Text>
        </TouchableOpacity>
    );
}

const Home = ({ navigation }) => {
    const [selectedButton, setSelectedButton] = useState(null);
    const { width, height } = Dimensions.get('window');
    const [headerText, setHeaderText] = useState('');
    // const [data, setItem] = useState(['Folder1','Folders2','Folders3']);
    function TextButton({ title, onPress, isSelected }) {
        const buttonColor = isSelected ? '#1673FF' : 'black';
        const backColor = isSelected ? '#1673FF' : 'white';
        const textColor = isSelected ? 'white' : 'black';

        return (
            <TouchableOpacity onPress={() => {
                onPress();
                setSelectedButton(title);
            }} style={{ backgroundColor: backColor, borderRadius: 20, margin: 5, borderWidth: 1, borderColor: buttonColor }}>
                <Text style={{

                    fontSize: 12,
                    fontFamily: 'IBMPlexSansThai-Bold',
                    color: textColor,
                    paddingVertical: 3,
                    paddingHorizontal: 20,

                }}>{title}</Text>
            </TouchableOpacity>
        );
    }

    const dataTag = ['สินค้าทั้งหมด', 'โทรศัพท์', 'หูฟัง', 'สายชาร์จ', 'อุปกรณ์เสริม', 'อื่นๆ'];


    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/bg1.png')}
                style={{
                    width: width,
                    resizeMode: 'stretch',
                }}
            />


            <View style={styles.row}>
                <FlatList
                    nestedScrollEnabled={false}
                    data={dataTag}

                    horizontal={true}
                    renderItem={({ item }) =>

                        TextButton({ title: item, onPress: () => console.log('Button pressed'), isSelected: selectedButton === item })

                    }

                /></View>
            <FlatList
                data={data}
                numColumns={2} // กำหนดให้แสดงเป็น 2 คอลัมน์
                contentContainerStyle={styles.containercol}
                renderItem={({ item }) =>

                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('DetailPage', { item: item });
                        }}>
                        <View style={styles.column}>
                            <Image
                                source={item.img}
                            />
                            <Text>{item.title}</Text>
                            <Text style={{ color: 'red' }} >{item.price}</Text>
                        </View></TouchableOpacity>

                }

            />
        </View>


    );
};
const styles = StyleSheet.create({
    containercol: {
        alignItems: 'center'
    },
    column: {
        flex: 1, // คอลัมน์แต่ละคอลัมน์จะมีพื้นที่เท่ากัน
        marginHorizontal: 24, // ระยะห่างในคอลัมน์
        alignItems: 'center',
        // คุณสามารถเพิ่มสไตล์เพิ่มเติมเพื่อกำหนดรูปแบบและสไตล์ในคอลัมน์แต่ละคอลัมน์ตามที่ต้องการ
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 10,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#369EFF',
        padding: 10,
        borderRadius: 25,
    },
    headerText: {
        flex: 1,
        color: 'black',
        marginLeft: 10,
    },
    icon: {
        marginLeft: 10,
    },
    itemText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-evenly', // Updated this line
        paddingHorizontal: 16,
        marginVertical: 8,
        padding: 16,
        borderRadius: 8,
    },
    columnCenter: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    textButton: {
        fontSize: 12,
        fontFamily: 'IBMPlexSansThai-Bold',
        color: 'black',
        paddingVertical: 3,
        paddingHorizontal: 20,
    },
});
export default Home;
