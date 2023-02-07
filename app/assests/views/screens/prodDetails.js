import React, { Component } from 'react';
import STYLES from '../../styles';
import COLORS from '../../consts/color';
import { SafeAreaView,StyleSheet,Image, TextInput, View, Alert, AsyncStorage,Text,ActivityIndicator} from 'react-native';
import {FlatList, ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { AuthContext } from "./context";
import App1 from './App1';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { Router } from 'express';
import ListView from "deprecated-react-native-listview";

const Stack = createStackNavigator();

 const Profiley = ({ navigation }) => {

    const { signOut } = React.useContext(AuthContext);
  
    return (
      <ScreenContainer>

        <Text>Profile Screen</Text>
        <Button title="Drawer" onPress={() => navigation.toggleDrawer()} />
        <Button title="Sign Out" onPress={() => signOut()} />
      </ScreenContainer>
    );
  };
  const App = () => {
 


    return (

      <NavigationContainer independent={true}>
        
        <Stack.Navigator screenOptions={{header: () => null}}>
         
          <Stack.Screen name="Profile1" component={Profile} />
  
          {/* <Stack.Screen name="categories" component={Categories} /> */}
  
          {/* <Stack.Screen name="Home" component={HomePage} /> */}
  
        </Stack.Navigator>
      </NavigationContainer>
    );
  };

//  const Profile =({navigation,route})=> {
//   this.RetreiveFunction;
  class ProfileActivity extends Component{
  
    static navigationOptions = {
      title: "ProfileActivity"
    };
  
    
    constructor(props) {
 
      super(props);
 
    this.state = {
 
      // isLoading: true
 
    }
  }
 
  static navigationOptions =
  {
     title: 'ShowStudentListActivity',
  };
  // componentDidMount() {
  //   fetch('http://192.168.1.73/api/FetchData.php')
  //     .then(response => response.json())
  //     .then(data => this.setState({ name: data.UserEmail, name: data.UserPassword  }));
  // }



  

// componentDidMount() {
//     <TextInput  placeholder="Email"
 
//     // onChangeText={UserEmail => this.setState({UserEmail})}
//     // Making the Under line Transparent.
//     underlineColorAndroid='transparent'
// value={this.props.route.params.email}
// // value={global.myvar}
//     style={styles.TextInputStyleClass}
//     />
    // <Text>{this.props.route.params.email}</Text>
//   fetch('http://192.168.1.73/api/ShowAllList.php',{

//     method: 'POST',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
   
   
//       email: this.props.route.params.email,
//     //   email:global.myvar,
   
   
//     })
//   })
//       .then((response) => response.json())
//       .then((responseJson) => {
//         let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
//         this.setState({
//           isLoading: false,
//           dataSource: ds.cloneWithRows(responseJson),
//         }, function() {
//           // In this block you can do something with new state.

//         });
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }
 
//   GetStudentIDFunction=(id)=>{

//        this.props.navigation.navigate('prodDetails', { 

//          NAME: id,
//         //  EMAIL : email,
//         //  PASSWORD : password,
//         //  ADDRESS : address,
//         //  PHONE_NUMBER : phonenumber

//        });

//   }

  ListViewItemSeparator = () => {
    return (
      <View
        style={{
          height: .5,
          width: "100%",
          backgroundColor: "#000",
        }}
      />
    );
  }












   







    //    DeleteStudentRecord = () =>{
        
    //     fetch('http:192.168.1.73/api/Logout.php', {
    //     method: 'POST',
    //     headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
      
    //       email : this.state.UserEmail,
    //       password:this.state.UserPassword,
      
    //     })
      
    //     }).then((response) => response.json())
    //     .then((responseJson) => {
      
    //       // Showing response message coming from server after inserting records.
    //       Alert.alert(responseJson);
      
    //     }).catch((error) => {
    //        console.error(error);
    //     });

    //     this.props.navigation.navigate('SignIn');
        

    // }




    //    UserLogoutFunction = () =>{
 
    //     const { UserEmail }  = this.state ;
    //     const { UserPassword }  = this.state ;
        
        
    //    fetch('http://192.168.1.73/api/Logout.php', {
    //      method: 'POST',
    //      headers: {
    //        'Accept': 'application/json',
    //        'Content-Type': 'application/json',
    //      },
    //      body: JSON.stringify({
        
    //        email: UserEmail,
        
    //        password: UserPassword,
        
    //      })
        
    //    }).then((response) => response.text())
    //          .then((responseJson) => {
           
    //            // If server response message same as Data Matched
    //           if(responseJson === 'deleted successfully')
    //            {
       
    //                //Then open Profile activity and send user email to profile activity.
    //                this.props.navigation.navigate('SignIn');
                   
    //    // alert("success");
    //            }
    //            else{
       
    //              Alert.alert(responseJson);
    //            }
       
    //          }).catch((error) => {
    //            console.error(error);
    //          });
        
        
    //      }
        


        //  state = {data : []};
        //  componentWillMount(){
        //      this.setState({data : this.RetreiveFunction});
        //  }
        render() {
        //   if (this.state.isLoading) {
        //     return (
        //       <View style={{flex: 1, paddingTop: 20}}>
        //         <ActivityIndicator />
        //       </View>
        //     );
        //   }

          
//           // Adding hint in Text Input using Place holder.
//           placeholder="PhoneNumber"
//           placeholderTextColor="#dcdcdc"
//           onChangeText={UserPhone => this.setState({UserPhone})}
//           // value={route.params.paramKey}
//           // Making the Under line Transparent.
//           underlineColorAndroid='transparent'
//           style={styles.text}
//           // style={styles.TextInputStyleClass}
//           editable={false}
//         />
//             <Icon
//               name="edit"
//               color={COLORS.light}
//               size={18}
//               style={STYLES.inputIcon1}
//             />
//           </View>

//           </View> 

//           <View style={STYLES.btnPrimary}>
//           <TouchableOpacity color="#2196F3" onPress={  this.DeleteStudentRecord}>
//             <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>
//               Log out
//             </Text>
//             </TouchableOpacity>
//           </View>
        
//       </ScrollView>
//     </SafeAreaView>
//   );

    // }
  // };
  return (
       <View style={styles.MainContainer_For_Show_StudentList_Activity}>

                  {/* <Text style={{color:'black'}}>  {this.props.route.name11} </Text> */}

                  <Text style={{color:'black',backgroundColor:'red'}}>  params is :{this.props.route.params.name11} </Text>

{/* <Text>{global.myvar}</Text> */}

{/* <Text>{this.props.route.params.email}</Text> */}
















    

    </View>
  );





  // }
   
// }

// Creating Profile activity.

// class ProfileActivity extends Component
// {

//   // Setting up profile activity title.
//    static navigationOptions =
//    {
//       title: 'ProfileActivity',
    
   };
  }
        
const styles = StyleSheet.create({
 
MainContainer :{
 
justifyContent: 'center',
flex:1,
margin: 5,
},
 
TextInputStyleClass: {
  color: '#cb68f7',
// textAlign: 'center',
marginBottom: 7,
height: 40,
borderBottomWidth: 1,
// Set border Hex Color Code Here.
 borderColor: '#dcdcdc',
 fontSize: 18,
 // Set border Radius.
 borderRadius: 5 ,
 marginLeft:20,
},

 TextComponentStyle: {
   fontSize: 20,
  color: "#000",
  textAlign: 'center', 
  marginBottom: 15
 },
 text:{
    color:'black',
    marginLeft:170,
 }

});
export default ProfileActivity;