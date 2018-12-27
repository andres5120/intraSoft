import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList, ImageBackground, Dimensions } from 'react-native';
import { List,ListItem } from 'react-native-elements';

const{width: WIDTH } = Dimensions.get('window')

export default class ComponentLook extends Component{
        
    constructor(Props){
        super(Props);
      
        this.state = {
          loading: false,
          User: [],
          url: 'http://3.82.243.220:8000/api/filtrar/usuarios?nombre=jhon'
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
        if(this.state.loading){
          return(
            <View style={styles.container}>
              <Text style={styles.welcome}>Error al cargar</Text>
            </View>
          )
        };
        return (
         <ImageBackground source={{uri: 'https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80' }} style={styles.backgroundContainer} > 
            <View style= {{flex: 1, paddingTop:90, paddingLeft:1, paddingRight: 1, backgroundColor:'transparent'}}>
            <Text style={styles.title}>Resultado de la busqueda</Text>
              <List   containerStyle={styles.container} >
                <FlatList
                  data = {this.state.User}
                  renderItem = {({ item }) =>(
                    <ListItem
                      roundAvatar
                      title={<Text style={styles.texto}>{item.nombre} {item.apellido}</Text>}
                      subtitle={<Text style={styles.texto}> ID: {item.idUsuario} {'\n'}Cedula: {item.numeroDocumento} {'\n'} Rol: {item.rolUsuario}</Text>}
                      avatar = {{uri: item.fotoPerfil}}
      
                      containerStyle={styles.containerBlock}
                    />
                  )}
                  keyExtractor = {(item, index) => index.toString()}
                />
              </List>
            </View>
         </ImageBackground>  
         );
     }
}



const styles = StyleSheet.create({
    container: {
      borderTopWidth: 0,
      borderBottomWidth: 0,
      position:'relative',
      width: WIDTH - 10,
      marginRight: 100,
      left: 55,
      top: 35
   
    },
    welcome: {
      height: 20,
      textAlign: 'center',
      margin: 10,
      backgroundColor: 'blue',
    },
    texto: {
      textAlign: 'center',
      color: 'black',
      marginBottom: 5,
    },
    containerBlock:{
      borderBottomWidth: 5,
      borderLeftWidth:5,
      borderRightWidth:5,
      borderTopWidth:5,
      paddingBottom:35,
      paddingTop:35,
      borderColor:'silver',
      marginLeft: 15,
      marginRight: 20,
    },
    backgroundContainer:{
      flex:1,
      width: null,
      height: null,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      color: 'white',
      fontSize: 30,
      textAlign: 'center'
    }
  });