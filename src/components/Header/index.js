import React from "react";
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const StatusBarHeight = StatusBar.currentHeight
  ? StatusBar.currentHeight + 22
  : 64;

export default function Header({ name }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.username}>{name}</Text>
        <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
          <Feather name="user" size={27} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#8000ff",
    paddingTop: StatusBarHeight,
    flexDirection: "row",
    paddingStart: 16,
    paddingBottom: 44,
    paddingEnd: 16,
  },
  content: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  username: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  buttonUser: {
    width: 44,
    height: 44,
    borderRadius: 44 / 2,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
});
