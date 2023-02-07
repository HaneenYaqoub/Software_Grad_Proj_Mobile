import React, { Component } from 'react';
import STYLES from '../../styles';
import COLORS from '../../consts/color';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView, AppRegistry, StyleSheet,Image, TextInput, View, Alert, Button, Text } from 'react-native';
import validator from 'validator';
import SignInScreen from './SignInScreen';
import constraints from './constraints'


export default class AddSupplier extends Component {
 
constructor(props) {
 
    super(props)
    // this.state = {  emailAddress: "example@gmail.com" } };
    this.state = {
 
      SupplierName: '',
      SupplierEmail: '',//example@gmail.com
    
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
  addsupplierfunction = () =>{
 
    
    const { SupplierName }  = this.state ;
    const { SupplierEmail }  = this.state ;
    
    if (!SupplierName || !SupplierEmail) {
      Alert.alert("Required feild is missing!" );
    }
    else if(!validator.isEmail(SupplierEmail))
    {
      Alert.alert("Check Email format" );
    } 
   
   
else{
fetch('http://172.19.82.141/api/add_supplier.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
 
    supplier_name: SupplierName,
 
    supplier_email: SupplierEmail,
 
 
  })
  
 
}).then((response) => response.json())
      .then((responseJson) => {
 
// Showing response message coming from server after inserting records.
        if(responseJson ==='Supplier Added Successfully'){
this.props.navigation.navigate('admin');}//,{paramKey3:UserName}
else{
  Alert.alert(responseJson);

}
      }).catch((error) => {
        console.error(error);
      });
 
    }
  }

  render() {
    return (
 
      <SafeAreaView
      style={{paddingHorizontal: 20, flex: 1, backgroundColor: COLORS.white}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flexDirection: 'row', marginTop: 40}}>
          {/* <Text style={{fontWeight: 'bold', fontSize: 22, color: COLORS.dark}}> */}
          <Image
               style={STYLES.logo}
               source={require('../../assest/lets1.png')}
              
              />
          {/* </Text> */}
          <Text
            style={{fontWeight: 'bold', fontSize: 22, color: COLORS.secondary}}>
            
          </Text>
        </View>
     
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
          placeholder="Supplier Name"
 
          onChangeText={SupplierName => this.setState({SupplierName})}
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
          placeholder="Supplier Email"
 
          onChangeText={SupplierEmail => this.setState({SupplierEmail})}
 
          // Making the Under line Transparent.
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyleClass}
        />
          </View>
         
         
          
          <View style={STYLES.btnPrimary}>
          <TouchableOpacity onPress={this.addsupplierfunction} color="#2196F3" >
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}    onChangeText={(value) => check(value)}
>
              Add Supplier
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
 
AppRegistry.registerComponent('AddSupplier', () => AddSupplier);
// export default AddSupplier;