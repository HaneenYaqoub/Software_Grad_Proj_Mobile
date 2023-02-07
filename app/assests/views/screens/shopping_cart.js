import React, { useState,Fragment, useEffect, Component } from 'react';
import { StyleSheet, View, TextInput,Text, SafeAreaView, TouchableOpacity, Modal, ScrollView,Button, Pressable } from 'react-native';
import {  DataTable, Title } from 'react-native-paper';
// import  {SafeAreaView}  from 'react-native-safe-area-context';
import { FlatList } from 'react-native-gesture-handler';
import { Avatar } from 'react-native-paper';
import COLORS from '../../consts/color';
import  CheckBox  from "@react-native-community/checkbox";
// import { Icon } from 'react-native-paper/lib/typescript/components/Avatar/Avatar';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { json } from 'body-parser';
import { WebView } from 'react-native-webview';
import {Header, LearnMoreLinks, Colors, DebugInstructions, ReloadInstructions } from 'react-native/Libraries/NewAppScreen';
import { NotificationServices, requestUserPermission } from './src/utils/PushNotifications';
import NotificationService from './NotificationService';
import messaging from '@react-native-firebase/messaging';
import notifee from '@notifee/react-native';
// import { useLinkToNative } from "@react-navigation/native";

// const linkto = useLinkToNative();
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

var flag=0;//++++++++++++
// function FriendStatus(props) {
export default class App extends Component {
  // const [showModal, setShowModal] = useState(false);

  newname = '';
  DATA = [
    { label: 'Large', value: 1 },
    { label: 'Medium', value: 2 },
    { label: 'Small', value: 3 },

  ];


  static navigationOptions = {
    title: "ProfileActivity"
  };
  constructor(props) {

    super(props);
    this.state = {
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
    };
    handleResponse = data => {
      if (data.title === "success") {
          this.setState({ showModal1: false, status: "Complete" });
                        {alert("payment is Done")}

      } else if (data.title === "cancel") {
          this.setState({ showModal1: false, status: "Cancelled" });
      } else {
          return;
      }
  };
 
  }
  onopenNotification=async()=>{
// console.log('notify',notify);
// if(notify.data.type && notify.data.type=='rating'){
  Navigation.navigate('rating')
// }
  }
 
   sendNotification = async () => {
    this.setState({ showModal1: true });
    flag+1;//+++++++++++++++++++++++++++
    
    let notificationData = {
      data:{
        id:5,
        type:'rating',
        
      },
      title: 'app rating',
      body: 'Please give feedback about the app',
      token:
        // 'dTkxfadaTSW1U-5-r3nWOk:APA91bErg-gIkcRg6CY-TTsq8K-jqWuxxMNZcLTNGxN81-mLpNBpcxuGF5fj5KEJAaNRfuKAeeXzbcr5SrvMKhT2g7LhaZPmzkvIyt_m3IheTPgERnRokO-EL1WcyxB1IyemGsXx6tLZ',
   'f1AiRCPSQKyTX5biNgY8rW:APA91bFXrK0dvTepQEPWJ8OAvCDYjIZuySX8RvrMoClL_a8sEiqmMRU3Cl7rm8ZQ5TZ9IJyKzTjIickUDT_i4beqZquv48UfOrhxwZF191k1LGFv9nupXXy8SlV4TizEtxuLyUvLZ0jv'
  };
    NotificationService.sendSingleDeviceNotification(notificationData);
    // this.setState({ showModal1: true });

  };
    async DisplayNotification(remoteMessage) {
    // Create a channel
    
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });
  
    // Display a notification
    // notifee.onForegroundEvent(({ type, detail }) => {
    //   // linkto(detail.notification.data.deeplink);
    // });
    await notifee.displayNotification({
      title: remoteMessage.notification.title,
      body: remoteMessage.notification.body,
      android: {
        channelId,
        smallIcon: 'ic_launcher', // optional, defaults to 'ic_launcher'.
        pressAction: {
          id: 'default',
          // mainComponent: 'custom-component',
          // launchActivity: 'com.awesome.app.CustomActivity',

        },      },
    });
  }

  //  pay = () => {
  //   if(this.state.amt != ""){
  //     this. props.navigation.navigate('Payment',{params:{amt:this.state.amt}});
  //     // alert('pay');
  //   }
  // }
//   f1=()=>{
//     const {P_Name}=this.state;
//     // const comboo='clothes';

//     this.setState({showList: true})

