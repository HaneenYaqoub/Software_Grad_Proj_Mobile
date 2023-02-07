import 'react-native-gesture-handler';
import React, { useState } from 'react';
import SignInScreen from './app/assests/views/screens/SignInScreen';
import {NavigationContainer, useRoute} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import SignUpScreen from './app/assests/views/screens/SignUpScreen';
import App1 from './app/assests/views/screens/App1';
import clothes from './app/assests/views/screens/clothes';
import Profile from './app/assests/views/screens/Profile'
import HomePage from './app/assests/views/screens/HomePage';
import Categories from './app/assests/views/screens/Categories';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Details from './app/assests/views/screens/Details';
import LottieView from 'lottie-react-native';
import  splash  from './app/assests/views/screens/splash';
import  admin  from './app/assests/views/screens/admin';
import  AddSupplier  from './app/assests/views/screens/AddSupplier';
import add_product from './app/assests/views/screens/add_product';
import delete_product from './app/assests/views/screens/delete_product';
import modify_product from './app/assests/views/screens/ModifyProduct';

import product from './app/assests/views/screens/product';
import homepagewithlogin from './app/assests/views/screens/homepagewithlogin';
import shopping_cart from './app/assests/views/screens/shopping_cart';
import addAdmin from './app/assests/views/screens/addAdmin';

import Accessories from './app/assests/views/screens/Accessories';
import Shoes from './app/assests/views/screens/Shoes';
import Icon from 'react-native-vector-icons/MaterialIcons';
import prodDetails from './app/assests/views/screens/prodDetails';
import Payment from './app/assests/views/screens/Payment';
import rating from './app/assests/views/screens/rating';
import PageRoutes from './PageRoute';
import { localNotificationService } from './app/assests/views/screens/src/LocalNotificationService';
import {
  fcmService
} from './app/assests/views/screens/src/screens/FCMService';
import {
  navigationRef,
  navigate
} from './app/assests/views/screens/src/RootNavigation';

import { useEffect } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
  
} from 'react-native';
import assets from './app/assests/assest';
import SearchResult from './app/assests/views/screens/SearchResult';
import editprofile from './app/assests/views/screens/editprofile';

import { Router } from 'express';
const splash1 = (navigation) => {

const [loaded, setLoaded] = useState(false);
  if (loaded == false) {
    return(
      <View style={styles.splash}>
        <LottieView source={require('./app/assests/assest/planePath.json')}
          autoPlay
          loop={false}
          resizeMode='cover'
          onAnimationFinish={() => {
            console.log('animation finished')
            setLoaded(true);
        }}
        />
      </View>
    )      
  } else {
    return(
      <View >
        <TouchableOpacity onPress={() =>navigation.navigate('SignIn') } 
>
        <Text>Hiiiiiiii</Text>
        </TouchableOpacity>

        {/* <NavigationContainer independent={true}> */}
            {/* <Stack.Screen name="SignIn" component={SignInScreen} /> */}
            {/* </NavigationContainer> */}

      </View>
    )
  };
}


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
// function splash1(){
//   return (
//     <SafeAreaView>
//         <Text>Lottie Animations</Text>
//         <View style={style.header}>      
// <LottieView
  
//   source={assets.lottieFiles.planePath}
//   colorFilters={[{keypath: 'Plane', color: 'rgb(255, 100, 0)'}]}
//   autoplay
//   loop
// />
// </View>
//     </SafeAreaView>
// );
  
// };

// const route=useRoute();
const drawer = createDrawerNavigator();
const NavigationDrawerStructure = (navigation)=> {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    navigation.navigationProps.toggleDrawer();
  };
 
  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={()=>toggleDrawer()
}>
  
      
      </TouchableOpacity>
    </View>
  );
}


