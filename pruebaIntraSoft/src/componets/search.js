

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity, Dimensions} from 'react-native';
import { Icon, SearchBar } from 'react-native-elements';

const{width: WIDTH } = Dimensions.get('window')

export default class ComponentSearch extends Component{

  constructor(Props){
    super(Props);
  
    this.state = {
      loading: false,
      User: [],
      url: 'http://3.82.243.220:8000/api/filtrar/usuarios?nombre={?}&apellido={?}'
    }
  }

  componentDidMount(){
      this.getUser();
  }

  getUser = () =>{
      this.setState({ loading:true })
    
      fetch(this.state.url)
      .then(res => res.json())
      .then(res =>{
        this.setState({
          User: res,
          loading: false
        })
      })

    .catch((error) =>{
      console.log(error);
    })
 }


  render() {
    return (
      //imagen de fondo y la del icono de busqueda
      <ImageBackground source={{uri: 'https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80' }} style={styles.backgroundContainer}>
        <View style={styles.block}>
          <Text style={styles.welcome}>Realice la busqueda aca</Text>
          <Text style={styles.text} >Nombre</Text> 
          <TextInput
            style={styles.inputs}
            onChangeText={this.getUser}
            searchIcon={false}
            placeholder={''}
            placeholderTextColor={'white'}
            underlineColorAndroid='transparent'
          />
        </View>
        <View style={styles.block}>
          <Text style={styles.text} >Apellido</Text>
          <TextInput
            style={styles.inputs}
            placeholder={''}
            onChangeText={this.getUser}
            placeholderTextColor={'white'}
            underlineColorAndroid='transparent' 
           />
        </View>
        <View style={styles.block} > 
          <Text style={styles.text} >Telefono</Text>
          <TextInput
            style={styles.inputs}
            placeholder={''}
            placeholderTextColor={'white'}
            underlineColorAndroid='transparent'
           />
          </View>
          <View>
            <Icon
              name='loupe'
              color= 'white'
              size = {40}
              onPress={() => this.props.navigation.navigate('Profile')}
            />
          </View>
      </ImageBackground>  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: 'white',
  },
  block: {
    marginBottom: 35,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  backgroundContainer:{
    flex:1,
    width: null,
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
    marginTop: 30,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    color: 'white',
    marginHorizontal: 25
  },
  text: {
    color: 'white',
    fontSize: 25,
    textAlign: 'left',
    paddingLeft: 45,
  }
});
