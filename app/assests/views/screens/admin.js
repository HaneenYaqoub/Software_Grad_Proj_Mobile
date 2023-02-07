import 'react-native-gesture-handler';
import React,{Component} from 'react';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView,FlatList,StyleSheet, View, Text, TextInput, Image, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/color';
// import plants from '../../consts/plants';
import  { useEffect, useRef } from 'react'
import STYLES from '../../styles';
// import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import { Animations } from '../../consts/Animations';
import  MyHeader  from '../../consts/MyHeader';
import * as Animatable from 'react-native-animatable'
import Icons from 'react-native-paper/src/components/Icon';
// import { Component } from 'react/cjs/react.production.min';

// import STYLES from '../../styles';

// const colorAr = [
//   // '#637aff',
//  ' https://www.google.ps/url?sa=i&url=https%3A%2F%2Fwww.britannica.com%2Fscience%2Fflower&psig=AOvVaw1Yc0EC3LIaIO8wkTVHVypI&ust=1667309338832000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCKCWzrrJivsCFQAAAAAdAAAAABAD'
// //   <Image
// //   style={STYLES.btnImage}
// //   source={require('../../assest/facebook.png')}
// // />
//   // '#60c5a8',
//   // '#CCCCCC',
//   // '#ff5454',
//   // '#039a83',
//   // '#dcb834',
//   // '#8f06e4',
//   // 'skyblue',
//   // '#ff4c98',
// ]

// const bgColor = (i) => colorAr[i % colorAr.length];






const ListItem = ({ item, index, animation, navigation }) => {
  UserLoginFunction = () =>{
 
    const { name }  = this.state ;
    const { available_quantity }  = this.state ;
    const { price }  = this.state ;
    const { path }  = this.state ;
    const { size }  = this.state ;
    const { color }  = this.state ;

    
    
   fetch('http://192.168.1.73/api/clothes.php', {
     method: 'POST',
     headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({
    
       name: name,
    
       available_quantity:  available_quantity,
    
     })
    
   }).then((response) => response.json())
         .then((responseJson) => {
   
           // If server response message same as Data Matched
          if(responseJson === 'Data Matched')
           {
   
               //Then open Profile activity and send user email to profile activity.
               this.props.navigation.navigate('home');
               
   // alert("success");
           }
          //  else if(responseJson ==='Supplier Added Successfully'){

          //  }

           else{
   
             Alert.alert(responseJson);
           }
   
         }).catch((error) => {
           console.error(error);
         });
    
    
     }


  return (
    <Animatable.View
      animation={animation}
      duration={1000}
      delay={index * 300}
    >
     
      <View style={style.listItem}>
      <TouchableOpacity onPress={() => navigation.navigate('addAdmin')}>

        <View style={{margin:10}}>
      <Image
                style={{width:100,height:100}}
                source={require('../../assest/admin.jpg')}
              />
              <Text style={{color:'#8fbc8f',fontSize:25,fontWeight:'bold'}}>Add Admin</Text>
              </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('AddSupplier')}>
              <View style={{margin:10}}>
              <Image style={{width:100,height:100,marginBottom:10}}
                source={require('../../assest/supplier.png')}
              />
                            <Text style={{color:'#8fbc8f',fontSize:25,fontWeight:'bold'}}>Add Supplier</Text>

              </View>
              </TouchableOpacity>

              <View style={{margin:10}}>
              <Image
                style={{width:100,height:100}}
                source={require('../../assest/categoryicon.png')}
              />
                                          <Text style={{color:'#8fbc8f',fontSize:25,fontWeight:'bold'}}>Edit Categories</Text>

                            </View>
<TouchableOpacity onPress={() => navigation.navigate('product')}>
              <View style={{margin:10}}>
                
              <Image style={{width:100,height:100}}
                source={require('../../assest/product.webp')}
              />
                                                        <Text style={{color:'#8fbc8f',fontSize:25,fontWeight:'bold'}}>Edit Products</Text>

              </View>
              </TouchableOpacity>
              {/* <Icon
              name="category"
              color={COLORS.light}
              size={50}
              /> */}
      {/* <ImageBackground > */}
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate('Screen')}>
            
          {/* <View style={[style.image]} /> */}
        
        </TouchableOpacity>
        {/* </ImageBackground> */}
        <View style={style.detailsContainer}>
          {/* <Text style={style.name}>Lorem ipsum</Text> */}
          {/* <Icon type={Icons.Feather} name="plus" size={20} color={COLORS.black} /> */}
         
        </View>
      </View>
    </Animatable.View>
  )
}


 export default function ListScreen({ route, navigation }) {

  const viewRef = useRef(null);
  const animation = Animations[Math.floor(Math.random() * Animations.length)]
  console.log('====================================');
  console.log(Math.floor(Math.random() * Animations.length), Math.random() * Animations.length, Animations.length);
  console.log('====================================');

  const renderItem = ({ item, index }) => (
    <ListItem item={item} index={index} animation={animation} navigation={navigation} />)

  const ListEmptyComponent = () => {
    const anim = {
      0: { translateY: 0 },
      0.5: { translateY: 50 },
      1: { translateY: 0 },
    }
    return (
      <View style={[style.listEmpty]}>
        <Animatable.Text
          animation={anim}
          easing="ease-in-out"
          duration={3000}
          style={{ fontSize: 24 }}
          iterationCount="infinite">
          Empty List!
        </Animatable.Text>
        {/* <Image
                style={STYLES.btnImage}
                source={require('../../assest/facebook.png')}
              /> */}
      </View>
    )
  }
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      viewRef.current.animate({ 0: { opacity: 0.5, }, 1: { opacity: 1 } });
    })
    // ToastAndroid.show(animation+ ' Animation', ToastAndroid.SHORT);
    return () => unsubscribe;
  }, [navigation])

  return (
    <View style={[style.container]}>
      {/* <MyHeader
        back
        onPressBack={() => navigation.goBack()}
        title={route.name}
        right="more-vertical"
        onRightPress={() => console.log('right')}
      /> */}
      <Animatable.View
        ref={viewRef}
        easing={'ease-in-out'}
        duration={500}
        style={style.container}
        >
        <FlatList
          data={Array(1).fill('')}
          keyExtractor={(_, i) => String(i)}
          numColumns={2}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
          ListEmptyComponent={ListEmptyComponent}
        />
      </Animatable.View>
    </View>
  )
}



  


