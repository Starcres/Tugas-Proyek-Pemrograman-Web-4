import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Tambahin ini biar ikon bisa dipake

export default function Navbar({ navigation }) {
  const goToHome = () => navigation.navigate("Home");
  const goToLatestUpdate = () => navigation.navigate("LatestUpdate");
  const goToBookmark = () => navigation.navigate("BookmarkScreen");

  return (
    <View style={styles.navbar}>
      <Text style={styles.navText}>📚 ManhwaRex</Text>
      <View style={styles.navLinks}>
        <TouchableOpacity style={styles.navButton} onPress={goToHome}>
          <Text style={styles.navButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={goToLatestUpdate}>
          <Text style={styles.navButtonText}>Latest Update</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={goToBookmark}>
          <Text style={styles.navButtonText}>Bookmark</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Ionicons name="person-circle-outline" size={28} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate("Popular")}
        >
          <Text style={styles.navButtonText}>Popular</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: "#6200ea",
    paddingVertical: 15,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  navText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  navLinks: {
    flexDirection: "row",
    gap: 20,
  },
  navButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: "#7d1aff",
  },
  navButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
