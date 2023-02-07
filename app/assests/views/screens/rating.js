// import React,{Component} from 'react';  
// import { TouchableOpacity } from 'react-native-gesture-handler';
// // import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// const numStars=5;
// export default class Project extends Component {
//   state={
//     rating:1,
//         animation:new Animated.Value(1)
//   }
//   rate=star=>{
//     this.setState({rating:star});
//   }
//   animate=()=>{
//     Animated.timing(this.state.animation,{
//       toValue:2,
//       duration:400,
//       easing:Easing.ease,
//       useNativeDriver:true

//     }).start(()=>{
//       this.state.animation.setValue(1);
//     })
//   }
//   render(){
//     let stars = [];
//     const animateScale = this.state.animation.interpolate({
//       inputRange: [1,1.5,2],
//       outputRange: [1,1.4,1]
//       });
//       const animateOpacity = this.state.animation.interpolate({
//         inputRange: [1,1.2,2],
//         outputRange: [1,0.5,1]
//         });
//         const animateWobble = this.state.animation.interpolate({
//         inputRange: [1,1.25,1.75,2],
//         outputRange: ["0deg",'-3deg','3deg','0deg']
//         });
//       const animationStyle = {
//         transform: [{scale: animateScale},{rotate: animateWobble}],
//         opacity: animateOpacity 
//       };
//     for(let x=1;x<=numStars;x++){
//       stars.push(
//         <TouchableWithoutFeedback
//          key={x}
//          onPress={()=>{this.rate(x),this.animate();
//         }
//       }
//          >
//           <Animated.View style={x<=this.state.rating?animationStyle:""}>
//           <Star filled={x<=this.state.rating? true:false}/>

//           </Animated.View>
         
//           </TouchableWithoutFeedback>
//       )
     

//     }
//     return (
// <View style={styles.container}>
//   <View style={{flexDirection:'row'}}>{stars}</View>
//   <Text>
//         {this.state.rating +'/'+numStars}
//       </Text>
//       {/* <TouchableOpacity onPress={()=>alert(this.state.rating)}><Text>click here</Text></TouchableOpacity> */}
// {/* <Text >screen</Text> */}
// {/* <Star/> */}
// </View>
//     )
//   }
// }
// class Star extends React.Component {
//   render(){
//   return(
//     <FontAwesome
//     name={this.props.filled===true? "star":"star-o"}
//     color={'blue'}
//     size={32}
//     />
//     );
//   }
//   }
//   const styles = StyleSheet.create({
//   container:{
//     flex:1,
//   justifyContent:"center",
//   alignItems:"center"
//   }
//   });

import React,{Component} from 'react';  
import { View, StyleSheet, Text,Alert,TextInput,TouchableWithoutFeedback,Animated,Easing,Button} from 'react-native'; 
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { AppRegistry } from 'react-native';
const numStars=4;
export default class Project extends Component {
  state={
    rating:1,
        animation:new Animated.Value(1)
  }
  rate=star=>{
    this.setState({rating:star});
  }
  animate=()=>{
    Animated.timing(this.state.animation,{
      toValue:2,
      duration:400,
      easing:Easing.ease,
      useNativeDriver:true

    }).start(()=>{
      this.state.animation.setValue(1);
    })
  }
  render(){
    let stars = [];
    const animateScale = this.state.animation.interpolate({
      inputRange: [1,1.5,2],
      outputRange: [1,1.4,1]
      });
      const animateOpacity = this.state.animation.interpolate({
        inputRange: [1,1.2,2],
        outputRange: [1,0.5,1]
        });
        const animateWobble = this.state.animation.interpolate({
        inputRange: [1,1.25,1.75,2],
        outputRange: ["0deg",'-3deg','3deg','0deg']
        });
      const animationStyle = {
        transform: [{scale: animateScale},{rotate: animateWobble}],
        opacity: animateOpacity 
      };
    for(let x=1;x<=numStars;x++){
      stars.push(
        <TouchableWithoutFeedback
         key={x}
         onPress={()=>{this.rate(x),this.animate();
        }
      }
         >
          <Animated.View style={x<=this.state.rating?animationStyle:""}>
          <Star filled={x<=this.state.rating? true:false}/>

          </Animated.View>
         
          </TouchableWithoutFeedback>
      )
    }
    const store=()=>{
      const { rating }  = this.state ;

      fetch('http://192.168.1.73/api/storeRating.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
 
    numStars: rating,
 
  })
  
 
}).then((response) => response.json())
      .then((responseJson) => {
 
// Showing response message coming from server after inserting records.
        if(responseJson ==='stored Successfully'){
this.props.navigation.navigate('home');}//,{paramKey3:UserName}
else{
  Alert.alert(responseJson);

}
      }).catch((error) => {
        console.error(error);
      });
 
    
    }
    return (
<View style={styles.container}>
  <View style={{flexDirection:'row'}}>{stars}</View>
<Text style={{fontSize:24,marginBottom:20,marginTop:15}}>{this.state.rating+'/'+numStars}</Text>
<View style={[{ width: "50%", margin: 10 }]}>
<Button title='Store' color='hotpink'  onPress={store}></Button>
</View>
{/* <Star/> */}
</View>
    )
  }
}
// AppRegistry.registerComponent('custom-component', () => Project);
class Star extends React.Component {
  render(){
  return(
    <FontAwesome
    name={this.props.filled===true? "star":"star-o"}
    color={'#8fbc8f'}
    size={50}
    />
    );
  }
  }
  const styles = StyleSheet.create({
  container:{
    flex:1,
  justifyContent:"center",
  alignItems:"center"
  }
  });