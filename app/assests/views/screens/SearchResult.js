import { Component } from "react";
import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  Button,
  ActivityIndicator,
} from 'react-native';
import CheckBox from "@react-native-community/checkbox";
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/color';
import plants from '../../consts/plants';
import STYLES from '../../styles';
import { Avatar } from 'react-native-paper';


import ListView from "deprecated-react-native-listview";


// var ds = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 })

class SearchResult extends Component{
  static navigationOptions =
  {
     title: 'ShowStudentListActivity',
  };
constructor(props) {
 
  super(props)
 
  this.state = {

    // P_Name: '',
    // dataSource: ds.cloneWithRows([]),
    isLoading: true,
    inputVlaues: [],
    isSelected:false,
isSelected1:false,
isSelected2:false,
selectedValue:'',

  }
  

}
//  function SearchResult() {
  componentDidMount() {
    <TextInput placeholder="Search"   
    onChangeText={P_Name => this.setState({P_Name})}
    // Making the Under line Transparent.
    underlineColorAndroid='transparent'
    value={this.props.route.params.pname}
    // style={style.TextInputStyleClass}


    />
 
    fetch('http://192.168.1.73/api/SearchRes.php',{

    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
   
   
      pname: this.props.route.params.pname,
   
   
    })
  })
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson),
        }, function() {
          // In this block you can do something with new state.

        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  GetStudentIDFunction=(available_quantity,price,pname, Pic, size, color)=>{

    this.props.navigation.navigate('SearchResult', { 
      AVQ : available_quantity,
      PRICE : price,
      PIC:Pic,

      NAME: pname,
      SIZE : size,
      COLOR : color

    });

}

ListViewItemSeparator = () => {
 return (
   <View
     style={{
       height: .5,
       width: "100%",
       backgroundColor: "#000",
     }}
   />
 );
}
  
      
render(){
  if (this.state.isLoading) {
    return (
      <View style={{flex: 1, paddingTop: 20}}>
        <ActivityIndicator />
      </View>
    );
  }
  
return (
   
    <SafeAreaView
    
      style={{flex: 1, paddingHorizontal: 20, backgroundColor: COLORS.white}}>

        {/* <View style={style.header}><Icon
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
          <Text style={{color:'green',marginTop:10,marginBottom:40,fontSize:18,fontWeight:'bold'
          ,textAlign:'center'}}>  {this.props. route.params?.pname} </Text>

    
     
      {/* <CategoryList /> */}
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
          // return <Card plant={item} />;
        }}
      /> */}