const style = StyleSheet.create({
  categoryContainer: {
    // flexDirection: 'row',
    marginTop: 30,
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  categoryText: {fontSize: 16, color: 'grey', fontWeight: 'bold'},
  categoryTextSelected: {
    color: COLORS.green,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: COLORS.green,
  },
  card: {
    height: 225,
    backgroundColor: COLORS.light,
    // width,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
  },
  header: {
    marginTop: 10,
    // flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchContainer: {
    height: 50,
    backgroundColor: COLORS.light,
    borderRadius: 10,
    flex: 1,
    // flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    color: COLORS.dark,
  },
  sortBtn: {
    marginLeft: 10,
    height: 50,
    width: 50,
    borderRadius: 10,
    backgroundColor: COLORS.green,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
    marginTop:35,
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'rgba(0, 0, 0, .08)',
  },
  listEmpty: {
    // height: Dimensions.get('window').height,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listItem: {
    height: '100%',
    width:'100%',
    // width: Dimensions.get('window').width / 2 - 16,
    backgroundColor: 'white',
    marginLeft: '22%',
    // marginRight: '25%',
marginTop:'7.7%',
// marginBottom:'20%',

    borderRadius: 10,
    alignItems:'center',
    justifyContent:'center',
  },
  image: {
    height: 150,
    margin: 5,
    borderRadius: 10,
    backgroundColor: COLORS.primary,
  },
  detailsContainer: {
    paddingHorizontal: 16,
    paddingVertical: 5,
    // flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container: {
    flex: 1,
},
rowView: {
    // flexDirection: 'row',
    alignItems: 'center',
},
separator: {
    height: 0.3,
    width: '100%',
    backgroundColor: COLORS.gray,
    opacity: 0.8,
    alignItems:'center',
    justifyContent:'center',
    margin:'50%',
},
boldText: {
    fontWeight: 'bold',
},
contentContainerStyle: {
    paddingBottom: 200,
},
contentContainerStyle2: {
    paddingBottom: 100,
},
});


// export default Cat;
// export default ListScreen;