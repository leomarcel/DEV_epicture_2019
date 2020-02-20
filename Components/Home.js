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
import FlexImage from "react-native-flex-image";
import Lightbox from "react-native-lightbox";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    //exec au démmarage de l'appli
    this._APICall();
  }

  _APICall() {
    const url =
      "https://api.imgur.com/3/gallery/hot/viral/day/1?showViral=&mature=&album_previews=";

    return fetch(url, {
      methode: "GET",
      headers: { Authorization: "CLIENT-ID c7521e306b01b8f" }
    })
      .then(response => response.json())
      .then(result => {
        this.setState({
          data: result.data.filter(
            el => el.images !== undefined && !el.images[0].link.endsWith(".mp4")
          ),
          dataMp4: result.data.filter(
            el => el.images !== undefined && el.images[0].link.endsWith(".mp4")
          )
        });
      })
      .catch(error => console.log(error));
  }

  cover(item) {
    return (
      <View style={styles.cover}>
        <View style={styles.flex_image}>
          <Lightbox>
            <FlexImage source={{ uri: item.images[0].link }} />
          </Lightbox>
        </View>
        <Text style={styles.cover_title}>{item.title}</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.main_container}>
        <View style={styles.headers}>
          <Image
            style={styles.image_logo}
            source={require("../assets/logo.png")}
          />
          <Text style={styles.header_title}> Home</Text>
        </View>

        <FlatList
          style={styles.flat_list}
          data={this.state.data}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => this.cover(item)}
          value={null}
          children={null}
          descriptors={null}
          navigation={null}
          state={null}
        />
      </View>
    );
  }
}

let styles = StyleSheet.create({
  main_container: {},

  headers: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },

  image_logo: {
    width: 40,
    height: 40
  },

  header_title: {
    fontSize: 40,
    fontWeight: "bold"
  },

  flat_list: {},

  cover: {
    backgroundColor: "gray",
    borderRadius: 25,
    marginTop: 10,
    padding: 20
  },

  flex_image: {},

  cover_title: {
    marginTop: 10,
    fontWeight: "bold",
    color: "#E6E6E6",
    fontSize: 14,
    flexWrap: "wrap",
    textAlign: "center"
  }
});

export default Home;
