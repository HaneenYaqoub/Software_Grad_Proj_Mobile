import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { AuthContext } from "./context";
import {
  SignIn,
  CreateAccount,
  Search,
  Home,
  Details,
  Search2,
  Profile,
  Splash
} from "./Screens";
import HomePage from './HomePage';
const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="Home Page"
      component={CreateAccount}
      options={{ headerShown: false }}
    />
    <AuthStack.Screen
      name="Home"
      component={HomePage}
      options={{ headerShown: false }}
    />
     <AuthStack.Screen
      name="create"
      component={DrawerScreen}
      options={{ headerShown: false }}
    />
     <AuthStack.Screen
      name="profile"
      component={Profile}
      options={{ headerShown: false }}
    />
  </AuthStack.Navigator>
);

const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();
function HomeStackScreen({ navigation }) {
  return (

    <HomeStack.Navigator initialRouteName="HomePage">
      <HomeStack.Screen
              // backgroundColor='green'

        name="HomePage"
        component={HomePage}
        options={{
          // backgroundColor:'green',

          title: 'Home Page', //Set Header Title
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
        }}
      />
    </HomeStack.Navigator>
);
      }



const ProfileStack = createStackNavigator();
const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={Profile}  options={{ headerShown: false }} />
  </ProfileStack.Navigator>
);


const Drawer = createDrawerNavigator();

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





 const DrawerScreen = () => (
  <Drawer.Navigator drawerContentOptions={{
    activeTintColor: '#e91e63',
    itemStyle: { marginVertical: 5 },
    
  }}>
    <Drawer.Screen name="Home" component={HomeStackScreen} />
    <Drawer.Screen name="Profile" component={ProfileStackScreen}  />
  </Drawer.Navigator>
);

const RootStack = createStackNavigator();
const RootStackScreen = ({ userToken }) => (
  <RootStack.Navigator headerMode="none">
    {userToken ? (
      <RootStack.Screen
        name="App"
        component={DrawerScreen}
        options={{
          animationEnabled: false
        }}
      />
    ) : (
      <RootStack.Screen
        name="Auth"
        component={AuthStackScreen}
        options={{
          animationEnabled: false
        }}
      />
    )}
  </RootStack.Navigator>
);




export default () => {
  <NavigationContainer independent={true}>
      
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          itemStyle: { marginVertical: 5 },
          
        }}>
        <Drawer.Screen
          name="HomePage"
          options={{ drawerLabel: 'Home Page' }}
          component={HomeStackScreen} />
          


           
      </Drawer.Navigator>
    </NavigationContainer>
  

  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo(() => {
    return {
      signIn: () => {
        setIsLoading(false);
        setUserToken("asdf");
      },
      signUp: () => {
        setIsLoading(false);
        setUserToken("asdf");
      },
      signOut: () => {
        setIsLoading(false);
        setUserToken(null);
        
      }
    };
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <Splash />;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer independent={true}>
        <RootStackScreen userToken={userToken} />
      </NavigationContainer>
    </AuthContext.Provider>
  );
};