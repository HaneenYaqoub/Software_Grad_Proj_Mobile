import React, { Component } from 'react';
import STYLES from '../../styles';
import COLORS from '../../consts/color';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView, AppRegistry, StyleSheet,Image, TextInput, View, Alert, Button, Text } from 'react-native';
import validator from 'validator';
import SignInScreen from './SignInScreen';
import constraints from '../screens/constraints'
function  check(value) {
  num = value.replace(".", '')
  if(isNaN(num)){
      // Its not a number
      alert('digits only ')
  }else{
     formatnumber( num)}  
}
function  formatnumber(value) {
  if(!value)return value;
  const phonenumber=value.replace(/[^\d]/g,"");
  const phonenumberlength=phonenumber.length;
  if(phonenumberlength<10 ){
    alert('please enter valid phonenumber');
  }
  else{
    return phonenumber;
  }
}
export default class SignUpScreen extends Component {
 
constructor(props) {
 
    super(props)
    // this.state = {  emailAddress: "example@gmail.com" } };
    this.state = {
 
      USerNAme: '',
      UserEmail: '',//example@gmail.com
      UserPAssword: '',
      USerAddress:'',
      UserPhoneNumber:'' //NULL 
    };
 
  } 

//  onChangeHandler = (value) =>{
//   const handleinput=e=>{
//     const formattednumber =formatnumber(e.target.value);
//     this.setState(formatnumber);
//   }
// if(value.maxLength!==10){
//   alert('please enter a valid number!')
// }
//  }
  UserRegistrationFunction = () =>{
 
    
    const { UserName }  = this.state ;
    const { UserEmail }  = this.state ;
    const { UserPassword }  = this.state ;
    const { UserAddress }  = this.state ;
    const { UserPhoneNumber }  = this.state ;
    if (!UserName || !UserEmail || !UserPassword || !UserAddress || !UserPhoneNumber) {
      Alert.alert("Required feild is missing!" );
    }
    else if(!validator.isEmail(UserEmail))
    {
      Alert.alert("Check Email format" );
    } 
    else if(!validator.isMobilePhone(UserPhoneNumber)){
      Alert.alert("Check phone format")
    }
   
//  let  user_name   = this.state.user_name ;
//  let email   = this.state.email ;
//  let password   = this.state.password ;
//  let address   = this.state.address ;
//  let phonenumber   = this.state.phonenumber ;\
else{
fetch('http://192.168.1.73/api/signupadmin.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
 
    user_name: UserName,
 
    email: UserEmail,
 
    password: UserPassword,
    address: UserAddress,
    phonenumber: UserPhoneNumber
 
  })
  
 
}).then((response) => response.json())
      .then((responseJson) => {
 
// Showing response message coming from server after inserting records.
        if(responseJson ==='User Registered Successfully'){
          Alert.alert('added');}
else{
  Alert.alert(responseJson);

}
      }).catch((error) => {
        console.error(error);
      });
 
    }
  }

//  if(user_name.length === 0 || email.length==0 ||password.length==0||address.length==0 ) {
//   alert("Required feild is missing");
// } else {
//   // alert(email);
//   let InsertAPIURL = "http://192.168.1.73/api/signup.php";

//   let headers = {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json'
//   };

//   let Data = {
//     user_name: user_name,
//     email: email,
//     password: password,
//     address: address,
//     // phonenumber: phonenumber
//   };


// fetch(InsertAPIURL, {
//   method: 'POST',
//   headers: headers,
//   body: JSON.stringify(Data)
 
// }).then((response) => response.json())
// .then((responseJson) => {

// // Showing response message coming from server after inserting records.
//   Alert.alert(responseJson);

// }).catch((error) => {
//   // console.error(error);
//   alert(error.message);
// });


// }
  // }
  render() {
    return (
 
      <SafeAreaView
      style={{paddingHorizontal: 20, flex: 1, backgroundColor: COLORS.white}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        
       
        <View style={{marginTop: '50%'}}>
          <View style={styles.MainContainer}>
            <Icon
              name="person-outline"
              color={COLORS.light}
              size={20}
              style={STYLES.inputIcon}
            />
             <TextInput 
          
          // Adding hint in Text Input using Place holder.
          placeholder="Enter Admin Name"
 
          onChangeText={UserName => this.setState({UserName})}
          // value={this.state.user_name}
 
          // Making the Under line Transparent.
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyleClass}
        />
          </View>
          <View style={styles.MainContainer}>
            <Icon
              name="mail-outline"
              color={COLORS.light}
              size={20}
              style={STYLES.inputIcon}
            />
             <TextInput
          
          // Adding hint in Text Input using Place holder.
          placeholder="Enter Admin Email"
 
          onChangeText={UserEmail => this.setState({UserEmail})}
 
          // Making the Under line Transparent.
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyleClass}
        />
          </View>
          <View style={styles.MainContainer}>
            <Icon
              name="lock-outline"
              color={COLORS.light}
              size={20}
              style={STYLES.inputIcon}
            />
             <TextInput 
          
          // Adding hint in Text Input using Place holder.
          placeholder="Enter Admin Password"
 
          onChangeText={UserPassword => this.setState({UserPassword})}
 
          // Making the Under line Transparent.
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyleClass}

          secureTextEntry={true}
        />
          </View>
          <View style={styles.MainContainer}>
            <Icon
              name="lock-outline"
              color={COLORS.light}
              size={20}
              style={STYLES.inputIcon}
            />
            <TextInput 
          
          // Adding hint in Text Input using Place holder.
          placeholder="Enter Admin Address"
 
          onChangeText={UserAddress => this.setState({UserAddress})}
 
          // Making the Under line Transparent.
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyleClass}

        />
          </View>
          <View style={styles.MainContainer}>
            <Icon
              name="lock-outline"
              color={COLORS.light}
              size={20}
              style={STYLES.inputIcon}
            />
           <TextInput 
          
          // Adding hint in Text Input using Place holder.
          placeholder="Enter Admin phone"
 
          onChangeText={UserPhoneNumber => this.setState({UserPhoneNumber})}
          // onChangeText={UserPhoneNumber => this.onChangeHandler(UserPhoneNumber)} 
          // onChangeText={UserPhoneNumber => formatnumber(UserPhoneNumber)}
          // onChangeText={(value) => check(value)}
            
              


          // onChange={e=>handleinput(e)} 
          // onChangeText={UserPhoneNumber => this.setState({mobile: UserPhoneNumber.replace(/[^0-9]/)})}

 
          // Making the Under line Transparent.
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyleClass}
          keyboardType='numeric'
           maxLength={10} 
           
           
          

        />
        {/* <FormControl></FormControl>
          maxLength="10" */}

          </View>
          <View style={STYLES.btnPrimary}>
          <TouchableOpacity onPress={this.UserRegistrationFunction} color="#2196F3" >
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}    onChangeText={(value) => check(value)}
>
              Add Admin
            </Text>
            </TouchableOpacity>
          </View>
        
        </View>
      </ScrollView>
    </SafeAreaView>
  );




  }
}
 
const styles = StyleSheet.create({
 
MainContainer :{
 
justifyContent: 'center',
flex:1,
margin: 10
},
 
TextInputStyleClass: {
 
// textAlign: 'center',
marginBottom: 7,
height: 40,
borderBottomWidth: 1,
// Set border Hex Color Code Here.
 borderColor: '#dcdcdc',
marginLeft:15,
 // Set border Radius.
 borderRadius: 5 ,
 
// Set border Radius.
 //borderRadius: 10 ,
}
 
});
 
AppRegistry.registerComponent('SignUpScreen', () => SignUpScreen);
// export default SignUpScreen;