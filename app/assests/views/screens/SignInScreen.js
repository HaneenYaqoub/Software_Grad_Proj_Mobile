import React, { Component,useState } from 'react';
import STYLES from '../../styles';
import COLORS from '../../consts/color';
import { SafeAreaView,StyleSheet,Image, TextInput, View, Alert, AsyncStorage,Button,Text,ImageBackground} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import AsyncStorage from '@react-native-community/async-storage';
import HomePage from './HomePage';

// Importing Stack Navigator library to add multiple activities.
import { StackNavigator } from 'react-navigation';
import SignUpScreen from './SignUpScreen';
import { Profile } from './Screens';
import { withDelay } from 'react-native-reanimated';
// import { Rating } from "react-native-rating-element";

// Creating Login Activity.
export const Context=React.createContext();
 var average;
export default class SignInScreen extends Component {

  // Setting up Login Activity title.
  static navigationOptions =
   {
      title: 'LoginActivity',
   };
 
constructor(props) {
 
    super(props)
    this.searchInput = React.createRef();

    this.state = {
      timePassed:false,
      UserEmail: '',
      UserPassword: ''

    }
 
  }
  componentDidMount() {
    fetch('http://192.168.1.73/api/retreivestoreRating.php', {
method: 'POST',
headers: {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
},
body: JSON.stringify({


})


}).then((response) => response.json())
    .then((responseJson) => {

     
 global.avg=JSON.parse(JSON.stringify(responseJson));
  global.avg=Number(global.avg).toFixed(1);

  // alert(JSON.parse(avg));

// }
    }).catch((error) => {
      console.error(error);
    });
   
  
  
}
 
