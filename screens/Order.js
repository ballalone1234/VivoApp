import React ,{ useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import data from '../data_mockup';
const ShoppingCart = () => {
const [amonut, setAmount] = useState(1);
    function ProductCard({ image, name, color, price , spec }) {
        return (
            <View style={styles.card}>
                <Image source={image} style={styles.image} />
                <View style={styles.details}>
                    <Text style={styles.name}>{name} ({spec})</Text>
                    <Text style={styles.colorde}>{color}</Text>
                    <Text style={styles.price}>{price}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => setAmount(amonut-1)}>
                            <Icon name="minus-circle" size={20} color="#415FFF" />
                        </TouchableOpacity>
                        <Text style={{ marginHorizontal: 10, fontSize: 18 }}>{amonut}</Text>
                        <TouchableOpacity onPress={() => setAmount(amonut+1)}>
                            <Icon name="plus-circle" size={20}   color="#415FFF" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    };
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                {ProductCard({ image: data[0].img, name: data[0].title, color: data[0].color[0].color, price: data[0].price ,spec: data[0].space[0]})}
            </View>
            <TouchableOpacity
                style={{
                    position: 'absolute',
                    bottom: 1,

                    backgroundColor: '#415FFF',
                    borderRadius: 20,
                    width: Dimensions.get('window').width,
                    height: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: 'black', fontFamily: 'IBMPlexSansThai-Medium', fontSize: 18 }}>ชำระสินค้า</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        marginVertical: 5,
        marginHorizontal: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    image: {
      
        borderRadius: 10,
        marginRight: 10,
    },
    details: {
        flexDirection: 'column',
        flex: 1,
        
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 2,
    },
    colorde: {
        fontSize: 14,
        color: 'gray',
    },
    price: {
        fontSize: 14,
        color: 'red',
        paddingVertical: 16,
    },
});
export default ShoppingCart;
