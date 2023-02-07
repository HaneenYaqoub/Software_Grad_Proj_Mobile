import {StyleSheet} from 'react-native';
import COLORS from '../consts/color';

const STYLES = StyleSheet.create({
  categoryContainer: {
    flexDirection: 'row',
    // marginTop: 30,
    marginBottom: 20,
    justifyContent: 'space-between',
    // backgroundColor:'gray',
    padding:10,
    fontSize: 17  },
  text:{
color:'black'
  },
  inputContainer: {flexDirection: 'row', marginTop: 20},
  input: {
    color: COLORS.light,
    paddingLeft: 30,
    borderBottomWidth: 1,
    borderColor: COLORS.light,
    borderBottomWidth: 0.5,
    flex: 1,
    fontSize: 18,
  },
  inputIcon: {marginTop: 15, position: 'absolute'},
  btnPrimary: {
    backgroundColor: `#8fbc8f`,
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    
  },
    
  btnPrimary1: {
    backgroundColor: `lightseagreen`,
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginLeft:130
  },
    

  btnSecondary: {
    height: 50,
    borderWidth: 1,
    borderColor: '#a5a5a5',
    // color:`#8fbc8f`,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    flex: 1,
    flexDirection: 'row',
  },
  btnImage: {width: 20, height: 20},
  logo: {flex:0.5,aspectRatio:1.3,marginTop:20,marginBottom:10},
  line: {height: 1, width: 30, backgroundColor: '#a5a5a5'},
});

export default STYLES;
