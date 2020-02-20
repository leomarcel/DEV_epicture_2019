import * as React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import Search from "./Search";
import Home from "./Home";
import Account from "./Account"
import Like from "./Like";

function HomeScreen() {
  return (
    <View style={styles.mainContainer}>
      <Home />
    </View>
  );
}

function SearchScreen() {
  return (
    <View style={styles.mainContainer}>
      <Search />
    </View>
  );
}

function CompteScreen() {
  return (
    <View style={styles.mainContainer}>
      <Account />
    </View>
  );
}

function LikeScreen() {
  return (
    <View style={styles.mainContainer}>
      <Like />
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            )
          }}
        />
        <Tab.Screen
          name="Recherche"
          component={SearchScreen}
          options={{
            tabBarLabel: "Recherche",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="feature-search-outline"
                color={color}
                size={size}
              />
            )
          }}
        />
        <Tab.Screen
          name="Like"
          component={LikeScreen}
          options={{
            tabBarLabel: "Like",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="heart" color={color} size={size} />
            )
          }}
        />
        <Tab.Screen
          name="Compte"
          component={CompteScreen}
          options={{
            tabBarLabel: "Compte",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account"
                color={color}
                size={size}
              />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

let styles = StyleSheet.create({
  mainContainer: {
    margin: 20,
    flex: 1
  },
  image_logo: {
    width: 40,
    height: 40
  }
});
