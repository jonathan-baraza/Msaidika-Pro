import { View, Text } from "react-native";
import React from "react";
import Home from "./main/Home";
import About from "./main/About";

const HomeLayout = () => {
  return (
    <View className="flex-1">
      {/* <Home /> */}
      <About />
    </View>
  );
};

export default HomeLayout;
