import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet ,TouchableOpacity ,Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
const Profile = () => {
    const [userData, setUserData] = useState({});

    useEffect(() => {
        // ดึงข้อมูลผู้ใช้งานจาก API หรือจาก Local Storage ของแอปพลิเคชัน
        // แล้ว setUserData ด้วยข้อมูลที่ได้รับ
    }, []);

    return (
        <View style={styles.container}>
            <Image source={require('../assets/Profile.png')} style={styles.profilePicture} />
            <TouchableOpacity
                style={{
                   
               
                 
                    borderRadius: 20,
                    width: Dimensions.get('window').width,
                    height: 40,
                    alignItems:'center',
                    justifyContent: 'center',
                }}
            >
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: 'black', fontFamily: 'IBMPlexSansThai-Regular', fontSize: 16 }}>นอตอ ดีใจ</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                   
                    
                 
                    borderRadius: 20,
                    width: Dimensions.get('window').width,
                    height: 40,
                    alignItems:'center',
                    justifyContent: 'center',
                }}
            >
                <View style={{ flexDirection: 'row' }}>
                <Icon name="shopping-cart" size={16}  />
                    <Text style={{ color: 'black', fontFamily: 'IBMPlexSansThai-Regular', fontSize: 14 }}>   คำสั่งซื้อของคุณ</Text>
                </View>
            </TouchableOpacity>
           
            <TouchableOpacity
                style={{
                   
                    marginVertical: 5,
                    backgroundColor: '#D9D9D9',
                    borderRadius: 20,
                    width: Dimensions.get('window').width,
                    height: 40,
               
                    justifyContent: 'center',
                }}
            >
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: 'black', fontFamily: 'IBMPlexSansThai-Regular',paddingStart:20, fontSize: 16 }}>+ เพิ่มประวัติส่วนตัว</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                   
                    marginVertical: 5,
                    backgroundColor: '#D9D9D9',
                    borderRadius: 20,
                    width: Dimensions.get('window').width,
                    height: 40,
               
                    justifyContent: 'center',
                }}
            >
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: 'black', fontFamily: 'IBMPlexSansThai-Regular',paddingStart:20, fontSize: 16 }}>แก้ไขข้อมูลส่วนตัว</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                   
                    marginVertical: 5,
                    backgroundColor: '#D9D9D9',
                    borderRadius: 20,
                    width: Dimensions.get('window').width,
                    height: 40,
                    
                    justifyContent: 'center',
                }}
            >
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: 'black', fontFamily: 'IBMPlexSansThai-Regular',paddingStart:20, fontSize: 16 }}>การสนับสนุน</Text>
                </View>
            </TouchableOpacity>
            {/* แสดงผลข้อมูลอื่น ๆ ที่เกี่ยวข้องกับผู้ใช้งาน */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    profilePicture: {
        width: 100,
        height: 100,
        
        marginBottom: 5,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    email: {
        fontSize: 16,
        color: 'gray',
    },
});

export default Profile;