<ListView
// <FlatList
        dataSource={this.state.dataSource}

        renderSeparator= {this.ListViewItemSeparator}

        renderRow={ (rowData) => <Text style={style.rowViewContainer} 

                  onPress={this.GetStudentIDFunction.bind(
                    this, rowData.pname,
                     rowData.price, 
                     rowData.size, 
                     rowData.color, 
                     rowData.available_quantity,
                     rowData.Pic
                     )} 
                     
>

  {/* {rowData.price} */}
  {/* {console.log(rowData.pname)} */}
{/* {console.log(this.props.route.params?.pname)} */}
  {/* {  rowData.pname
} */}
                  {/* <Text style={{color:'red'}}>{rowData.price} </Text>  */}
                 {/* <br/> */}
                 {/* <Text style={{color:'red'}}>{rowData.email} </Text>  */}
                  {/* {rowData.address}  */}
                  {/* {rowData.phonenumber}  */} 

                  {/* <View style={{justifyContent: 'center',alignItems: 'center',flexDirection: 'row', marginTop: 40,marginLeft:80,borderRadius: 150 / 2,backgroundColor:'#D1D1D3',height:150,width:150,borderColor:COLORS.red}}>
        
        <Icon
        name="add-circle"
        color={COLORS.light}
        size={40}
        style={STYLES.inputIcon}
      />
    
  </View>    */}
   {/* <TextInput
    
    // Adding hint in Text Input using Place holder.
    placeholder="search"
    placeholderTextColor="#dcdcdc"
    value={rowData.pname}
    // value={'Email'}
    // Making the Under line Transparent.
    underlineColorAndroid='transparent'
    style={style.text}
    // style={styles.TextInputStyleClass}
    editable={false}
  /> */}

<View style={{marginTop: 40}}>
    <View style={style.MainContainer}>
      
    <Avatar.Image 
             source={{uri: 'data:image/png;base64,' + rowData.Pic}}
              size={100}
              // style={{borderColor:"#e0e0e0",borderWidth:2}}
              
          />
                 <Text style={{marginTop:50,fontSize:16,fontWeight:'bold'}}>Name :</Text>

      <TextInput
    
    // Adding hint in Text Input using Place holder.
    placeholder="Name"
    placeholderTextColor="#dcdcdc"
    value={rowData.pname}
    // Making the Under line Transparent.
    underlineColorAndroid='transparent'
    // style={style.text}
    style={style.TextInputStyleClass}
    editable={false}
  />
      
  
      
    </View>
      {/* </View> */}


  {/* <View style={{marginTop: 20}}> */}
    <View style={style.MainContainer}>
      
    <Text style={{fontSize:16,fontWeight:'bold'}}>Price :</Text>

      <TextInput
    
    // Adding hint in Text Input using Place holder.
    placeholder="Price"
    placeholderTextColor="#dcdcdc"
    value={rowData.price+'$'}
    // Making the Under line Transparent.
    underlineColorAndroid='transparent'
    // style={style.text}
    style={style.TextInputStyleClass}
    editable={false}
  />
      
  
      
    </View>
      {/* </View> */}




      {/* <View style={{marginTop: 20}}> */}
   
      {/* </View> */}

      {/* <View style={{marginTop: 20}}> */}
    <View style={style.MainContainer}>
      
    <Text style={{fontSize:16,fontWeight:'bold'}}>Size :</Text>

      <TextInput
    
    // Adding hint in Text Input using Place holder.
    placeholder="size"
    placeholderTextColor="#dcdcdc"
    onChangeText={(text)=>this.onChangeTextComp(text,rowData)}
    value={rowData.size}
    // Making the Under line Transparent.
    underlineColorAndroid='transparent'
    // style={style.text}
    style={style.TextInputStyleClass}
    editable={false}
  />
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
      
  
      
    </View>
      {/* </View> */}
   
      {/* <View style={{marginTop: 20}}> */}
    <View style={style.MainContainer}>
      

      <TextInput
    
    // Adding hint in Text Input using Place holder.
    placeholder="medium"
    placeholderTextColor="#dcdcdc"
    value={rowData.medium}
    // Making the Under line Transparent.
    underlineColorAndroid='transparent'
    // style={style.text}
    style={style.TextInputStyleClass}
    editable={false}
  />
      
    </View>
      {/* </View> */}
      {/* <View style={{marginTop: 20}}> */}
    <View style={style.MainContainer}>
      

      <TextInput
    
    // Adding hint in Text Input using Place holder.
    placeholder="large"
    placeholderTextColor="#dcdcdc"
    value={rowData.large}
    // Making the Under line Transparent.
    underlineColorAndroid='transparent'
    // style={style.text}
    style={style.TextInputStyleClass}
    editable={false}
  />
      
  
      
    </View>
    


      </View>
   

  

                  
                  </Text> }

      />




    </SafeAreaView>
  );
};
}

const style = StyleSheet.create({
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
    backgroundColor: COLORS.light,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    color: 'red',
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
  MainContainer :{
 
    justifyContent: 'center',
    flex:1,
    margin: 5,
    },
     
    TextInputStyleClass: {
      color: 'darkseagreen',
    // textAlign: 'center',
    // marginBottom: 7,
    // // height: 40,
    borderBottomWidth: 1,
    // // Set border Hex Color Code Here.
     borderColor: '#dcdcdc',
     fontSize: 16,
    //  // Set border Radius.
    // //  borderRadius: 5 ,
     marginLeft:140,
    },
    
     TextComponentStyle: {
       fontSize: 20,
      color: "#000",
      textAlign: 'center', 
      marginBottom: 15
     },
     text:{
        color:'black',
        marginLeft:130,
     }
    
    });
export default SearchResult;
