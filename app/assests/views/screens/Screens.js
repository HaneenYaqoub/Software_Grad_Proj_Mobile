import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { SafeAreaView,Image, TextInput,  Alert} from 'react-native';
import { AuthContext } from "./context";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './HomePage';
import STYLES from '../../styles';
import COLORS from '../../consts/color';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
const Stack = createStackNavigator();
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5
  }
});

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

export const Home = ({ navigation }) => (
  <ScreenContainer>

<Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen
                // backgroundColor='green'

          name="HomePage"
          component={HomePage}
          
          options={{
            // backgroundColor:'green',
            // headerLeft: () => (
            //   <NavigationDrawerStructure
            //     navigationProps={navigation}
            //   />
            // ),
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
      </Stack.Navigator>

    {/* <Text>Master List Screen</Text>
    <Button
      title="React Native by Example"
      onPress={() =>
        navigation.push("Details", { name: "React Native by Example " })
      }
    />
    <Button
      title="React Native School"
      onPress={() =>
        navigation.push("Details", { name: "React Native School" })
      }
    />
    <Button title="Drawer" onPress={() => navigation.toggleDrawer()} /> */}
  </ScreenContainer>
);



export const Profile = ({ navigation }) => {
  const { signOut } = React.useContext(AuthContext);

  return (
    <SafeAreaView
      style={{paddingHorizontal: 20, flex: 1, backgroundColor: COLORS.white}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{justifyContent: 'center',alignItems: 'center',flexDirection: 'row', marginTop: 40,marginLeft:80,borderRadius: 150 / 2,backgroundColor:'#D1D1D3',height:150,width:150,borderColor:COLORS.red}}>
        
              <Icon
              name="add-circle"
              color={COLORS.light}
              size={40}
              style={STYLES.inputIcon}
            />
          
        </View>

        <View style={{marginTop: 20}}>
          <View style={styles.MainContainer}>
            <Icon
              name="person-outline"
              color={COLORS.light}
              size={20}
              style={STYLES.inputIcon}
            />
            <Text style={styles.text}>
                Name
            </Text>
            <Icon
              name="edit"
              color={COLORS.light}
              size={18}
              style={STYLES.inputIcon1}
            />
            
          </View>
            </View>
          <View style={{marginTop: 20}}>
          <View style={styles.MainContainer}>
            <Icon
              name="mail-outline"
              color={COLORS.light}
              size={20}
              style={STYLES.inputIcon}
            />
            <Text style={styles.text}>Email</Text>
            <Icon
              name="edit"
              color={COLORS.light}
              size={18}
              style={STYLES.inputIcon1}
            />
          </View>

          </View> 

          <View style={{marginTop: 20}}>
          <View style={styles.MainContainer}>
            <Icon
              name="lock-outline"
              color={COLORS.light}
              size={20}
              style={STYLES.inputIcon}
            />
            <Text style={styles.text}>Password</Text>
            <Icon
              name="edit"
              color={COLORS.light}
              size={18}
              style={STYLES.inputIcon1}
            />
          </View>

          </View> 

          <View style={{marginTop: 20}}>
          <View style={styles.MainContainer}>
            <Icon
              name="location-on"
              color={COLORS.light}
              size={20}
              style={STYLES.inputIcon}
            />
            <Text style={styles.text}>Address</Text>
            <Icon
              name="edit"
              color={COLORS.light}
              size={18}
              style={STYLES.inputIcon1}
            />
          </View>

          </View> 


          <View style={{marginTop: 20}}>
          <View style={styles.MainContainer}>
            <Icon
              name="phone"
              color={COLORS.light}
              size={20}
              style={STYLES.inputIcon}
            />
            <Text style={styles.text}>Phonenumber</Text>
            <Icon
              name="edit"
              color={COLORS.light}
              size={18}
              style={STYLES.inputIcon1}
            />
          </View>

          </View> 

          <View style={STYLES.btnPrimary}>
          <TouchableOpacity color="#2196F3" onPress={() => signOut() }>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>
              Log out
            </Text>
            </TouchableOpacity>
          </View>
        
      </ScrollView>
    </SafeAreaView>
  );
};

export const Splash = () => (
  <ScreenContainer>
    <Text>Loading...</Text>
  </ScreenContainer>
);

// export const signOut = ({ navigation }) => {
//   const { signOut } = React.useContext(AuthContext);

//   return (
//     <ScreenContainer>
//       <Text>Sign In Screen</Text>
//       <Button title="Sign In" onPress={() => signOut()} />
//       <Button
//         title="Create Account"
//         onPress={() => navigation.push("CreateAccount")}
//       />
//     </ScreenContainer>
//   );
// };

export const CreateAccount = () => {
   const { signUp } = React.useContext(AuthContext);

  return (
    <ScreenContainer>
      <Text>Welcome to Our Store</Text>
      <Button title="Go To Home Page" backgroundColor='green' onPress={() => signUp()} />
    </ScreenContainer>
  );
};