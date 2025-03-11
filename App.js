import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screen/homescreen";
import LatestUpdateScreen from "./screen/latestupdatescreen";
import BookmarkScreen from "./screen/bookmarkscreen";
import RegisterScreen from "./screen/registerscreen";
import PopularScreen from "./screen/popularscreen";
import Navbar from "./component/navbar";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeWithNavbar} />
        <Stack.Screen name="LatestUpdate" component={LatestUpdateScreen} />
        <Stack.Screen name="BookmarkScreen" component={BookmarkScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Popular" component={PopularScreen} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

function HomeWithNavbar({ navigation }) {
  return (
    <View style={styles.container}>
      <Navbar navigation={navigation} />
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
