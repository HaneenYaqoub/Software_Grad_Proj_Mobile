import React,{useState} from 'react';
import
{
StyleSheet,
ScrollView,
  Alert,
TextInput,
Text,
  ToastAndroid,
  View,
  TouchableHighlight,
  StatusBar,
  TouchableOpacity,

} from 'react-native';
import ListView from "deprecated-react-native-listview";
import { SafeAreaView } from 'react-native-safe-area-context';

import ComboBox from 'react-native-combobox';
// import CheckBox from '@react-native-community/checkbox';
import {Avatar, Button} from 'react-native-paper';
// import MultiSelect from 'react-native-multiple-select';
import { MultiSelect } from 'react-native-element-dropdown';
import {launchImageLibrary} from 'react-native-image-picker';
import { color } from 'react-native-reanimated';
import { style } from 'deprecated-react-native-prop-types/DeprecatedImagePropType';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { value } from 'deprecated-react-native-prop-types/DeprecatedTextInputPropTypes';
import  CheckBox  from "@react-native-community/checkbox";
import { Component } from 'react';
import { FlatList } from 'react-native-gesture-handler';
var small;
var medium;
var large;
var comboo;
const values = [
  'Clothes',
  'Accessories',
  'Shoes',
  'furniture',
  'electronics'
];
var dataSource;
export default class App extends Component {
  state = {showList: false}

  _onPress = () => {
    this.setState({showList: true})
  }
  

 
// var i;
   DATA = [
    { label: 'Large', value: 1 },
    { label: 'Medium', value: 2 },
    { label: 'Small', value: 3 },
   
]; 

  // const DATA = [
  //   { id: 'L', name: 'Large' },
  //   { id: 'M', name: 'Medium' },
  //   { id: 'S', name: 'Small' },
  // ];

  // const initialState = {
  //   Large: false,
  //   Meduim: false,
  //   Small: false,
  // };

  // const [P_Size, setState] = React.useState('');
  // const [small, setSmall] = React.useState('');
  // const [medium, setMedium] = React.useState('');
  // const [large, setLarge] = React.useState('');

