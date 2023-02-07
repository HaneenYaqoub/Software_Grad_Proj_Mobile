import React, {useState,Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

import {useTheme} from 'react-native-paper';
import ComboBox from 'react-native-combobox';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';

import ImagePicker from 'react-native-image-crop-picker';





function delete_product1 (){
 
    
 
 const[ P_Name, setName]=React.useState('');
      
 
 const [selectedValue, setSelectedValue] = React.useState('');
    
 const values = [
     'Clothes',
     'Accessories',
     'Shoes',
     'furniture',
     'electronics'
 ];
   
  



 var comboo;

const deleteproduct=()=>{
  // const [ P_Name,setName ]  = useState('')
  // ;
  // const [ P_price,setPrice ]  = useState(0)
  // ;
  // const [ P_color,setColor ]  = useState('')
  // ;
  // const [ P_size,setSize ]  = useState('')
  // ;
 
  
  
  
  
 
  

 

//   // if (!P_Name || !P_price || !P_color || !P_size || !P_av_q) {
//   //   alert("Required feild is missing!" );
//   // }
//   // else{
  comboo=values[selectedValue];

  fetch('http://192.168.1.73/api/delete_product.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
 
    pname: P_Name,
    clothes:comboo,
 
  })
  
 
}).then((response) => response.json())
      .then((responseJson) => {
 
// Showing response message coming from server after inserting records.
        if(responseJson ==='deleted Successfully'){
alert("Deleted");
        }
else{
  alert(responseJson);

}
      }).catch((error) => {
        console.error(error);
      });
 
}
    
      // const {colors} = useTheme();
   
    return(
      <SafeAreaView>
        <View style={{marginTop:'50%'}}>
        <Text style={{marginTop:25,marginBottom:-60}}>Choose Category:          {values[selectedValue]}</Text>
        <View style={{ flex: 1, paddingVertical: 80, paddingHorizontal: 40, justifyContent: 'space-between' }}>

            <ComboBox
                values={values}
                onValueSelect={setSelectedValue}
            />
        </View>
      <View style={styles.action}>

      {/* <FontAwesome name="user-o" color={colors.text} size={20} /> */}
      <TextInput
        placeholder="Product Name"
        placeholderTextColor="#a9a9a9"
        onChangeText={setName}

        autoCorrect={false}
        // style={[
        //   styles.textInput,
        //   {
        //     color: colors.text,
        //   },
        // ]}
      />
    </View>
    
   
   
  
    
    
    <TouchableOpacity style={styles.commandButton} onPress={deleteproduct}>
      <Text style={styles.panelButtonTitle}>Delete</Text>
    </TouchableOpacity>
    </View>
    </SafeAreaView>
    );
    };
  


export default delete_product1;

const styles = StyleSheet.create({
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
});