import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProductCard = ({ image, name, price }) => {
    return (
        <View style={styles.card}>
            <Image source={image} style={styles.image} />
            <View style={styles.details}>
                <Text style={styles.name}>{'name'}</Text>
                <Text style={styles.price}>{price}</Text>
            </View>
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
        width: 80,
        height: 80,
        borderRadius: 10,
        marginRight: 10,
    },
    details: {
        flex: 1,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    price: {
        fontSize: 14,
        color: '#888',
    },
});

export default ProductCard;