  static navigationOptions = {
    title: "ProfileActivity"
  };

  
  constructor(props) {

    super(props);

  this.state = {
//     dataSource: ([ "Android",  
//     "iOS","Java","Swift",  
//     "Php","Hadoop","Sap",  
//     "Python","Ajax", "C++",  
//     "Ruby", "Rails",".Net",  
//     "Perl",  
// ])  ,

dataSource:[],
    isLoading: true,
    P_Quant:'',
    P_Price:'',
    P_Name:'',
    selectedValue:'', 

  }
}
getListViewItem = (rowData) => {  
  Alert.alert(rowData);  
} 
f1=()=>{
  const {P_Name}=this.state;
  // comboo=values[this.selectedValue];

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

        

            if(responseJson ==='No Results Found.'){
              alert('product not found');
            }
            else{
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

//   const [selectedItems, setSelected] = useState([]);

  
  
//   const [P_Quant, SetQuant] = React.useState(0);
//   const [P_Price, SetPrice] = React.useState(0.0);
//   const [P_Name, SetName] = React.useState('');

  // var iii=React.useState('');
  // var iii=React.useState('');

  // var la=React.useState('');
  // var me=React.useState('');

//   var iii2;
//   var value = [];

  // const [iii, SetSize] = React.useState('');
  // const [P_Size1, SetSize1] = React.useState(initialState);
  // const [P_Size2, SetSize2] = React.useState(initialState);

   
 renderDataItem = (item,item2) => {
  return (
      <View style={styles.item}>
          <Text style={styles.selectedTextStyle}>{item.label}</Text>
          {/* <Text style={styles.selectedTextStyle}>{item.label1}</Text>

          <Text style={styles.selectedTextStyle}>{item.label2}</Text> */}

          {/* <Text style={styles.selectedTextStyle}>{item.value}</Text> */}

          <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
      </View>
  );
};

// const handleChange=()=> {
//   var options = e.target.options;
//   for (var i = 0, l = options.length; i < l; i++) {
//     if (options[i].selected) {
//       value.push(options[i].value);
//     }
//   }
//   this.props.someCallback(value);
// }



   onSelectedItemsChange = (selectedItems) => {
 
    setSelected(selectedItems);
    
   

    for (let i = 0; i < selectedItems.length; i++) {
      // if()
      var tempItem = DATA.find(item => item.id === selectedItems[i]);
      // Alert.alert(tempItem);
      console.log(tempItem);
    }
 
  };
  //For Show Toast Messages

  // const setToastMessage = message => {

  //   ToastAndroid.showWithGravity(

  //     message,

  //     ToastAndroid.SHORT,

  //     ToastAndroid.CENTER,

  //   );

  // };
// var small;
// var medium;
// var large;
// var comboo;
 showinfo=()=>{
  const {P_Name}=this.state;
    comboo=values[this.selectedValue];
    

    fetch('http://192.168.1.73/api/Showprodinfo.php',{

        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
       
       
          // email: this.props.route.params.email,
          pname:P_Name,
          clothes:comboo,
       
       
        })
      })
          .then((response) => response.json())
          .then((responseJson) => {
            if(responseJson === 'Data Matched')
            {
            alert('hiiiiiiiiiiii');
            
    
            let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            this.setState({
              isLoading: false,
              dataSource: ds.cloneWithRows(responseJson),
            }, function() {
              // In this block you can do something with new state.
              
        });
      }
      })
      .catch((error) => {
        console.error(error);
      });
      return(
        
        <ListView
        // <FlatList
                dataSource={this.state.dataSource}
        
                renderSeparator= {this.ListViewItemSeparator}
        
                renderRow={ (rowData) => <Text style={styles.rowViewContainer} 
        
                          onPress={this.GetStudentIDFunction.bind(
                            this, rowData.available_quantity,
                             rowData.price, 
                             rowData.pname, 
                             rowData.size, 
                             rowData.medium,
                             rowData.large
                             )} 
        >
            <Text style={{marginTop:25,marginBottom:-60,color:'black'}}>Choose Category:          {values[this.selectedValue]}</Text>
                {/* <View style={{ flex: 1, paddingVertical: 80, paddingHorizontal: 40, justifyContent: 'space-between' }}>
        
                    <ComboBox
                        values={values}
                        onValueSelect={setSelectedValue}
                        textColor={'black'}
                    />
                </View> */}
            
        
            
                <View style={styles.action}>
                  {/* <FontAwesome name="user-o" color={colors.text} size={20} /> */}
                  <TextInput
                    placeholder="Product Price"
                    placeholderTextColor="#a9a9a9"
                    // onChangeText={setPrice}
        
                    value={rowData.price}
        
            onChangeText={P_Price => this.setState({P_Price})}
                    autoCorrect={false}
                    style={[
                      styles.textInput,
                      // {
                      //   color: colors.text,
                      // },
                    ]}
                  />
                </View>
              
                
                <View style={styles.action}>
                  {/* <FontAwesome name="envelope-o" color={colors.text} size={20} /> */}
                  <TextInput
                    placeholder="available quantity"
                    placeholderTextColor="#a9a9a9"
                    // onChangeText={setQuant}
                    value={rowData.available_quantity}
        
               onChangeText={P_Quant => this.setState({P_Quant})}
                
                    keyboardType="email-address"
                    autoCorrect={false}
                    style={[
                      styles.textInput,
                      // {
                      //   color: colors.text,
                      // },
                    ]}
                  />
                </View>
                <TextInput
                    placeholder=" product size:"
                    placeholderTextColor="#a9a9a9"
                    value={rowData.size}
                    onChangeText={size => this.setState({size})}
        
                    // onChangeText={setSize}
                    // onChangeText={SetSize}
                    // keyboardType="number-pad"
                    autoCorrect={false}
                    editable={false}
                    style={[
                      styles.textInput,
                      // {
                      //   color: colors.text,
                      // },
                    ]}
                  /> 
                <View style={{ flex: 1, paddingVertical: 30, paddingHorizontal: 40, justifyContent: 'space-between' }}>
                {/* <Text style={{marginTop:25,color:'black'}}>Choose size:          {DATA[selectedItems,value]}</Text> */}
        
                {/* <TextInput     
                placeholder='text here'
                            value={setSelected}
                            placeholderTextColor="#a9a9a9"
                            // onChangeText={setName}
                            // onChangeText={SetName}
          //                   onChangeText={item => {
          //                     setSelected(item);
                          
          // //               if(item=='Large'){
          // // // <Text>L</Text>
          // // labelField="L";
          // //             }
                            // }
                          // }
                            autoCorrect={false}
                            style={[
                              styles.textInput,
                              // {
                              //   color: colors.text,
                              // },
                            ]}
        /> */}
            <View style={styles.checkboxContainer}>
                <CheckBox
                  value={isSelected}
                  onValueChange={setSelection}
                  style={styles.checkbox}
                />
                        <Text style={styles.label}>Small</Text>
                        <CheckBox
                  value={isSelected1}
                  onValueChange={setSelection1}
                  style={styles.checkbox}
                />
                <Text style={styles.label}>Medium</Text>
                 <CheckBox
                  value={isSelected2}
                  onValueChange={setSelection2}
                  style={styles.checkbox}
                />
                <Text style={styles.label}>Large</Text>
              </View>
             
        
                  
                    <StatusBar />
                  
         
        
        
        
                </View>
        
              <View
        
                style={[styles.centerContent, {marginTop: 2,marginBottom:25, flexDirection: 'row'}]}>
        
                <Button mode="contained" onPress={() => this.modify()}>
        
                  Modify
        
                </Button>
        
               
        
              </View>
                   
        </Text> }
        
        />
      );
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
  GetStudentIDFunction=(pname,price, available_quantity, size, large,medium)=>{

    this.props.navigation.navigate('modify_product', { 

      NAME: pname,
      PRICE : price,
      AVQ : available_quantity,
      SIZE : size,
      LARGE : large,
      MEDIUM:medium,

    });

}
 modify=()=>{
  small=(isSelected ? "Small" : "");
  medium=(isSelected1 ? "Medium" : "");
  large=(isSelected2 ? "Large" : "");
  comboo=values[selectedValue];
  fetch('http://192.168.1.73/api/modifyproduct.php', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
   
    
     available_quantity:P_Quant,
     price:P_Price,
     size:small,
     medium:medium,
     large:large,
     pname:P_Name,
     clothes:comboo
     

    })
    
   
  }).then((response) => response.json())
        .then((responseJson) => {
   
  // Showing response message coming from server after inserting records.
          if(responseJson ==='updated Successfully'){

            alert("uploaded");
            // alert('hi');

          }
          // else if(responseJson=='slm'){
          //   alert("uploaded slm");

          // }
            else{
    alert(responseJson);
  
  }
        }).catch((error) => {
          console.error(error);
        });

   
}

    



   handleChange = (e) => {
    const { id, value } = e.target; // <-- save event id and value
  
    setNewMovie(state => ({
      ...state,    // <-- shallow copy previous state
      [id]: value, // <-- update property by dynamic key
    }));
  };
  renderItem=({item})=>{
    return(
<View>
<Text>{item.price}</Text>
<Text>{item.pname}</Text>

</View>
    )
  }
  render() {  
    return (  
      <SafeAreaView>
<View style={styles.action}>
      {/* <FontAwesome name="user-o" color={colors.text} size={20} /> */}
      <TextInput
        placeholder="Product Name"
        placeholderTextColor="#a9a9a9"
        // value={rowData.pname}
        // onChangeText={setPrice}
        // onChangeText={SetName}
        onChangeText={P_Name=>this.setState({P_Name})}

        autoCorrect={false}
        style={[
          styles.textInput,
          // {
          //   color: colors.text,
          // },
        ]}
      /></View>

      <View >
        
    {/* <FlatList
      data={this.state.dataSource}
      renderItem={this.renderItem}
    /> */}
     <Button onPress={()=>this.f1()}>Show List</Button>
    { <FlatList
      data={ this.state.dataSource}
      // renderItem={({item}) => <Text>{item.key}</Text>}
      renderItem={this.renderItem}
    />}
  </View>

  {/* <Text style={{marginTop:25,marginBottom:-60,color:'black'}}>Choose Category:          {values[this.selectedValue]}</Text>
    <View style={{ flex: 1, paddingVertical: 80, paddingHorizontal: 40, justifyContent: 'space-between' }}>

        <ComboBox
            values={values}
            onValueSelect={selectedValue=>this.setState({selectedValue})}
            textColor={'black'}
        />
    </View> */}
      </SafeAreaView>
    );  
}  
}  

    
const styles = StyleSheet.create({

  centerContent: {

    justifyContent: 'center',

    alignItems: 'center',

    // marginTop: 100,

  },
  container: {
    flex: 1,
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#8fbc8f',
    alignItems: 'center',
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#8fbc8f',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#8fbc8f',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  checkboxWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },

  dropdown: {
    height: 50,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
},
placeholderStyle: {
    fontSize: 16,
},
selectedTextStyle: {
    fontSize: 14,
},
iconStyle: {
    width: 20,
    height: 20,
},
inputSearchStyle: {
    height: 40,
    fontSize: 16,
},
icon: {
    marginRight: 5,
},
item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
},
selectedStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 14,
    backgroundColor: 'white',
    shadowColor: '#000',
    marginTop: 8,
    marginRight: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
},
textSelectedStyle: {
    marginRight: 5,
    fontSize: 16,
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
});