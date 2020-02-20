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
import Lightbox from "react-native-lightbox";
import FlexImage from "react-native-flex-image";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.searchedText = ""; // Initialisation de notre donnée searchedText en dehors du state
    this.state = {
      data: [],
      isLoading: true // Par défaut à false car il n'y a pas de chargement tant qu'on ne lance pas de recherche
    };
  }

  componentDidMount() {
    //exec au démmarage de l'appli
  }

  _APICall(searched) {
    const sort = "top";
    const url =
      "https://api.imgur.com/3/gallery/search/" + sort + "/?q=" + searched;

    return fetch(url, {
      methode: "GET",
      headers: {  }
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

  _searchTextInputChanged(text) {
    this.searchedText = text; // Modification du texte recherché à chaque saisie de texte, sans passer par le setState comme avant
  }

  _displayLoading() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loading_container}>
          <ActivityIndicator size="large" />
          {/* Le component ActivityIndicator possède une propriété size pour définir la taille du visuel de chargement : small ou large. Par défaut size vaut small, on met donc large pour que le chargement soit bien visible */}
        </View>
      );
    }
  }
  _loadResult() {
    if (this.searchedText.length > 0) {
      this.setState({ isLoading: true }); // Lancement du chargement
      this._APICall(this.searchedText).then(data => {
        this.setState({
          isLoading: false
        });
      });
    }
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
      <View style={styles.mainContainer}>
        <View style={styles.headers}>
          <Image
            style={styles.image_logo}
            source={require("../assets/logo.png")}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Search Imgur"
            onChangeText={text => this._searchTextInputChanged(text)}
            onSubmitEditing={() => this._loadResult()}
          />
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
  mainContainer: {
    margin: 10,
    flex: 1
  },
  headers: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  image_logo: {
    width: 40,
    height: 40
  },
  textInput: {
    marginLeft: 10,
    marginRight: 5,
    paddingLeft: 10,
    height: 50,
    width: "80%",
    borderColor: "#5c4ac7",
    borderWidth: 2,
    borderRadius: 10
  },
  titre: {
    fontSize: 40,
    fontWeight: "bold"
  },
  cover: {
    backgroundColor: "gray",
    borderRadius: 25,
    marginTop: 10,
    padding: 20
  },
  loading_container: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center"
  },

  cover_title: {
    marginTop: 10,
    fontWeight: "bold",
    color: "#E6E6E6",
    fontSize: 14,
    flexWrap: "wrap",
    textAlign: "center"
  }

});

export default Search;