//     // comboo=values[this.selectedValue];
//     fetch('http://192.168.1.73/api/Showprodinfo.php',
//     {
//       method: 'POST',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({


//         // email: this.props.route.params.email,
//         pname:P_Name,
//         // clothes:comboo,


//       })

//     }
//     )
//         .then((response) => response.json())
//         .then((responseJson) => {
//           // if(responseJson ==='Data Matched'){



//               if(responseJson ==="No Results Found"){
//                 alert('product not found');
//               }
//               else{
//                 // alert(responseJson);
//                 this.setState({dataSource:responseJson});
//               }


//           // }
//           // else{
//           //   alert('product name not found');
//           // }
//       //     let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
//       //     this.setState({
//       //       isLoading: false,
//       //       dataSource: ds.cloneWithRows(responseJson),
//       //     }, function() {
//       //       // In this block you can do something with new state.

//       // });

//     })

//     .catch((error) => {
//       console.error(error);
//     });
// }


  componentDidMount() {
    requestUserPermission();
    this.onopenNotification;
    // messaging().onMessage(async remoteMessage => { 
    //   Alert.alert('A new FCM message arrived!', 
    //   JSON.stringify(remoteMessage)); 
    //   if (remoteMessage?.data?.screen_name)
    //    { navigation.navigate(remoteMessage?.data?.screen_name) }; }); 

    // NotificationServices();
    // messaging().onNotificationOpenedApp()
    // messaging().onNotificationOpenedApp(remoteMessage => {
    //   console.log(
    //     'Notification caused app to open from background state:',
    //     remoteMessage.notification,
    //   );
    //   this.props.navigation.navigate(remoteMessage.data.type);
    // });
        const unsubscribe = messaging().onMessage(async remoteMessage => {
      //     console.log('remoteMessage', JSON.stringify(remoteMessage));
      //     this.DisplayNotification(remoteMessage);
          alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
      //     if (remoteMessage?.data?.rating)
      //  { navigation.navigate(remoteMessage?.data?.rating) }; 
        });
    fetch('http://192.168.1.73/api/shoppingCart.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({

        //  Pic:Pic,
        uemail: global.myvar,
      }),
    }
    )
      .then((response) => response.json())
      .then((responseJson) => {
        if(responseJson === 'No Results Found.'){
alert('there is no products yet');
        }
        // responseJson.map(x=>console.log(xxid=x.id));
        // responseJson.map(x=>console.log(cardsize=x.size));
        // responseJson.map(x=>console.log(cardmedium=x.medium));
        // responseJson.map(x=>console.log(cardlarge=x.large));
else{
          this.setState({ dataSource: responseJson });
}
        // alert(responseJson);




      })

      .catch((error) => {
        console.error(error);
      });
      return unsubscribe;

  }
  clickEventListener = (item) => {
    this.setState({ userSelected: item }, () => {
      this.setModalVisible(true);
    });
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  
  addtocart = () => {
    // console.log(this.props.route.params?.email);
alert('hiiiiiiiiiiiiiiiii');

    // const { Pname }  = this.state ;

    // const { newprice }  = this.state ;
    // const { Pcategory }  = this.state ;
    // var newprice;
    //  const [selectedId, setSelectedId] = useState(null);

    fetch('http://192.168.1.73/api/AddToCart.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({

        //  Pic:Pic,
        pname: item,
        // price:newprice.toString(),
        //  category:Pcategory,

      })


    }).then((response) => response.text())
      .then((responseJson) => {

        // Showing response message coming from server after inserting records.
        if (responseJson === 'added Successfully') {
          // this.props.navigation.navigate('shoppingcart');//,{paramKey3:UserName}
          alert('added!!!!!!!');
        }
        else {
          alert(responseJson);

        }

      }).catch((error) => {
        console.error(error);
      });
    // alert('helloooooo');
    // alert('added');
  }



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
// let sumprice=0;
sumprice+=parseInt(item.price)/2;
// sumprice+=item.price;
console.log(sumprice);
// global.var1=sumprice;
let x=''+sumprice;
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
    
      <View>

