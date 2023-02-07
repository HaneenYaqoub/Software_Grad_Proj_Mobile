import React, { useState, useRef } from 'react';
// import TextCarousel from react-native-text-carousel;
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthContext } from "./context";
import STYLES from '../../styles';
import COLORS from '../../consts/color';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  TouchableOpacity,
  View,
  Text,
  Image,
  FlatList,
  Dimensions
} from 'react-native';
import { white } from 'react-native-paper/lib/typescript/styles/colors';




    const { width } = Dimensions.get('window');
    const SPACING = 10;
    const THUMB_SIZE = 80;

    const IMAGES = {
      image1: require('../../assest/clothes.webp'),
      image2: require('../../assest/accesories.webp'),
      image3: require('../../assest/shoes.webp'),
      image4: require('../../assest/furniture.jpg'),
      image5: require('../../assest/electronics.jpg'),
      image6: require('../../assest/devices.jpg'),
      image7: require('../../assest/facebook.png')
    };
   
    App = ({navigation,route}) => {


      // const CategoryList = () => {
      //   return (
      //     <View style={STYLES.categoryContainer }>
      //      <TouchableOpacity onPress={() =>navigation.navigate('home')}>
      //     <Text> <Icon
      //             name="home"
      //             color={COLORS.light}
      //             size={20}
      //             style={STYLES.inputIcon }
      //           /> Home </Text>
      //     </TouchableOpacity>
      //     <TouchableOpacity onPress={() =>navigation.navigate('categories')}>
      //     <Text  style={{color:'green' ,fontWeight: 'bold', borderBottomWidth: 2,fontSize: 17}}><Icon
      //             name="category"
      //             color={COLORS.light}
      //             size={20}
      //             style={STYLES.inputIcon}
      //           /> Categories</Text>
      //                 </TouchableOpacity>
      //                 <TouchableOpacity onPress={() =>navigation.navigate('Profile')}>
      
      //     <Text><Icon
      //             name="person-outline"
      //             color={COLORS.light}
      //             size={20}
      //             style={STYLES.inputIcon}
      //           /> Profile</Text>
      //                             </TouchableOpacity>
      //                             <TouchableOpacity onPress={() =>navigation.navigate('SignIn')}>
      
      //     <Text><Icon
      //             name="shopping-cart"
      //             color={COLORS.light}
      //             size={20}
      //             style={STYLES.inputIcon}
      //           /> ShoppingCart</Text>
      //                                  </TouchableOpacity>
      
      
      
      //     </View>
      //   );
      // };





      const [images, setImages] = useState([
      

        { id: '1',navigate:'clothes', image: IMAGES.image1 },
        { id: '2', navigate:'Accessories',image: IMAGES.image2 },
        { id: '3', navigate:'Shoes',image: IMAGES.image3 },
        { id: '4', image: IMAGES.image4 },
        { id: '5', image: IMAGES.image5 },
        { id: '6', image: IMAGES.image6 },
        { id: '7', image: IMAGES.image7 }
      ]);
      
      const [index, setIndex] = useState(0);
      const isCarousel = useRef(null);
// const Stack = createStackNavigator();
// const Item =({item,index})=>{
// const navigation=useNavigation();

      return (

        <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', }}>
                     {/* <Text style={{color:'red'}}>{route.params?.namee}</Text> */}

                  {/* <Text style={{color:'black'}}>  {route.params?.email} </Text> */}
                  <Text>{global.myvar}</Text>

                                    {/* <Text style={{color:'black'}}>  {route.params.currentCity} </Text> */}

                  {/* const currentCity = route.params.currentCity; */}



          {/* <Text style={{ marginTop: 100, color: 'black' }} >clothes</Text> */}
          {/* Title JSX Remains same */}
          {/* Carousel View */}
          <View style={{ flex: 5 , marginTop: 20 }}>
          {/* <CategoryList />  */}


            {/* for images  */}
            <Carousel
              layout='default'
              data={images}
              sliderWidth={width}
              itemWidth={width}
              ref={isCarousel}
              onSnapToItem={index => setIndex(index)}


              renderItem={({ item, index }) => (
                <TouchableOpacity onPress={() => {global.v1=item.navigate; navigation.navigate(item.navigate,{ee:route.params?.email})}}>
                              {/* this.props.navigation.navigate('home',{screen:'home',params:{screen:'home',email:UserEmail},});  */}
                              {/* // <TouchableOpacity onPress={() =>this.props.navigation.navigate('home',{screen:'home',params:{screen:'home',email:''},params:{screen:'categories',email:''},}) } color="#2196F3" */}

                  <Image
                    key={index}
                    style={{ width: '100%', height: '100%' }}
                    resizeMode='contain'
                    source={item.image}

                  // alt={item.title}

                  />
                 </TouchableOpacity>

              )}
            // renderItem2={({ item, index }) => (

            //   <Text
            //     key={index}
            //     style={{ color: 'white' ,marginTop:100}}
            //     resizeMode='contain'
            //     source={item.text}
            //     selectionColor='white'
            //   />

            // )}
            />


            <Pagination
              dotsLength={images.length}
              activeDotIndex={index}
              // carouselRef={isCarousel}
              dotStyle={{
                width: 10,
                height: 10,
                borderRadius: 5,
                marginHorizontal: 8,
                backgroundColor: '#F4BB41',
              }}
              tappableDots={true}
              inactiveDotStyle={{
                backgroundColor: 'black',
                // Define styles for inactive dots here
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
            />

          </View>


        </View>

      );
    };
    

    export default App;
