import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground, Dimensions, TextInput, TouchableOpacity} from 'react-native';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { createStackNavigator, createAppContainer, StackNavigator} from 'react-navigation';


const{width: WIDTH } = Dimensions.get('window')

export default class ComponentLogin extends Component {


  render() {
    return (
      <ImageBackground source={{uri: 'https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80' }} style={styles.backgroundContainer}>
       <View style={styles.inputContainer}>
         <Text style={styles.title}>
           Bienvenido
         </Text>
       </View>
        <View style={styles.inputContainer}>
          <Icon name={'ios-person'} size={28} color={'rgba(255, 255, 255, 0.7)'} style={styles.inputIcon} />
          <TextInput
          style={styles.inputs}
            placeholder={'Usuario'}
            placeholderTextColor={'white'}
            underlineColorAndroid='transparent'
          />
        </View>
        <View style={styles.inputContainer}>
          <Icon name={'ios-lock'} size={28} color={'rgba(255, 255, 255, 0.7)'} style={styles.inputIcon} />
          <TextInput
          style={styles.inputs}
            placeholder={'password'}
            secureTextEntry={true}
            placeholderTextColor={'white'}
            underlineColorAndroid='transparent'
          />

          <TouchableOpacity style={styles.btncontent} onPress={() => this.props.navigation.navigate('Details')}>
              <Text style={styles.texts}>
                Login
              </Text>
          </TouchableOpacity>

        </View>
      </ImageBackground>
     );
  }
}

const styles = StyleSheet.create({
  texto: {
    textAlign: 'center',
    color: 'black',
    marginBottom: 5,
  },
  backgroundContainer:{
    flex:1,
    width:null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputs: {
    width: WIDTH - 55,
    height:45,
    borderRadius:45,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    color: 'white',
    marginHorizontal: 25
  },
  inputIcon:{
    position: 'absolute',
    top:8,
    left: 37,
  },
  inputContainer:{
    marginTop: 10
  },
  btncontent:{
    width: WIDTH - 55,
    height:45,
    borderRadius:45,
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
    justifyContent: 'center',
    marginTop: 20,
    marginLeft: 25
  },
  texts:{
    color: 'white',
    fontSize: 16,
    textAlign: 'center'
  },
  title:{
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 30
  }


});