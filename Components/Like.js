import React from "react";
import {
  StyleSheet,
  Button,
  TextInput,
  FlatList,
  View,
  Image,
  Text
} from "react-native";
import ImgurItem from "./ImgurItem";

class Like extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  componentDidMount() {
    //exec au démmarage de l'appli
  }

  render() {
    return (
      <View style={styles.mainContainer}>
          <View style={styles.headers}>
          <Image
            style={styles.image_logo}
            source={require("../assets/logo.png")}
          />
          <Text style={styles.titre}> Like </Text>
        </View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  mainContainer: {
    margin: 10,
    flex: 1,
    flexDirection: "row"
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
  }
});

export default Like;