function HomeTabs(route) {
  // console.log('params', route.params);

  return (
    <drawer.Navigator drawerContentOptions={{
      activeTintColor: '#e91e63',
      itemStyle: { marginVertical: 5 },
      
      
    }} 
    // screenOptions={{
    //   drawerStyle: {
    //     backgroundColor: 'pink',
    //     width: 240,
    //   },
    // }}
    >
      

      <drawer.Screen 
            //  initialParams={{ params: route.params }} 

      name="home" 
      component={HomePage} 
      
       options={{
        
          // backgroundColor:'green',
          drawerIcon: ({focused, size}) => (
            <Icon
               name="home"
               size={size}
               color={focused ? '#8fbc8f' : '#ccc'}
            />),
          title: 'Home', //Set Header Title
          headerShown:false,
          headerLeft: ()=>
            <NavigationDrawerStructure
            
              navigationProps={navigation}
            />
            ,
          headerStyle: {
            backgroundColor: 'green', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}/>
        
        <drawer.Screen
         name="Profile"
          component={Profile}
           options={{
          // backgroundColor:'green',
          drawerIcon: ({focused, size}) => (
            <Icon
               name="person"
               size={size}
               color={focused ? '#8fbc8f' : '#ccc'}
            />),
          title: 'Profile', //Set Header Title
          headerShown:false,
          headerLeft: ()=>
            <NavigationDrawerStructure
            
              navigationProps={navigation}
            />
            ,
          headerStyle: {
            backgroundColor: 'green', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }} />

      <drawer.Screen
       name="categories"
        component={Categories}
          options={{
          // backgroundColor:'green',
          drawerIcon: ({focused, size}) => (
            <Icon
               name="category"
               size={size}
               color={focused ? '#8fbc8f' : '#ccc'}
            />),
          title: 'Categories', //Set Header Title
          headerShown:false,
          headerLeft: ()=>
            <NavigationDrawerStructure
            
              navigationProps={navigation}
            />
            ,
          headerStyle: {
            backgroundColor: 'green', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}/>
      
      <drawer.Screen
       name="shoppingcart"
        component={shopping_cart}
          options={{
          // backgroundColor:'green',
          drawerIcon: ({focused, size}) => (
            <Icon
               name="shopping-cart"
               size={size}
               color={focused ? '#8fbc8f' : '#ccc'}
            />),
          title: 'Shopping Cart', //Set Header Title
          headerShown:false,
          headerLeft: ()=>
            <NavigationDrawerStructure
            
              navigationProps={navigation}
            />
            ,
          headerStyle: {
            backgroundColor: 'green', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}/>

    </drawer.Navigator>
  );
}


function App() {
  useEffect(() => {
    fcmService.registerAppWithFCM();
    fcmService.register(onRegister, onNotification, onOpenNotification);
    localNotificationService.configure(onOpenNotification)
}, []);


const onRegister = (token) => {
    console.log("[App] Token", token);
}

const onNotification = (notify) => {
    // console.log("[App] onNotification", notify);
    const options = {
        soundName: 'default',
        playSound: true,
        largeIcon: "ic_launcher", // (optional) default: "ic_launcher"
        smallIcon: "ic_launcher", // (optional) default:  "ic_notification" with fallback for "ic_launcher"
    }

    localNotificationService.showNotification(
        0,
        notify.notification.title,
        notify.notification.body,
        notify,
        options,
    )
}

const onOpenNotification = async (notify) => {
    // console.log('notify!!', notify);
    // if (notify && notify.data && notify.data.page == "list") {
    //     navigate('List', notify.data);
    // } else 
    // if (notify && notify.data) {
       navigate('rating', notify.data);
    // }
}
  return (
    
      
    <NavigationContainer ref = {
      navigationRef
  }>
  {/* <NavigationContainer independent={true} ref = {
            navigationRef
        } > */}

        {/* <PageRoutes / > */}
        {/* </NavigationContainer> */}
        
    <Stack.Navigator screenOptions={{header: () => null}}>
    <Stack.Screen name="splash" component={splash} />
    <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="home" component={HomeTabs} />
      <Stack.Screen name="homelogin" component={homepagewithlogin} />
      <Stack.Screen name="shoppingcart" component={shopping_cart} />

      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="clothes" component={clothes} />
      <Stack.Screen name="Accessories" component={Accessories} />
      <Stack.Screen name="Shoes" component={Shoes} />


      <Stack.Screen name="details" component={Details} />
      <Stack.Screen name="admin" component={admin} />
      <Stack.Screen name="AddSupplier" component={AddSupplier} />
      <Stack.Screen name="add_product" component={add_product} />
      <Stack.Screen name="delete_product" component={delete_product} />
      <Stack.Screen name="modify_product" component={modify_product} />

      <Stack.Screen name="product" component={product} />
      <Stack.Screen name="SearchResult" component={SearchResult} />
      <Stack.Screen name="addAdmin" component={addAdmin} />
      <Stack.Screen name="prodDetails" component={prodDetails} />
      <Stack.Screen name="editprofile" component={editprofile} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="rating" component={rating} />





    </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles=StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(255, 255, 255)',
  },
  header: {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgb(255, 255, 255)',
    alignItems: 'stretch',
    justifyContent: 'center',
    zIndex: 1,
    
  },
  splash: {
    flex: 1,
    alighItems: 'center',
    margin: 0
  },
  text: {
    alignItems: 'center',
    marginTop: 100,
    fontWeight: 'bold'
  },
});

export default App;