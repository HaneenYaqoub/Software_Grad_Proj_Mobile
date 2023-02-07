// import SignInScreen from './components/defis' 
// import Quote from './components/quote'
import LottieView from 'lottie-react-native';
import React, { Component } from 'react';
import { SafeAreaView,StyleSheet,Image, TextInput, View, Alert, AsyncStorage,Button,Text} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
export default class Betty extends Component {
constructor(props){
 super(props)
//  this.state = {
//   component : <Quote />
//  }
}


componentDidMount(){

     // Start counting when the page is loaded
     this.timeoutHandle = setTimeout(()=>{
          // Add your logic for the transition
          // this.setState({ component: <SignInScreen /> })
          this.props.navigation.navigate('SignIn')
        }, 5000);  //5000 milliseconds
    //  }, 5000);
}

componentWillUnmount(){
     clearTimeout(this.timeoutHandle); 
}

render() {
return (
  <View style={styles.splash}>
        <LottieView source={require('../../assest/planePath.json')}
          autoPlay
          loop={false}
          resizeMode='cover'
          onAnimationFinish={() => {
            console.log('animation finished')
            // setLoaded(true);
        }}
        />
      </View>
  // this.state.component
);
}

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