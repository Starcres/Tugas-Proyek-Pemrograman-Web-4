import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import Navbar from "../component/navbar";
import { Ionicons } from "@expo/vector-icons";

const mockData = [
  {
    id: "1",
    title: "Solo Leveling",
    latestChapter: "Chapter 190",
    updateDate: "March 10, 2025",
    cover: require("../assets/SL.png"),
  },
  {
    id: "2",
    title: "Omniscient Reader",
    latestChapter: "Chapter 170",
    updateDate: "March 9, 2025",
    cover: require("../assets/ORV.jpeg"),
  },
  {
    id: "3",
    title: "Nano Machine",
    latestChapter: "Chapter 249",
    updateDate: "March 5, 2025",
    cover: require("../assets/NM.webp"),
  },
  {
    id: "4",
    title: "Revenge of the Iron-Blooded Sword Hound",
    latestChapter: "Chapter 103",
    updateDate: "March 9, 2025",
    cover: require("../assets/ROT.jpeg"),
  },
];

function LatestUpdateScreen({ navigation }) {
  const [bookmarked, setBookmarked] = useState([]);

  const toggleBookmark = (id) => {
    if (bookmarked.includes(id)) {
      setBookmarked(bookmarked.filter((item) => item !== id));
    } else {
      setBookmarked([...bookmarked, id]);
    }
  };

  // Navigasi ke BookmarkScreen sambil bawa data manhwa yang dibookmark
  const goToBookmarkScreen = () => {
    const bookmarkedManhwa = mockData.filter((item) =>
      bookmarked.includes(item.id)
    );
    navigation.navigate("BookmarkScreen", { bookmarkedManhwa });
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.cover} style={styles.cover} resizeMode="cover" />
      <TouchableOpacity
        style={styles.bookmarkButton}
        onPress={() => toggleBookmark(item.id)}
      >
        <Ionicons
          name={bookmarked.includes(item.id) ? "bookmark" : "bookmark-outline"}
          size={24}
          color="#ffd700"
        />
      </TouchableOpacity>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.chapter}>{item.latestChapter}</Text>
      <Text style={styles.date}>{item.updateDate}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Navbar navigation={navigation} />
      <Text style={styles.header}>Latest Manhwa Updates</Text>

      {/* Tombol untuk ke halaman Bookmark */}
      <TouchableOpacity
        style={styles.goToBookmarkButton}
        onPress={goToBookmarkScreen}
      >
        <Text style={styles.goToBookmarkButtonText}>📖 View Bookmarked</Text>
      </TouchableOpacity>

      <FlatList
        data={mockData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={2}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
    marginVertical: 10,
  },
  card: {
    backgroundColor: "#1f1f1f",
    flex: 1,
    margin: 8,
    borderRadius: 8,
    overflow: "hidden",
    position: "relative",
  },
  cover: {
    width: "100%",
    height: 150,
  },
  bookmarkButton: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 12,
    padding: 4,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
    paddingHorizontal: 8,
    paddingTop: 5,
  },
  chapter: {
    fontSize: 12,
    color: "#ffd700",
    paddingHorizontal: 8,
    paddingTop: 2,
  },
  date: {
    fontSize: 10,
    color: "#aaa",
    paddingHorizontal: 8,
    paddingBottom: 8,
  },
  goToBookmarkButton: {
    backgroundColor: "#6200ea",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignSelf: "center",
    marginVertical: 10,
  },
  goToBookmarkButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default LatestUpdateScreen;
