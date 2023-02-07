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


export default function App() {
// var i;
  const DATA = [
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



  const [selectedItems, setSelected] = useState([]);

  const [Pic, SetPic] = React.useState('');
  const [P_Name, SetName] = React.useState('');
  const [P_Quant, SetQuant] = React.useState(0);
  const [P_Price, SetPrice] = React.useState(0.0);
  const [P_Color, SetColor] = React.useState('');
  const [Supp, SetSupp] = React.useState('');

  // var iii=React.useState('');
  // var iii=React.useState('');

  // var la=React.useState('');
  // var me=React.useState('');

  var iii2;
  var value = [];

  // const [iii, SetSize] = React.useState('');
  // const [P_Size1, SetSize1] = React.useState(initialState);
  // const [P_Size2, SetSize2] = React.useState(initialState);

  const values = [
    'Clothes',
    'Accessories',
    'Shoes',
    'furniture',
    'electronics'
];
const [isSelected, setSelection] = useState(false);
const [isSelected1, setSelection1] = useState(false);
const [isSelected2, setSelection2] = useState(false);
const [selectedValue, setSelectedValue] = useState('');
const renderDataItem = (item,item2) => {
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



  const onSelectedItemsChange = (selectedItems) => {
 
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
var small;
var medium;
var large;
var comboo;
const addimage=()=>{
  small=(isSelected ? "Small" : "");
  medium=(isSelected1 ? "Medium" : "");
  large=(isSelected2 ? "Large" : "");
  comboo=values[selectedValue];
  fetch('http://192.168.1.73/api/aploadimage.php', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
   
     Pic:Pic,
     pname:P_Name,
     available_quantity:P_Quant,
     price:P_Price,
     size:small,
     medium:medium,
     large:large,
     color:P_Color,
     clothes:comboo,
     addsuplier:Supp

     

    })
    
   
  }).then((response) => response.json())
        .then((responseJson) => {
   
  // Showing response message coming from server after inserting records.
          if(responseJson ==='Uploaded Successfully'){

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

  const uploadImage = () => {
    let options = {

      mediaType: 'photo',

      quality: 1,

      includeBase64: true,

    };

    launchImageLibrary(options, response => {

      if (response.didCancel) {

        // setToastMessage('Cancelled image selection');

      } else if (response.errorCode == 'permission') {

        // setToastMessage('Permission not satisfied');

      } else if (response.errorCode == 'others') {

        // setToastMessage(response.errorMessage);

      } else if (response.assets[0].fileSize > 2097152) {

        Alert.alert(

          'Maximum image size exceeded',

          'Please choose a file under 2 MB',

          [{text: 'OK'}],

        );

      } else {

        SetPic(response.assets[0].base64);

      }

    });

  };



  const removeImage = () => {

    SetPic('');

    setToastMessage('Image removed');

  };

  const handleChange = (e) => {
    const { id, value } = e.target; // <-- save event id and value
  
    setNewMovie(state => ({
      ...state,    // <-- shallow copy previous state
      [id]: value, // <-- update property by dynamic key
    }));
  };
  function onChange1(e) { 
    setSelected(e.value); 
  } 
  return (
<ScrollView showsVerticalScrollIndicator={false}>
   
      <View style={styles.centerContent}>
      <Text style={{color:'gray',fontStyle:'italic',fontSize:16,marginTop:50}}>Click here to add image</Text>

        <TouchableHighlight

          onPress={() => uploadImage()}

          underlayColor="rgba(0,0,0,0)">
          <Avatar.Image

            size={250}
style={{backgroundColor:'white'}}
            source={{uri: 'data:image/png;base64,' + Pic}}
            

          />

        </TouchableHighlight>

      </View>
      <View>
    <Text style={{marginTop:25,marginBottom:-60,color:'black'}}>Choose Category:          {values[selectedValue]}</Text>
        <View style={{ flex: 1, paddingVertical: 80, paddingHorizontal: 40, justifyContent: 'space-between' }}>

            <ComboBox
                values={values}
                onValueSelect={setSelectedValue}
                textColor={'black'}
            />
        </View>

      <View style={styles.action}>
          {/* <FontAwesome name="user-o" color={colors.text} size={20} /> */}
          <TextInput
            placeholder="Product Name"
            placeholderTextColor="#a9a9a9"
            // onChangeText={setName}
            onChangeText={SetName}
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
          {/* <FontAwesome name="user-o" color={colors.text} size={20} /> */}
          <TextInput
            placeholder="Product Price"
            placeholderTextColor="#a9a9a9"
            // onChangeText={setPrice}
            onChangeText={SetPrice}
            autoCorrect={false}
            style={[
              styles.textInput,
              // {
              //   color: colors.text,
              // },
            ]}
          />
        </View>
        {/* <View style={styles.action}> */}
        {/* <View>
        <View>
          <View style={styles.checkboxWrapper}>
            <CheckBox
              value={'Large'}
              // onValueChange={value =>
              //   setState({
              //     P_Size,
              //     Large: value,
              //   })
                
              // }
              onValueSelect={setState}
              
            />
            <Text style={{color:'black',}}>Large</Text>
          </View>
          <View style={styles.checkboxWrapper}>
            <CheckBox
              value={P_Size.Meduim}
              onValueChange={value =>
                setState({
                  ...P_Size,
                  Meduim: value,
                })
              }
            />
            <Text style={{color:'black',}}>Meduim</Text>
          </View>
          <View style={styles.checkboxWrapper}>
            <CheckBox
              value={P_Size.Small}
              onValueChange={value =>
                setState({
                  ...P_Size,
                  Small: value,
                })
              }
            />
            <Text style={{color:'black',}}>Small</Text>
          </View>
          </View>
        </View> */}
          {/* <Feather name="phone" color={colors.text} size={20} />
          
        {/* </View> */}
        <View style={styles.action}>
          {/* <FontAwesome name="envelope-o" color={colors.text} size={20} /> */}
          <TextInput
            placeholder="product color"
            placeholderTextColor="#a9a9a9"
            // onChangeText={setColor}
            onChangeText={SetColor}
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
        <View style={styles.action}>
          {/* <FontAwesome name="envelope-o" color={colors.text} size={20} /> */}
          <TextInput
            placeholder="available quantity"
            placeholderTextColor="#a9a9a9"
            // onChangeText={setQuant}
            onChangeText={SetQuant}
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
     
      <View style={styles.action}>
          {/* <FontAwesome name="user-o" color={colors.text} size={20} /> */}
          <TextInput
            placeholder="Supplier name"
            placeholderTextColor="#a9a9a9"
            // onChangeText={setName}
            onChangeText={SetSupp}
            autoCorrect={false}
            style={[
              styles.textInput,
              // {
              //   color: colors.text,
              // },
            ]}
          />
        </View>
          
            <StatusBar />
          
 



        </View>

      <View

        style={[styles.centerContent, {marginTop: 2,marginBottom:25, flexDirection: 'row'}]}>

        <Button mode="contained" onPress={() => addimage()}>

          Upload Image

        </Button>

        <Button

          mode="contained"

          onPress={() => removeImage()}

          style={{marginLeft: 20}}>

          Remove Image

        </Button>

      </View>

    </View>
    </ScrollView>

  );
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