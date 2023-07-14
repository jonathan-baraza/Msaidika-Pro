import { View, Text, Image } from "react-native";
import React from "react";

const LoaderIcon = () => {
  return (
    <View
      style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
      className="flex-1  absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center z-10"
    >
      <View className="bg-white rounded-xl  p-4 shadow-2xl">
        <Image
          className="w-[70px]  h-[70px]"
          resizeMode="contain"
          source={require("../../assets/loading.gif")}
        />
      </View>
    </View>
  );
};

export default LoaderIcon;
