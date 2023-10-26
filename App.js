import * as React from 'react';
import { Text, View, Button, TouchableOpacity , Image } from 'react-native';
import { NavigationContainer } from './node_modules/@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'; // import createStackNavigator
import Home from './screens/Home';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useFonts } from 'expo-font';
import DetailPage from './screens/DetailpageItem';
import ShoppingCart from './screens/Order';
import Profile from './screens/Profile';
import Login from './screens/Login';

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();


function MyTabs({navigation}) {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#1673FF',
        tabBarInactiveTintColor: '#A9A9A9',
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: 'IBMPlexSansThai-Light',
          fontWeight: 'bold',
        },
        tabBarStyle: {
          display: 'flex',
        },
      }}
    >
      <Tab.Screen options={{
        title: 'หน้าแรก',
        tabBarIcon: ({ color, size }) => (
          <Icon name="home" size={30} color={color} />
        )
      }} name="Home2" component={Home} />
      <Tab.Screen options={{
         title: 'ตะกร้าสินค้า',
        tabBarIcon: ({ color, size }) => (
          <Icon name="shopping-cart" size={30} color={color} />
        ),
        
      }} name="Settings" component={ShoppingCart} 
      listeners={{
        tabPress: e => {
          // Prevent default action
          e.preventDefault();
    
          //Any custom code here
          navigation.navigate('ShoppingCart')
        },
      }}/>
      <Tab.Screen options={{
         title: 'โปรไฟล์',
        tabBarIcon: ({ color, size }) => (
          <Icon name="user-alt" size={30} color={color} />
        )
      }} name="GG" component={SettingsScreen}  listeners={{
        tabPress: e => {
          // Prevent default action
          e.preventDefault();
    
          //Any custom code here
          navigation.navigate('Profile')
        },
      }}/> 
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator(); // create a StackNavigator


export default function App() {
  let [fontsLoaded] = useFonts({
    'Inter-Light': require('./assets/fonts/Inter-Light.ttf'),
    'IBMPlexSansThai-Light' : require('./assets/fonts/IBMPlexSansThai-Light.ttf'),
    'IBMPlexSansThai-Bold' : require('./assets/fonts/IBMPlexSansThai-Bold.ttf'),
    'IBMPlexSansThai-Regular' : require('./assets/fonts/IBMPlexSansThai-Regular.ttf'),
    'IBMPlexSansThai-Medium' : require('./assets/fonts/IBMPlexSansThai-Medium.ttf'),
    'IBMPlexSansThai-Thin' : require('./assets/fonts/IBMPlexSansThai-Thin.ttf'),
  });
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
            headerTitle: () => (
              <Image source={require('./assets/vivot.png')} />
            ),
            headerRight: () => (
              <TouchableOpacity onPress={() => alert('Button pressed!')}>
                <Image source={require('./assets/search-circle.png')}  />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="Home"
          component={MyTabs}
          options={{
            headerTitle: () => (
              <Image source={require('./assets/vivot.png')} />
            ),
            headerRight: () => (
              <TouchableOpacity onPress={() => alert('Button pressed!')}>
                <Image source={require('./assets/search-circle.png')}  />
              </TouchableOpacity>
            ),
          }}
        />
          <Stack.Screen
          name="DetailPage"
          component={DetailPage}
          options={{
            headerTitleStyle: {fontFamily: 'IBMPlexSansThai-Medium'},
            title : 'รายละเอียดสินค้า'
            // headerTitle: () => (
            //   <Image source={require('./assets/vivot.png')} />
            // ),
            // headerRight: () => (
            //   <TouchableOpacity onPress={() => alert('Button pressed!')}>
            //     <Image source={require('./assets/search-circle.png')}  />
            //   </TouchableOpacity>
            // ),
          }}
        />
            <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerTitleStyle: {fontFamily: 'IBMPlexSansThai-Medium'},
            title : 'ข้อมูลส่วนตัว'
            // headerTitle: () => (
            //   <Image source={require('./assets/vivot.png')} />
            // ),
            // headerRight: () => (
            //   <TouchableOpacity onPress={() => alert('Button pressed!')}>
            //     <Image source={require('./assets/search-circle.png')}  />
            //   </TouchableOpacity>
            // ),
          }}
        />
          <Stack.Screen
          name="ShoppingCart"
          component={ShoppingCart}
          options={{
            headerTitleStyle: {fontFamily: 'IBMPlexSansThai-Medium'},
            title : 'ตะกร้าสินค้า'
            // headerTitle: () => (
            //   <Image source={require('./assets/vivot.png')} />
            // ),
            // headerRight: () => (
            //   <TouchableOpacity onPress={() => alert('Button pressed!')}>
            //     <Image source={require('./assets/search-circle.png')}  />
            //   </TouchableOpacity>
            // ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
