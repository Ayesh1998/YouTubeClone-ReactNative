import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/header";
import BottomTabBar from "./components/bottom-tab";
import VideoItem from "./components/video-item";
import data from "./data.json";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.body}>
        <VideoItem video={data.items[0]} />
      </View>

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
