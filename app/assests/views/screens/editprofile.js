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
import { editable } from 'deprecated-react-native-prop-types/DeprecatedTextInputPropTypes';
import validator from 'validator';

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
var uname;
var upass;
var uemail;
var uaddr;
var uphone;
  class ProfileActivity extends Component{
  
    static navigationOptions = {
      title: "ProfileActivity"
    };
  
    
    constructor(props) {
 
      super(props);
 
    this.state = {
      isLoading: true,
      UserName: '',
      UserEmail: '',//example@gmail.com
      UserPassword: '',
      UserAddress:'',
      UserPhoneNumber:'' //NULL 
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



  

componentDidMount() {
    <TextInput  placeholder="Email"
 
    onChangeText={UserEmail => this.setState({UserEmail})}
    // Making the Under line Transparent.
    underlineColorAndroid='transparent'
// value={this.props.route.params.email}
value={global.myvar}
    style={styles.TextInputStyleClass}
    />

  fetch('http://192.168.1.73/api/ShowAllList.php',{

    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
   
   
      // email: this.props.route.params.email,
      email:global.myvar,
   
   
    })
  })
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson),
        }, function() {
          // In this block you can do something with new state.

        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
 
  GetStudentIDFunction=(user_name,email, password, address, phonenumber)=>{

       this.props.navigation.navigate('editprofile', { 

         NAME: user_name,
         EMAIL : email,
         PASSWORD : password,
         ADDRESS : address,
         PHONE_NUMBER : phonenumber

       });

  }

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

  changeColor = () => {
    this.setState({UserName: 'uname'});
  }
editprof=()=>{

  var { UserName}   = this.state ;
        
    var { UserEmail }  = this.state ;
    var { UserPassword }  = this.state ;
    var { UserAddress }  = this.state ;
    var { UserPhoneNumber }  = this.state ;
    // alert(this.state.UserName);

    if (!UserName ) {
        // this.changeColor
        // this.setState({UserName: 'uname'});// هاي لازم هون اعرقها لاني لما اعمل اليرت تحت هو بشوفها فاضية بس برضو ما طبعها!!

        // uname=>this.setState(uname);
        UserName=uname;
        // alert(UserName);
        // alert(UserName);
        // alert(this.state.UserName);

        // this.setState(prevState => {
        //   let jasper = Object.assign({}, prevState.jasper);  // creating copy of state variable jasper
        //   jasper.name = 'someothername';                     // update the name property, assign a new value                 
        //   return { jasper };                                 // return new object jasper object
        // })
        // this.setState(UserName);
    //   Alert.alert("Required feild is missing!" );
    }
    if (!UserEmail ) {
        // UserEmail=>this.setState(uemail);
        UserEmail=uemail;
    //   Alert.alert("Required feild is missing!" );
    }

    if (!UserPassword ) {
        UserPassword=upass;
    //   Alert.alert("Required feild is missing!" );
    }
    if (!UserAddress ) {
        UserAddress=uaddr;
    //   Alert.alert("Required feild is missing!" );
    }
    if (!UserPhoneNumber ) {
        UserPhoneNumber=uphone;
      // Alert.alert(UserPhoneNumber);
      fetch('http://192.168.1.73/api/editprofile.php',{

    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
   
   
      // email: this.props.route.params.email,
      email:global.myvar,
      user_name: UserName,
 
   
      password: UserPassword,
      address: UserAddress,
      phonenumber: UserPhoneNumber
   
    })
  })
      .then((response) => response.json())
      .then((responseJson) => {
       
        if(responseJson ==='updated Successfully'){
            // alert('product not found');
            this.props.navigation.navigate('Profile');
            alert('please log out if you want to see information you updated');
          }
          else{
            alert(responseJson);
          }
      })
      .catch((error) => {
        console.error(error);
      });
  


    }
    else if(!validator.isEmail(UserEmail))
    {
      Alert.alert("Check Email format" );
    } 
    else if(!validator.isMobilePhone(UserPhoneNumber)){
      Alert.alert("Check phone format")
    }
    else{
      // global.myvar=this.state.UserEmail;
    fetch('http://192.168.1.73/api/editprofile.php',{

    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
   
   
      // email: this.props.route.params.email,
      email:global.myvar,
      user_name: UserName,
 
   
      password: UserPassword,
      address: UserAddress,
      phonenumber: UserPhoneNumber
   
    })
  })
      .then((response) => response.json())
      .then((responseJson) => {
       
        if(responseJson ==='updated Successfully'){
            // alert('product not found');
            this.props.navigation.navigate('Profile');
          }
          else{
            alert(responseJson);
          }
      })
      .catch((error) => {
        console.error(error);
      });
  }
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
          if (this.state.isLoading) {
            return (
              <View style={{flex: 1, paddingTop: 20}}>
                <ActivityIndicator />
              </View>
            );
          }

          
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

                  {/* <Text style={{color:'black'}}>  {this.props.route.params?.email} </Text> */}