<TouchableOpacity
         activeOpacity={0.8}
         onPress={() =>{
          check1=false;
          check2=false;
          check3=false;
          this.state.isSelected=false;
          this.state.isSelected1=false;
          this.state.isSelected2=false;
          fetch('http://192.168.1.73/api/shoppingCartSelect.php', {
                  method: 'POST',
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
            
                    //  Pic:Pic,
                    uemail: global.myvar,
                    pname:item.pname,
                    
                  }),
                }
                )
                  .then((response) => response.json())
                  .then((responseJson) => {
                    responseJson.map(x=>console.log(xxid=x.id));
                    responseJson.map(x=>console.log(cardsize=x.size));
                    responseJson.map(x=>console.log(cardmedium=x.medium));
                    responseJson.map(x=>console.log(cardlarge=x.large));
            
                    // this.setState({ dataSource: responseJson });
                    // alert(responseJson);
            
            
            
            
                  })
            
                  .catch((error) => {
                    console.error(error);
                  });
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
//               const v = JSON.parse(responseJson);
// console.log(v.size);
// const v=JSON.stringify(responseJson);
// console.log(v[10]); // بطبع حرف بس 
// alert(responseJson);
responseJson.map(x=>console.log(xxmedium=x.medium));
// alert(xxmedium);
responseJson.map(x=>console.log(xxsize=x.size));
responseJson.map(x=>console.log(xxlarge=x.large));
responseJson.map(x=>console.log(xxprice=x.price));
responseJson.map(x=>console.log(xxpic=x.Pic));
responseJson.map(x=>console.log(xxquant=x.available_quantity));
// responseJson.map(x=>console.log(xxid=x.id));
// alert(xxid);

              // xxname = item.pname;
              // xxprice=item.price;
              // xxpic=item.Pic;
              // xxquant=item.available_quantity;
              // xxsize=item.size;
              // xxmedium=item.medium;
              // alert(xxmedium);
              // xxlarge=item.large;
              // if(xxsize===''){
              //   check1=true;
              // }
              // if(xxmedium==''){
              //   check2=true;
              // }
              // if(xxlarge==''){
              //   check3=true;
              // }
              if(item.size===''){
                // check1=false;
               this.setState({isSelected:false});
              }
              else {
                // check1=true;
               this.setState({isSelected:true});

              }
              if(item.medium==''){
                // check2=false;
                this.setState({isSelected1:false});

              }
              else{
                // check2=true;
                this.setState({isSelected1:true});


              }
              if(item.large==''){
                // check3=false;
                this.setState({isSelected2:false});

              }
              else{
                // check3=true;
                this.setState({isSelected2:true});


              }
              if(xxsize==''){
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
         <View style={styles.card}>
           <Text>{global.v1}</Text>
 
           <View
             style={{
               height: 100,
               alignItems: 'center',
             }}>
              <Avatar.Image 
              size={100}
              style={{flex: 1, resizeMode: 'contain'}} 
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
               {/* {console.log(sumprice)} */}
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
     

      
        
        <View style={styles.container1}>
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
            <View style={styles.modal}>
           
              <Avatar.Image

size={150}
source={{uri: 'data:image/png;base64,' + xxpic}}

/>
<View style={{alignItems:'flex-start'}}>
<Text>{xxname}</Text>
              <Text>{'$'+xxprice}</Text>
              <View style={styles.checkboxContainer}>
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
          style={styles.checkbox}
          // checked={clearcheckbox}
          disabled={check1}

        />
                <Text style={styles.label}>{xxsize}</Text>
                <CheckBox
          value={this.state.isSelected1}
          onValueChange={isSelected1=>this.setState({isSelected1})}
          style={styles.checkbox}
          disabled={check2}

        />
        <Text style={styles.label}>{xxmedium}</Text>
         <CheckBox
          value={this.state.isSelected2}
          onValueChange={isSelected2=>this.setState({isSelected2})}
          style={styles.checkbox}
          disabled={check3}

        />
        <Text style={styles.label}>{xxlarge}</Text>
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
// fetch('http://192.168.1.73/api/shoppingCartSelect.php', {
//       method: 'POST',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({

//         //  Pic:Pic,
//         uemail: global.myvar,
        
//       }),
//     }
//     )
//       .then((response) => response.json())
//       .then((responseJson) => {
//         // responseJson.map(x=>console.log(xxid=x.id));
//         // responseJson.map(x=>console.log(cardsize=x.size));
//         // responseJson.map(x=>console.log(cardmedium=x.medium));
//         // responseJson.map(x=>console.log(cardlarge=x.large));

//         this.setState({ dataSource: responseJson });
//         // alert(responseJson);




//       })

//       .catch((error) => {
//         console.error(error);
//       });
                    fetch('http://192.168.1.73/api/updatecart.php', {
                      method: 'POST',
                      headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify({
                        size:xxsize,
                        medium:xxmedium,
                        large:xxlarge,
                        //  Pic:Pic,
                        id: xxid,
                        // price:newprice.toString(),
                        //  category:Pcategory,

                      })


                    }).then((response) => response.json())
                      .then((responseJson) => {
                        alert(item.id);
                        // responseJson.map(x=>console.log(xxid=x.id));
                        // responseJson.map(x=>console.log(cardsize=x.size));
                        // responseJson.map(x=>console.log(cardmedium=x.medium));
                        // responseJson.map(x=>console.log(cardlarge=x.large));
                        // Showing response message coming from server after inserting records.
                        if (responseJson === 'updated Successfully') {
                          // this.props.navigation.navigate('shoppingcart');//,{paramKey3:UserName}
                          alert('updated!!!!!!!');
                          // alert(item.id);
                        }
                        else {
                          alert(responseJson);

                        }
                      }).catch((error) => {
                        console.error(error);
                      });
                  }}
                > <Icon
                // name="shoppingcart"
                size={15}
                color="#000"
              /> Update </Text>
               
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
        {/* <View style={{ marginTop: 100 }}>
                <Modal
                    visible={this.state.showModal1}
                    onRequestClose={() => this.setState({ showModal1: false })}
                >
                    <WebView
                                            // source={{ uri: "https://www.google.com/?" }}

                        // source={{ uri: "https://www.paypal.com/signin?returnUri=https%3A%2F%2Fdeveloper.paypal.com%2Fdashboard%2F&intent=developer&ctxId=ul859f09bf60f44e108e4cbc3674bd4167"}}
                        // source={{uri:"https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_express-checkout&token=EC-5BW84016XS855500A"}}
                        source={{ uri: "http://192.168.1.73:3000/"+item.price }} //+item.price 
                        onNavigationStateChange={data =>
                            handleResponse(data)
                        }
                        
                        // injectedJavaScript={`document.f1.submit()`}
                        injectedJavaScript={`document.getElementById('price').value="123";`}
                    />

                </Modal> */}

                {/* <TouchableOpacity
                    style={{ width: 300, height: 100 }}
                    onPress={() => this.setState({ showModal1: true })}
                >
                    <Text>Pay with Paypal</Text>
                </TouchableOpacity> */}
                {/* <Text>Payment Status: {this.state.status}</Text> */}
            {/* </View> */}

      </View>

    );
  
              }
              
  // useEffect(() => {
  //   async function fetchData() {
  //     // You can await here
  //     const response = await MyAPI.getData(someId);
  //     // ...
  //   }
  //   fetchData();
  // }, [someId]); // Or [] if effect doesn't need props or state
  //  TableExample = () => {
  //   const [dataSource, Setdata] = React.useState([]);

  // useEffect( ()=> {
  //   async function fetchData() {


  //     const response = await (
  //       fetch('http://172.19.151.88/api/clothes.php', {
  //         method: 'POST',
  //         headers: {
  //           'Accept': 'application/json',
  //           'Content-Type': 'application/json',
  //         },
  //       }
  //       ));
  //     const responseJson = await response.json();
  //     // this.setState({dataSource:responseJson});
  //     Setdata({ dataSource: responseJson });
  //   }
  //   fetchData();
  // }, []); // Or [] if effect doesn't need props or state

  // .catch (error) {
  //   console.error(error);
  // }

  // });

  render() {

    var { showModal }  = this.state ;
    // const { onPress, title = 'Save' } = this.props;
  //   useEffect(()=>{
  //     requestUserPermission();
  // // NotificationServices();
  //     const unsubscribe = messaging().onMessage(async remoteMessage => {
  //       console.log('remoteMessage', JSON.stringify(remoteMessage));
  //       DisplayNotification(remoteMessage);
  //     //   // Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
  //     });
  //     return unsubscribe;
    
  
  //   },[]);
    return (
      <SafeAreaView
    
      style={{flex: 1, paddingHorizontal: 20, backgroundColor: COLORS.white}}>
{/* <View style={styles.container}>
          
         <Text style={styles.title}>Paypal Intregation</Text>
         <TextInput 
          placeholder="Enter Amount"
          style={styles.textinput}
          value={this.state.amt}
          onChangeText={(amt)=> this.setState({amt})}
          keyboardType="number-pad"
         />
          
         <Button 
         title="Pay Now"
         onPress={this.pay}
         />

    </View> */}
 <View style={{ marginTop: 100 }}>
                <Modal
                    visible={this.state.showModal1}
                    onRequestClose={() => this.setState({ showModal1: false })}
                >
                      {console.log(sumprice)}

                    <WebView
                                            // source={{ uri: "https://www.google.com/?" }}

                        // source={{ uri: "https://www.paypal.com/signin?returnUri=https%3A%2F%2Fdeveloper.paypal.com%2Fdashboard%2F&intent=developer&ctxId=ul859f09bf60f44e108e4cbc3674bd4167"}}
                        // source={{uri:"https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_express-checkout&token=EC-5BW84016XS855500A"}}
                        source={{ uri: "http://192.168.1.73:3000/" }} //+item.price 
                        onNavigationStateChange={data =>
                            handleResponse(data)
                        }
                        
                        // injectedJavaScript={`document.f1.submit()`}
                        
                        injectedJavaScript={`document.getElementById('price').value="${sumprice+'$'}";`}
                    />

                </Modal>

                {/* <TouchableOpacity
                    style={{ width: 300, height: 100 }}
                    onPress={() => this.setState({ showModal1: true })}
                >
                    <Text>Pay with Paypal</Text>
                </TouchableOpacity> */}
                {/* <Text>Payment Status: {this.state.status}</Text> */}
            </View>
            {/* <Text>{sumprice=0}</Text> */}

{/* <Text>{global.myvar}</Text> */}
  
        {/* <View style={styles.header}><Icon
                name="menu"
                size={35}
                color="#000"
                onPress={() => this.props.navigation.openDrawer()}
              />
              </View> */}
              {/* <Text style={{color:'black'}}>  {route.params?.email} </Text> */}
                 {/* <Text style={{color:'black'}}> {route.params?.currentCity}</Text> */}

                 {/* console.log(this.props); */}
               {/* <Text>  {console.log(route.params?.paramKey)}</Text> */}
          {/* <TextInput>  value={route.params.paramKey} </TextInput> */}
      <View style={styles.header}>
      {/* <Text style={{color:'red'}}>{route.params.UserEmail}</Text> */}
        {/* <View>

          <Text style={{fontSize: 25, color: COLORS.green,fontWeight: 'bold'}}>Welcome to</Text>
          <Text style={{fontSize: 38, color: COLORS.green, fontWeight: 'bold'}}>
            Let's Shopping
          </Text>
        </View> */}
        {/* <Icon name="shopping-cart" size={28} /> */}
      </View>
      {/* <View style={{marginTop: 30, flexDirection: 'row'}}> */}
        {/* <View style={style.searchContainer}>
          <TextInput placeholder="Search" style={style.input}             onChangeText={P_Name=>this.setState(P_Name)}
 />
        </View> */}
        
        {/* <View style={styles.sortBtn}>
        <Icon name="search" size={30} onPress={this.search} />
          {/* <Icon name="sort" size={30} color={COLORS.white}  /> */}
          
        {/* </View> */} 
       {/* </View>  */}
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
      />

      <Pressable style={styles.button}>
      <TouchableOpacity
                    // style={{ width: 300, height: 100 }}
                    onPress={   
                      //  ()=> {
                      this.sendNotification
                      // this.setState({ showModal1: true }); 
                      //  }
                      }
                >
                    <Text style={styles.text}>Pay with Paypal</Text>
                </TouchableOpacity>
      {/* <Text style={styles.text}>Pay</Text> */}


      </Pressable>

       {/* <Button color={'#8fbc8f'}
                title=" Pay "
                
                onPress={() => {
                  
                }}
              /> */}
    </SafeAreaView>



      // <SafeAreaView style={{flex:1}}>

        
      //   <View>
      //     <DataTable.Header style={styles.tableHeader}>
      //       <DataTable.Title>ProductName</DataTable.Title>
      //       <DataTable.Title>Price</DataTable.Title>
      //       <DataTable.Title>Image</DataTable.Title>
      //     </DataTable.Header>
      //     {<FlatList
      //       data={this.state.dataSource}
      //       //  data={[{ title: 'Title Text', key: 'item1' }]}

      //       renderItem={this.renderItem}
      //       keyExtractor={(item, index) => item.pname}
      //     />
      //     }

      //   </View>
      


      // </SafeAreaView>

    );

  
            }
}
// export default TableExample;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'olivedrab',
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
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: "#eeeeee"
  },
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