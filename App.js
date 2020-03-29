import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/header";
import BottomTabBar from "./components/bottom-tab";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.body}></View>
      <BottomTabBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  body: {
    flex: 1
  }
});