{/* <Text>{global.myvar}</Text> */}





      <ListView
// <FlatList
        dataSource={this.state.dataSource}

        renderSeparator= {this.ListViewItemSeparator}

        renderRow={ (rowData) => <Text style={styles.rowViewContainer} 

                  onPress={this.GetStudentIDFunction.bind(
                    this, 
                    uname=rowData.user_name,
                     uemail=rowData.email, 
                    upass= rowData.password, 
                     uaddr=rowData.address, 
                     uphone=rowData.phonenumber
                     )} 
>
    {/* <Text>{uname}</Text> */}
  
                 {/* <Text style={{color:'red'}}>{rowData.user_name}{"\n"} </Text> 
                 {/* <br/> */}
                 {/* <Text style={{color:'red'}}>{rowData.email} </Text>  */}
                  {/* {rowData.address}  */}
                  {/* {rowData.phonenumber}  */} 

                  {/* <View style={{justifyContent: 'center',alignItems: 'center',flexDirection: 'row', marginTop: 40,marginLeft:80,borderRadius: 150 / 2,backgroundColor:'#D1D1D3',height:150,width:150,borderColor:COLORS.red}}>
        
        <Icon
        name="add-circle"
        color={COLORS.light}
        size={40}
        style={STYLES.inputIcon}
      />
    
  </View>    */}

  <View style={{marginTop: 20}}>
    <View style={styles.MainContainer}>
      <Icon
        name="person-outline"
        color={COLORS.light}
        size={20}
        style={STYLES.inputIcon}
      />
      <TextInput
    
    // Adding hint in Text Input using Place holder.
    // placeholder="Name"
    placeholderTextColor="#dcdcdc"
    placeholder={rowData.user_name}
    // Making the Under line Transparent.
    underlineColorAndroid='transparent'
    style={styles.text}
    // style={styles.TextInputStyleClass}
    // editable={false}
    onChangeText={UserName=>{this.setState({UserName})}}
    editable={true} 

   
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
      {/* <Text style={{color:'black'}}>Param:{this.props.route.params.email}</Text> */}
      <TextInput
    
    // Adding hint in Text Input using Place holder.
    // placeholder="Email"
    placeholderTextColor="#dcdcdc"
    placeholder={rowData.email}
    value={global.myvar}

    // value={'Email'}
    // Making the Under line Transparent.
    underlineColorAndroid='transparent'
    style={styles.text}
    // style={styles.TextInputStyleClass}
    onChangeText={UserEmail=>{this.setState({UserEmail})}}

    editable={true}
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
      <TextInput
    
    // Adding hint in Text Input using Place holder.
    // placeholder="Password"
    placeholderTextColor="#dcdcdc"
    placeholder={rowData.password}
    // Making the Under line Transparent.
    underlineColorAndroid='transparent'
    style={styles.text}
    // style={styles.TextInputStyleClass}
    editable={true}
    onChangeText={UserPassword=>{this.setState({UserPassword})}}

    secureTextEntry={true}
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
     <TextInput
    
    // Adding hint in Text Input using Place holder.
    // placeholder="Address"
    placeholderTextColor="#dcdcdc"
    placeholder={rowData.address}
    // Making the Under line Transparent.
    underlineColorAndroid='transparent'
    style={styles.text}
    // style={styles.TextInputStyleClass}
    onChangeText={UserAddress=>{this.setState({UserAddress})}}

    editable={true}
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
      <TextInput
    
    // Adding hint in Text Input using Place holder.
    placeholder={rowData.phonenumber}
    placeholderTextColor="#dcdcdc"
    // value={rowData.phonenumber}
    // Making the Under line Transparent.
    underlineColorAndroid='transparent'
    style={styles.text}
    // style={styles.TextInputStyleClass}
        onChangeText={UserPhoneNumber=>{this.setState({UserPhoneNumber})}}

    editable={true}
  />
      
    </View>

     

    <View style={STYLES.btnPrimary1}>
    <TouchableOpacity color="#2196F3" onPress={this.editprof}>
      <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>
        save
      </Text>
      </TouchableOpacity>
    </View>
    </View>








                  
                  </Text> }

      />

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