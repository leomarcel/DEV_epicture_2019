import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import MyNavbar from "./Components/MyNavbar";

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <MyNavbar />
      </SafeAreaView>
    );
  }
}
let styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
