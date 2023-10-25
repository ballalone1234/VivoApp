import React from 'react';
import { View, StyleSheet, TextInput, Dimensions ,Image, TouchableOpacity } from 'react-native';

const Login = ({navigation}) => {
    const { widtht, height } = Dimensions.get('window');
    return (
        <View style={styles.container}>
            <Image source={require('../assets/Vivo_logo.png')} style={{marginBottom:80}}  />
            <View style={{ borderWidth: 1, width :'80%', marginVertical:15, borderColor: 'gray', borderRadius:10, backgroundColor: '#D9D9D9', padding: 10 }}>
                <TextInput placeholder="ชื่อผู้ใช้" style={{fontFamily:'IBMPlexSansThai-Medium'}}/>
               
                </View>
                <View style={{ borderWidth: 1, width :'80%',marginVertical:15, borderColor: 'gray', borderRadius: 10, backgroundColor: '#D9D9D9', padding: 10 }}>
                <TextInput placeholder="รหัสผ่าน" style={{fontFamily:'IBMPlexSansThai-Medium'}}/>
            </View>
            <Image source={require('../assets/line.png')} style={{}}  />
            <View style={{flexDirection:'row'}}>
                <TouchableOpacity>
            <Image source={require('../assets/logo-facebook.png')} style={{marginHorizontal:20 , marginVertical:20}}  />
            </TouchableOpacity>
            <TouchableOpacity>
            <Image source={require('../assets/logo_google.png')} style={{marginHorizontal:20,marginTop:22 , marginBottom:20}}  />
            </TouchableOpacity>

            </View>
            <TouchableOpacity onPress={()=>{
                navigation.replace('Home')
            }}>
            <Image source={require('../assets/LoginBTN.png')} style={{marginHorizontal:20,marginTop:40 , marginBottom:20}}  />
            </TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#415FFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Login;
