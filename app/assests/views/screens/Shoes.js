import React, { useState, useEffect, Component } from 'react';
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity, Modal, ScrollView,Button } from 'react-native';
import {  DataTable } from 'react-native-paper';
// import  {SafeAreaView}  from 'react-native-safe-area-context';
import { FlatList } from 'react-native-gesture-handler';
import { Avatar } from 'react-native-paper';
import COLORS from '../../consts/color';
import  CheckBox  from "@react-native-community/checkbox";
// import { Icon } from 'react-native-paper/lib/typescript/components/Avatar/Avatar';
import Icon from 'react-native-vector-icons/MaterialIcons';

var xxname;
var xxprice;
var xxsize;
var xxlarge;
var xxmedium;
var xxpic;
var xxquant;
var small;
var item;
var clearcheckbox=false;
var check1;
var check2;
var check3;


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

    };
  }
  f1=()=>{
    const {P_Name}=this.state;
    // const comboo='clothes';

    this.setState({showList: true})

    // comboo=values[this.selectedValue];
    fetch('http://192.168.1.73/api/Showprodinfo.php',
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({


        // email: this.props.route.params.email,
        pname:P_Name,
        // clothes:comboo,


      })

    }
    )
        .then((response) => response.json())
        .then((responseJson) => {
          // if(responseJson ==='Data Matched'){



              if(responseJson ==="No Results Found"){
                alert('product not found');
              }
              else{
                // alert(responseJson);
                this.setState({dataSource:responseJson});
              }


          // }
          // else{
          //   alert('product name not found');
          // }
      //     let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      //     this.setState({
      //       isLoading: false,
      //       dataSource: ds.cloneWithRows(responseJson),
      //     }, function() {
      //       // In this block you can do something with new state.

      // });

    })

    .catch((error) => {
      console.error(error);
    });
}


  componentDidMount() {
    fetch('http://192.168.1.73/api/shoes.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }
    )
      .then((response) => response.json())
      .then((responseJson) => {


        this.setState({ dataSource: responseJson });




      })

      .catch((error) => {
        console.error(error);
      });

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

size={250}
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
                    fetch('http://192.168.1.73/api/AddToCart.php', {
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
                          alert('added!!!!!!!');
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
    return (
      <SafeAreaView
    
      style={{flex: 1, paddingHorizontal: 20, backgroundColor: COLORS.white}}>
       
<Text>{global.myvar}</Text>
  
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
  container1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    marginTop: 30,
  },
  modal: {
    flex: 1,
    // height:'30%',
    // marginTop:'70%',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 100,
    // marginBottom:'30%'
  },
  text: {
    color: '#3f2949',
    marginTop: 10,
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
    backgroundColor: '#EFE0B3', //bg color of each product
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