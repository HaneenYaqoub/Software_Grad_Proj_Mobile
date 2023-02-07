import {React,Component} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  Button,
  TouchableWithoutFeedback,Animated,Easing,
  Modal, 
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/color';
import plants from '../../consts/plants';
import SignInScreen from './SignInScreen';
import STYLES from '../../styles';
import { color } from 'react-native-reanimated';
import { Router } from 'express';
import { Context } from './SignInScreen';
import { json } from 'body-parser';
import { Avatar } from 'react-native-paper';
import  CheckBox  from "@react-native-community/checkbox";
// import { Icon } from 'react-native-paper/lib/typescript/components/Avatar/Avatar';
var cardsize;
var cardmedium;
var cardlarge;

var xxname;
var xxprice;
var xxsize; // from clothes
var xxlarge;
var xxid; // from card
var xxmedium;
var xxpic;
var xxquant;
var small;
var item;
var clearcheckbox=false;
var check1;
var check2;
var check3;
var sumprice=0;
var newprice;

const width = Dimensions.get('window').width / 2 - 30;
const numStars=4;
// var avg;
class HomePage extends Component{
  // state={
  //   rating:1,
  //       // animation:new Animated.Value(1)
  // }
  rate=star=>{
    (global.avg=star);
  }
  // animate=()=>{
  //   Animated.timing(this.state.animation,{
  //     toValue:2,
  //     duration:400,
  //     easing:Easing.ease,
  //     useNativeDriver:true