  // componentDidMount() {
  //   setTimeout(() => {
  //     Alert.alert('I am appearing...', 'After 5 seconds!');
  //   }, 5000);
  // }

// componentDidMount(){
//   // this.searchInput._root.clear();
//   this.textInput.clear();

// }
skipfun=()=>{
  global.myvar='';
  this.props.navigation.navigate('home',{screen:'home',params:{screen:'home',email:''},});
}
clearr=()=>{
  this.textInput.clear();

  // return (
  //   <View style={styles.container}>
      
  //     <Text style={{color:'red'}}>Write name.</Text>
  //     <TextInput
  //       style={styles.input}
  //       value={'hi'}
  //       // onSubmitEditing={(UserEmail) => this.setState('')}
  //     />
  //   </View>
  // );

}
UserLoginFunction = () =>{
  // this.textInput.clear();

//  const[answer,setanswer]=useState('');
 var { UserEmail }  = this.state ;
 var { UserPassword }  = this.state ;
 const { supplier_email }  = this.state ;


 
fetch('http://192.168.1.73/api/User_Login.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
 
    email: UserEmail,
 
    password: UserPassword
    // supplier_email:supplier_email,
 
  })
 
}).then((response) => response.json())
      .then((responseJson) => {

        // If server response message same as Data Matched
       if(responseJson === 'Data Matched')
        {


          // AsyncStorage.setItem('MyWatchList',JSON.stringify({watchLists: responseJson}));
          // AsyncStorage.setItem('userEmail', JSON.stringify(UserEmail));
    global.myvar=UserEmail;
   

            //Then open Profile activity and send user email to profile activity.
            // this.props.navigation.navigate({name:'home',params:{paramkey:UserEmail}});  
            this.props.navigation.navigate('home',{screen:'home',params:{screen:'home',email:UserEmail},}); 

// alert("success");
        }
        else if(responseJson === 'admin')
        {
          
            // this.props.navigation.navigate('admin');
            this.props.navigation.navigate('admin',{screen:'admin',params:{supplier_em:supplier_email}});       

            
// alert("success");
        }
        else if(responseJson === 'supplier')
        {
         
            // this.props.navigation.navigate('supplier');
            
// alert("success");
        }
        else{

          Alert.alert(responseJson);
        }

      }).catch((error) => {
        console.error(error);
      });
      // setTimeout(() => {this.setState({timePassed: true})}, 5000)
      setTimeout(() => {
        this.textInput.clear();
      this.textInput1.clear();
        // Alert.alert('I am appearing...', 'After 5 seconds!');
      }, 5000);
      // this.textInput.clear();
      // this.textInput1.clear();

 
  }
 
  render() {
    const {goBack} = this.props.navigation;
    // const user={name:'baraa'};
    return (


<SafeAreaView

      style={{paddingHorizontal: 20, flex: 1, backgroundColor: COLORS.white}}>
        <ImageBackground source={require('../../assest/gr3.jpg')} resizeMode="cover" style={styles.image}>
    
        {/* <Rating
  rated={3.7}
  totalCount={5}
  ratingColor="#f1c644"
  ratingBackgroundColor="#d4d4d4"
  size={24}
  readonly // by default is false
  icon="ios-star"
  direction="row" // anyOf["row" (default), "row-reverse", "column", "column-reverse"]
/> */}
                             {/* <Text style={{color:'red',backgroundColor:'blue'}}>{this.props.route.paramss?.namee}</Text> */}

        {/* <Context.Provider value={{email1:this.state.UserEmail}}> */}
          {/* {this.props.children} */}
        {/* <Text> {user.name}</Text> */}
        {/* <HomePage /> */}
        {/* </Context.Provider> */}
      <ScrollView showsVerticalScrollIndicator={false}>
      
{/* <LottieView source={"MyAnimation"} /> */}

        <View style={{flexDirection: 'row', marginTop: 40}}>
          <Text style={{fontWeight: 'bold', fontSize: 22, color: COLORS.dark}}>
            
          </Text>
          {/* <Text
            style={{fontWeight: 'bold', fontSize: 22, color: COLORS.secondary}}> */}

            <Image
               style={STYLES.logo}
                source={require('../../assest/lets1.png')}
              
              />
{/* </Text> */}
        </View>

        <View style={{marginTop: 10}}>
          <Text style={{fontSize: 27, fontWeight: 'bold', color: `#8fbc8f`}}>
            Welcome to our store,
          </Text>
          <Text style={{fontSize: 19, fontWeight: 'bold', color: `#CB68F7`,marginTop:10 }}>
            Sign in to continue
          </Text>
        </View>

        <View style={{marginTop: 10}}>
          <View style={styles.MainContainer}>
            <Icon
              name="mail-outline"
              color={COLORS.light}
              size={20}
              style={STYLES.inputIcon}
            />
           
           <TextInput
          
          // Adding hint in Text Input using Place holder.
          placeholder="Email"
          // clearButtonMode="always" 
              // ref={this.searchInput}
              ref={UserEmail => { this.textInput = UserEmail }}
          onChangeText={UserEmail => this.setState({UserEmail})}
          key={'MyWatchList'}
          // Making the Under line Transparent.
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyleClass}
        />
       {/* {this.UserEmail}; */}
               {/* {console.log(this.UserEmail)} */}

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
          placeholder="Password"
          ref={UserPassword => { this.textInput1 = UserPassword }}

          onChangeText={UserPassword => this.setState({UserPassword})}
 
          // Making the Under line Transparent.
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyleClass}
 
          secureTextEntry={true}
        />
        


          </View>
          <View style={STYLES.btnPrimary}>
          <TouchableOpacity onPress={this.UserLoginFunction} color="#2196F3"
          //  onPress={(register)}
          
          >

            <Text  style={{color: '#fff', fontWeight: 'bold', fontSize: 18}} > 
              Sign In
            </Text>
            </TouchableOpacity>
          </View>

          <View style={STYLES.btnPrimary}> 
      {/* <Button style={{fontSize: 20, color: 'green'}}
  styleDisabled={{color: 'red'}}
  onPress={() =>this.props.navigation.navigate('home') }
  title="Skip"></Button> */}
   <TouchableOpacity onPress={this.skipfun} color="#2196F3"
          //  onPress={(register)}
          >
            <Text  style={{color: '#fff', fontWeight: 'bold', fontSize: 18}} > 
              Skip
            </Text>
            </TouchableOpacity>
      
      </View>
{/* 
          <View
            style={{
              marginVertical: 20,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={STYLES.line}></View>
            <Text style={{marginHorizontal: 5, fontWeight: 'bold',color:`#CB68F7`}}>OR</Text>
            <View style={STYLES.line}></View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={STYLES.btnSecondary}>
              <Text style={{fontWeight: 'bold', fontSize: 16,color:`#8fbc8f`}}>
                Sign in with
              </Text>
              <Image
                style={STYLES.btnImage}
                source={require('../../assest/facebook.png')}
              />
            </View>
            <View style={{width: 10}}></View>
            <View style={STYLES.btnSecondary}>
              <Text style={{fontWeight: 'bold', fontSize: 16,color:`#8fbc8f`}}>
                Sign in with
              </Text>
              <Image
                style={STYLES.btnImage}
                source={require('../../assest/google.png')}
              />
            </View>
          </View> */}
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'center',
            marginTop: 40,
            marginBottom: 20,
          }}>
          <Text style={{color: COLORS.light, fontWeight: 'bold',fontSize:16}}>
               Don`t have an account ?
          </Text>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}>
            <Text style={{color:`#CB68F7`, fontWeight: 'bold',fontSize:16,textDecorationLine: 'underline'}}>
              Sign up
            </Text>
          </TouchableOpacity>
          {/* <custombutton text="Sign In" onPress={onsigninpress}/> */}
        </View>
      </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );




  }
}

// Creating Profile activity.

class ProfileActivity extends Component
{

  // Setting up profile activity title.
   static navigationOptions =
   {
      title: 'ProfileActivity',
    
   };
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
color:'dimgrey',
},

 TextComponentStyle: {
   fontSize: 20,
  color: "#000",
  textAlign: 'center', 
  marginBottom: 15
 }
});