import { View, Text } from "react-native";
import React from "react";
import { PROJECT_ID } from "@env";

const Home = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-2xl">Home Screen {PROJECT_ID}</Text>
    </View>
  );
};

export default Home;