  //   }).start(()=>{
  //     this.state.animation.setValue(1);
  //   })
  //   }
  // const [P_Name, SetName] = React.useState('');
  static navigationOptions =
  {
     title: 'LoginActivity',
  };

constructor(props) {

   super(props)

   this.state = {
  

P_Name:'',
isSelected:false,
isSelected1:false,
isSelected2:false,
selectedValue:'',
isLoading: true,
userSelected: [],
showModal: false,
dataSource: [],
dataSource1: [],

selectedId: '',
modalVisible: false,
// newname:'',
// Pprice: '',//example@gmail.com
// Pcategory: '',
showModal1: false,
status: "Pending",
amt:'',
// rating:1,
//       animation:new Animated.Value(1)
   }

 }
 

componentDidMount(){
  fetch('http://192.168.1.73/api/frequnt_rows.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({

        //  Pic:Pic,
        // uemail: global.myvar,
      }),
    }
    )
      .then((response) => response.json())
      .then((responseJson) => {
        // responseJson.map(x=>console.log(xxid=x.id));
        // responseJson.map(x=>console.log(cardsize=x.size));
        // responseJson.map(x=>console.log(cardmedium=x.medium));
        // responseJson.map(x=>console.log(cardlarge=x.large));

        this.setState({ dataSource: responseJson });
        // alert(responseJson);




      })

      .catch((error) => {
        console.error(error);
      });
   
  
}
   search=()=>{
    if(!this.state.P_Name){
      alert("nothing entered to search!");
    }
    else{
      const { P_Name }  = this.state ;

    fetch('http://192.168.1.73/api/search.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
     
        pname: P_Name,
     
        
        // supplier_email:supplier_email,
     
      })
     
    }).then((response) => response.json())
          .then((responseJson) => {
    
            // If server response message same as Data Matched
           if(responseJson === 'product found')
            {
              

              // AsyncStorage.setItem('MyWatchList',JSON.stringify({watchLists: responseJson}));
              // AsyncStorage.setItem('userEmail', JSON.stringify(UserEmail));
    
                //Then open Profile activity and send user email to profile activity.
                // this.props.navigation.navigate({name:'home',params:{paramkey:UserEmail}});  
                 this.props.navigation.navigate('SearchResult',{pname:P_Name}); 
                  
                  


                // navigation.navigate('SearchResult'); 
                    
    // alert("success");
            }
           
           
            else{
    
              alert(responseJson);
            }
    
          }).catch((error) => {
            console.error(error);
          });
     
     
      }
    }
  // const [catergoryIndex, setCategoryIndex] = React.useState(0);

  // const categories = ['Home','Profile','Categories','ShoppingCard'];

  // const CategoryList = () => {
  //   return (
  //     <View style={style.categoryContainer}>
  //       {categories.map((item, index) => (
  //         <TouchableOpacity
  //           key={index}
  //           activeOpacity={0.8}
  //           onPress={() => setCategoryIndex(index)}>
  //           <Text 
  //             style={[
  //               style.categoryText,
  //               catergoryIndex === index && style.categoryTextSelected,
  //             ]}>
  //             {item}
  //           </Text>
  //         </TouchableOpacity>
  //       ))}
  //     </View>
  //   );
  // };







  // const CategoryList = () => {
  //   return (
  //     <View style={style.categoryContainer }>
        
  //      <TouchableOpacity onPress={() =>navigation.navigate('home')}>
  //     <Text style={{color:'green' ,fontWeight: 'bold', borderBottomWidth: 2,fontSize: 17}}> <Icon
  //             name="home"
  //             color={COLORS.light}
  //             size={20}
  //             style={STYLES.inputIcon }
  //           /> Home </Text>
  //     </TouchableOpacity>
  //     <TouchableOpacity onPress={() =>navigation.navigate('categories')}>
  //     <Text><Icon
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
  //     <TouchableOpacity onPress={() =>navigation.navigate('SignIn')}>

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

  // const param=route.params;
  static contextType=Context;
  renderItem = ({ item }) => {
    var {showModal}=this.state;

    // const backgroundColor = item.id === this.state.selectedId ? "#6e3b6e" : "#f9c2ff";
    // const color = item.id === this.state.selectedId ? 'white' : 'black';
    // const Item = ({ item, onPress, backgroundColor, textColor }) => (
    //   <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    //     <Text style={[styles.title, textColor]}>{item.pname}</Text>
    //   </TouchableOpacity>
    // );
    this.newname = item.id;



    sett = ({ item }) => {
      selectedId => this.setState(selectedId);
    }
    // const Item = ({ title }) => (
    //   <View style={styles.item}>
    //     <Text style={styles.title}>{title}</Text>
    //   </View>
    // );
    var small;
var medium;
var large;

    return (
    
      <View >

<TouchableOpacity
         activeOpacity={0.8}
         onPress={() =>{
          check1=false;
          check2=false;
          check3=false;
          this.state.isSelected=false;
          this.state.isSelected1=false;
          this.state.isSelected2=false;

          fetch('http://192.168.1.73/api/Showprodinfo.php', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({

              //  Pic:item.Pic,
              pname: item.pname,
              // price:newprice.toString(),
              //  category:Pcategory,

            })


          }).then((response) => response.json())
            .then((responseJson) => {
              xxname = item.pname;
              xxprice=item.price;
              xxpic=item.Pic;
              xxquant=item.available_quantity;
              xxsize=item.size;
              xxmedium=item.medium;
              xxlarge=item.large;
              if(xxsize===''){
                check1=true;
              }
              if(xxmedium==''){
                check2=true;
              }
              if(xxlarge==''){
                check3=true;
              }
              // this.clickEventListener(item);
              // this.setState({dataSource:responseJson});
              // this.odall1();

              // this.clickEventListener(item.id);
              // Showing response message coming from server after inserting records.
              // if(responseJson ==='Data Matched'){
                // alert('hi');
                this.setState({showModal:true});
              // this.props.navigation.navigate('shoppingcart');//,{paramKey3:UserName}
              //  alert(
              // this.setModalVisible(true);

              //  );
              // }
              //  else{
              //   Alert.alert(responseJson);

              //  }
            }).catch((error) => {
              console.error(error);
            })}
          }
            >
         <View style={style.card}>
           {/* <Text>{global.v1}</Text> */}
 
           <View
             style={{
               height: 100,
               alignItems: 'center',
             }}>
              <Avatar.Image 
              size={100}
              style={{borderRadius:0,backgroundColor:'red'}} 
              source={{uri: 'data:image/png;base64,' + item.Pic}}
              />
           </View>
 
           <Text style={{fontWeight: 'bold', fontSize: 17, marginTop: 10,textAlign:'center'}}>
             {item.pname}
           </Text>
           <View
             style={{
              //  flexDirection: 'row',
               justifyContent: 'space-between',
               marginTop: 5,
             }}>
             <Text style={{fontWeight: 'bold', fontSize: 17, marginTop: 10,textAlign:'center'}}>
               ${item.price}
             </Text>
            
           

             {/* <View
               style={{
                 height: 25,
                 width: 25,
                 backgroundColor: COLORS.green,
                 borderRadius: 5,
                 justifyContent: 'center',
                 alignItems: 'center',
               }}> */}
                 {/* <TouchableOpacity onPress={this.addtocart}>
               <Text
                 style={{fontSize: 22, color: COLORS.white, fontWeight: 'bold'}}>
                 +
               </Text>
               </TouchableOpacity> */}
                
             </View>
           </View>
         {/* </View> */}
       </TouchableOpacity>
     

      
        
        <View style={style.container1}>
          <Modal
            animationType={'slide'}
            transparent={false}
            visible={this.state.showModal}
            onRequestClose={() => {
              console.log('Modal has been closed.');
            }}>
              <View style={{alignItems: 'flex-end'}}>
               <Button color={'gray'}
                title=" X "
                onPress={() => {
                   this.setState({showModal:!showModal}) }
                }
              />
              </View>
            {/*All views of Modal*/}
            {/*Animation can be slide, slide, none*/}
            <View style={style.modal}>
           
              <Avatar.Image

size={250}
// style={{flex: 1, resizeMode: 'contain',borderRadius:0}} 
source={{uri: 'data:image/png;base64,' + xxpic}}

/>
<View style={{alignItems:'flex-start'}}>
<Text>{xxname}</Text>
              <Text>{'$'+xxprice}</Text>
              <View style={style.checkboxContainer}>
                {/* <Text>Choose Size:</Text> */}
              {/* <Text>  (xxsize==''? "" :  <CheckBox
          value={this.state.isSelected}
          onValueChange={isSelected=>this.setState({isSelected})}
          style={styles.checkbox}
        />
                <Text style={styles.label}>{xxsize}</Text>);
  
                </Text> */}

        <CheckBox
        // hideBox={false}
        
          value={this.state.isSelected}
          onValueChange={isSelected=>this.setState({isSelected})}
          style={style.checkbox}
          // checked={clearcheckbox}
          disabled={check1}

        />
                <Text style={style.label}>{xxsize}</Text>
                <CheckBox
          value={this.state.isSelected1}
          onValueChange={isSelected1=>this.setState({isSelected1})}
          style={style.checkbox}
          disabled={check2}

        />
        <Text style={style.label}>{xxmedium}</Text>
         <CheckBox
          value={this.state.isSelected2}
          onValueChange={isSelected2=>this.setState({isSelected2})}
          style={style.checkbox}
          disabled={check3}

        />
        <Text style={style.label}>{xxlarge}</Text>
      </View>
      <View style={{alignItems: 'flex-end'}}>
             <View
             style={{
              height: 30,
              width: 100,
              backgroundColor: '#9acd32',
              borderRadius: 5,
              justifyContent: 'center',

              alignItems: 'center',
             }}>
             
      <View style={{fontSize: 22, color: COLORS.white, fontWeight: 'bold'}}>
                <Text
                  // icon="eye"
                  // onPress={() => console.log(item)} /* <--- EASY */
                  onPress={() => {
                    xxsize=(this.state.isSelected ? "Small" : "");
xxmedium=(this.state.isSelected1 ? "Medium" : "");
xxlarge=(this.state.isSelected2 ? "Large" : "");
                    fetch('http://192.168.1.73/api/AddToCartFromHome.php', {
                      method: 'POST',
                      headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify({
                        size:xxsize,
                        table:global.v1,
                        medium:xxmedium,
                        large:xxlarge,
                        uemail:global.myvar,
                        //  Pic:Pic,
                        Pic:xxpic,
                        price:xxprice,
                        pname: xxname,
                        available_quantity:xxquant,
                        // price:newprice.toString(),
                        //  category:Pcategory,

                      })


                    }).then((response) => response.json())
                      .then((responseJson) => {

                        // Showing response message coming from server after inserting records.
                        if (responseJson === 'added Successfully') {
                          // this.props.navigation.navigate('shoppingcart');//,{paramKey3:UserName}
                          alert('added successfully');
                        }
                        else {
                          alert(responseJson);

                        }
                      }).catch((error) => {
                        console.error(error);
                      });
                  }}
                > <Icon
                name="shoppingcart"
                size={15}
                color="#000"
              />Add To Cart</Text>
               
              </View>
               
              </View>
              </View>
              </View>
    {/* { <FlatList
      data={ this.state.dataSource}
      // renderItem={({item}) => <Text>{item.key}</Text>}
      renderItem={this.renderItem}
    />}  */}
              {/* <Button
                title=" X "
                onPress={() => {
                   this.setState({showModal:!showModal}) }
                }
              /> */}
            </View>
          </Modal>
          {/*Updating the state to make Modal Visible*/}
          
          {/* <Button 
            title="Click To Open Modal"
            onPress={() => {
               this.setState({showModal:!showModal}) }
            }

           /> */}
        </View>
      </View>
      
    );
  
              }
  render(){
    let stars = [];
   
    
    for(let x=1;x<=numStars;x++){
      stars.push(
        <TouchableWithoutFeedback
         key={x}
         onPress={()=>{this.rate(x)
          // ,this.animate();
        }
      }
         >
          {/* <Animated.View style={x<=avg?animationStyle:""}> */}
          <Star filled={x<=global.avg? true:false}/>

          {/* </Animated.View> */}
         
          </TouchableWithoutFeedback>
      )
    }
    
  //   const 
  //   Card = ({plant}) => {
  //    return (
  //      <TouchableOpacity
  //        activeOpacity={0.8}
  //        onPress={() => this.props.navigation.navigate('details', plant)}>
  //        <View style={style.card}>
  //          <View style={{alignItems: 'flex-end'}}>
  //            <View
  //              style={{
  //                width: 30,
  //                height: 30,
  //                borderRadius: 20,
  //                justifyContent: 'center',
  //                alignItems: 'center',
  //                backgroundColor: plant.like
  //                  ? 'rgba(245, 42, 42,0.2)'
  //                  : 'rgba(0,0,0,0.2) ',
  //              }}>
  //              <Icon
  //                name="favorite"
  //                size={18}
  //                color={plant.like ? COLORS.red : COLORS.black}
  //              />
  //            </View>
  //          </View>
 
  //          <View
  //            style={{
  //              height: 100,
  //              alignItems: 'center',
  //            }}>
  //            <Image
  //              source={plant.img}
  //              style={{flex: 1, resizeMode: 'contain'}}
  //            />
  //          </View>
 
  //          <Text style={{fontWeight: 'bold', fontSize: 17, marginTop: 10}}>
  //            {plant.name}
  //          </Text>
  //          <View
  //            style={{
  //              flexDirection: 'row',
  //              justifyContent: 'space-between',
  //              marginTop: 5,
  //            }}>
  //            <Text style={{fontSize: 19, fontWeight: 'bold'}}>
  //              ${plant.price}
  //            </Text>
  //            <View
  //              style={{
  //                height: 25,
  //                width: 25,
  //                backgroundColor: COLORS.green,
  //                borderRadius: 5,
  //                justifyContent: 'center',
  //                alignItems: 'center',
  //              }}>
  //                <TouchableOpacity onPress={this.addtocart}>
  //              <Text
  //                style={{fontSize: 22, color: COLORS.white, fontWeight: 'bold'}}>
  //                +
  //              </Text>
  //              </TouchableOpacity>
  //            </View>
  //          </View>
  //        </View>
  //      </TouchableOpacity>
  //    );
  //  };
  return (
   
    <SafeAreaView
    
      style={{flex: 1, paddingHorizontal: 20, backgroundColor: COLORS.white}}>

      
           {/* <Text style={{color:'red'}}>{this.props.route.params.namee}</Text> */}

{/* <Text>{global.myvar}</Text> */}
  
        <View style={style.header}><Icon
                name="menu"
                size={35}
                color="#000"
                onPress={() => this.props.navigation.openDrawer()}
              />
              </View>
              {/* <Text style={{color:'black'}}>  {route.params?.email} </Text> */}
                 {/* <Text style={{color:'black'}}> {route.params?.currentCity}</Text> */}

                 {/* console.log(this.props); */}
               {/* <Text>  {console.log(route.params?.paramKey)}</Text> */}
          {/* <TextInput>  value={route.params.paramKey} </TextInput> */}
      <View style={style.header}>
      {/* <Text style={{color:'red'}}>{route.params.UserEmail}</Text> */}
        <View>

          <Text style={{fontSize: 25, color:'#8fbc8f',fontWeight: 'bold'}}>Welcome to</Text>
          <Text style={{fontSize: 38, color: '#8fbc8f', fontWeight: 'bold'}}>
            Let's Shopping
          </Text>
          <View style={style.container}>
  <View style={{flexDirection:'row'}}>{stars}</View>
  <Text >{global.avg+'/'+numStars}</Text>

</View>
        </View>
       
        <Icon name="shopping-cart" size={28} />
      </View>
      <View style={{marginTop: 30, flexDirection: 'row'}}>
        <View style={style.searchContainer}>
          {/* <Icon name="search" size={25} style={{marginLeft: 20}} /> */}
          <TextInput placeholder="Search" style={style.input}             onChangeText={P_Name=>this.setState({P_Name})}
 />
        </View>
        
        <View style={style.sortBtn}>
        <Icon name="search" size={30} onPress={this.search} />
          {/* <Icon name="sort" size={30} color={COLORS.white}  /> */}
          
        </View>
       </View> 
      {/* <CategoryList /> */}
      <FlatList
        columnWrapperStyle={{justifyContent: 'space-between'}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 50,
        }}
        numColumns={2}
        data={this.state.dataSource}
        renderItem={this.renderItem}
        // renderItem={({item}) => {
        //   return <Card plant={item} />;
        // }}
      />
      {/* <FlatList
        columnWrapperStyle={{justifyContent: 'space-between'}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 50,
        }}
        numColumns={2}
        data={plants}
        renderItem={({item}) => {
          return <Card plant={item} />;
        }}
      /> */}
    </SafeAreaView>
  );
};
}
class Star extends Component {
  render(){
  return(
    <FontAwesome
    name={this.props.filled===true? "star":"star-o"}
    color={'green'}
    size={32}
    />
    );
  }
  }
