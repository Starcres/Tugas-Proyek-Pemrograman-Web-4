import React from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import Navbar from "../component/navbar";

function BookmarkScreen({ route, navigation }) {
  const bookmarkedManhwa = route.params?.bookmarkedManhwa || []; // Tambahin fallback biar gak error

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.cover} style={styles.cover} resizeMode="cover" />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.chapter}>{item.latestChapter}</Text>
      <Text style={styles.date}>{item.updateDate}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Navbar navigation={navigation} />
      <Text style={styles.header}>Bookmarked Manhwa</Text>
      {bookmarkedManhwa.length > 0 ? (
        <FlatList
          data={bookmarkedManhwa}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          numColumns={2}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      ) : (
        <Text style={styles.emptyText}>No manhwa bookmarked yet!</Text>
      )}
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
  },
  cover: {
    width: "100%",
    height: 150,
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
  emptyText: {
    color: "#aaa",
    textAlign: "center",
    marginTop: 20,
  },
});

export default BookmarkScreen;
