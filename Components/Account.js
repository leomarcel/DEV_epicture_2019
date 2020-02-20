import React from "react";
import {
  StyleSheet,
  Button,
  TextInput,
  FlatList,
  View,
  Image,
  Text,
  TouchableOpacity
} from "react-native";
import ImgurItem from "./ImgurItem";

class Account extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headers}>
          <Image
            style={styles.image_logo}
            source={require("../assets/logo.png")}
          />
          <Text style={styles.titre}> Compte </Text>
        </View>
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(23,24,25,0)' 
              placeholder="Email"
              placeholderTextColor = "#ffffff"
              selectionColor="#fff"
              keyboardType="email-address"
              onSubmitEditing={()=> this.password.focus()}
              />
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(23,24,25,0)' 
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor = "#ffffff"
              ref={(input) => this.password = input}
              />  
           <TouchableOpacity style={styles.button}>
             <Text style={styles.buttonText}>Connexion</Text>
             {/* <Text style={styles.buttonText}>{this.props.type}</Text> */}
           </TouchableOpacity>     
  		</View>
    );
  }
}

let styles = StyleSheet.create({
  container : {
    flexGrow: 1,
    justifyContent:'center',
    alignItems: 'center'
  },
  headers: {
    margin: 10,
    flexDirection: "row"
  },
  image_logo: {
    width: 40,
    height: 40
  },
  titre: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  inputBox: {
    width:300,
    backgroundColor:'rgba(23,24,25,0.5)',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    color:'#ffffff',
    marginVertical: 10
  },
  button: {
    width:300,
    backgroundColor:'#1c313a',
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  }
});

export default Account;