const style = StyleSheet.create({

  container:{
    // flex:1,
  justifyContent:"center",
  alignItems:"center",
  },
  categoryContainer: {
    flexDirection: 'row',
    // marginTop: 30,
    marginBottom: 20,
    justifyContent: 'space-between',
    // backgroundColor:'gray',
    padding:10,
    fontSize: 17  },
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
    width,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
  },
  header: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    color:COLORS.dark,
  },
  searchContainer: {
    height: 50,
    backgroundColor: 'whitesmoke',
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
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
    backgroundColor: '#8fbc8f',
    justifyContent: 'center',
    alignItems: 'center',
  },




  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'gray',
  },
 
  container1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    marginTop: 30,
    opacity:0.5,
    
  },
  modal: {
    flex: 0.5,
    height:100,
    // marginTop:'40%',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 100,
    // marginBottom:'30%'
  },
  text: {
    // color: '#3f2949',
    // color:'#8fbc8f',
    color:'white',
    marginTop: 10,
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
        letterSpacing: 0.25,

  },
  // container: {
  //   flex: 1,
  //   marginTop: 20,
  //   backgroundColor: "#eeeeee"
  // },
  header: {
    backgroundColor: "#00CED1",
    height: 200
  },
  headerContent: {
    padding: 30,
    alignItems: 'center',
    flex: 1,
  },
  detailContent: {
    top: 80,
    height: 500,
    // width:Dimensions.get('screen').width - 90,
    marginHorizontal: 30,
    flexDirection: 'row',
    position: 'absolute',
    backgroundColor: "#ffffff"
  },
  userList: {
    flex: 1,
  },
  cardContent: {
    marginLeft: 20,
    marginTop: 10
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },



  card: {
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginVertical: 10,
    marginHorizontal: 20,
    backgroundColor: "white",
    flexBasis: '46%',
    padding: 10,
    flexDirection: 'row'
  },

  name: {
    fontSize: 18,
    flex: 1,
    alignSelf: 'center',
    color: "#008080",
    fontWeight: 'bold'
  },
  position: {
    fontSize: 14,
    flex: 1,
    alignSelf: 'center',
    color: "#696969"
  },
  about: {
    marginHorizontal: 10
  },

  followButton: {
    marginTop: 10,
    height: 35,
    width: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: "#00BFFF",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  
  },
  label: {
    margin: 8,
  },
  followButtonText: {
    color: "#FFFFFF",
    fontSize: 20,
  },
  container: {
    padding: 15,
  },
  tableHeader: {
    backgroundColor: '#DCDCDC',
  },
  card: {
    height: 225,
    // backgroundColor: '#EFE0B3', //bg color of each product
    backgroundColor:'whitesmoke',
    width:160,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
    // shadowColor: '#00000021',
    // shadowOffset: {
    //   width: 0,
    //   height: 6,
    // },
    // shadowOpacity: 0.37,
    // shadowRadius: 7.49,
    // elevation: 12,

    // marginVertical: 10,
    // marginHorizontal: 20,
    // backgroundColor: "white",
    // flexBasis: '46%',
    // padding: 10,
    // flexDirection: 'row'
  },
  popup: {
    backgroundColor: 'white',
    marginTop: 80,
    marginHorizontal: 20,
    borderRadius: 7,
  },
  popupOverlay: {
    backgroundColor: "#00000057",
    flex: 1,
    marginTop: 30
  },
  popupContent: {
    //alignItems: 'center',
    margin: 5,
    height: 250,
  },
  popupHeader: {
    marginBottom: 45
  },
  popupButtons: {
    marginTop: 15,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: "#eee",
    justifyContent: 'center'
  },
  popupButton: {
    flex: 1,
    marginVertical: 16
  },
  btnClose: {
    height: 20,
    backgroundColor: '#20b2aa',
    padding: 20
  },
  header: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    color:COLORS.dark,
  },
  modalInfo: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default HomePage;
