import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import Navbar from "../component/navbar";

const mockPopularManhwa = [
  {
    id: "1",
    title: "Solo Leveling",
    cover: "../assets/SL.png",
    description: "Hunter terlemah yang menjadi terkuat.",
  },
  {
    id: "2",
    title: "Omniscient Reader's Viewpoint",
    cover: "../assets/ORV.jpeg",
    description: "Dunia novel menjadi kenyataan.",
  },
  {
    id: "3",
    title: "Nano Machine",
    cover: "../assets/NM.webp",
    description: "Raja yang bereinkarnasi ke dunia sihir.",
  },
];

const PopularScreen = ({ navigation }) => {
  const [manhwaList, setManhwaList] = useState(mockPopularManhwa);

  return (
    <View style={styles.container}>
      <Navbar navigation={navigation} />
      <FlatList
        data={manhwaList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.cover }} style={styles.cover} />
            <View style={styles.info}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#1f1f1f",
    margin: 10,
    borderRadius: 8,
    padding: 10,
  },
  cover: {
    width: 100,
    height: 150,
    borderRadius: 8,
  },
  info: {
    marginLeft: 10,
    flex: 1,
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    color: "#aaa",
    marginTop: 5,
  },
});

export default PopularScreen;
