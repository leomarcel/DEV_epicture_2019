import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

class ImgurItem extends React.Component {
  render() {
    const data = this.props.data;
    try {
      var img = this.props.data.images[0].link;
    }
    catch(error){
      var img = "https://i.imgur.com/SYsbyDV.jpg";
    }

    return (
      <View style={styles.main_container}>
        <Image style={styles.image} source={{ uri: img }} />
        <View style={styles.content_container}>
          <View style={styles.header_container}>
            <Text style={styles.title_text}>{data.title}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    minHeight: 200,
    flexDirection: "column",
    backgroundColor: "gray",
    alignItems: "center",
    borderRadius: 25,
    marginTop: 10
  },
  image: {
    flex: 1,
    aspectRatio: 2,
    borderRadius: 25,
    margin: 5,
    // backgroundColor: "blue"
  },
  content_container: {
    margin: 5
  },
  header_container: {
    textAlign: "justify",
    flexDirection: "row"
  },
  title_text: {
    fontWeight: "bold",
    color: "#E6E6E6",
    fontSize: 14,
    flexWrap: "wrap",
    textAlign: "center",
    marginLeft: 3,
    marginRight: 3,
  }
});

export default ImgurItem;
