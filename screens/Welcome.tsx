import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";

const Welcome = () => {
  return (
    <View
      className="flex-1 p-6 flex-col justify-between"
      style={styles.container}
    >
      <View>
        <Text className="font-mt_bold text-4xl mt-4 leading-10">
          Welcome to Msaidika Mobile Application.
        </Text>
        <Text
          style={{ lineHeight: 22, fontSize: 12 }}
          className="font-mt_mid mt-8 text-xm text-gray-400"
        >
          Simplify local life with M-Saidika. Order, connect, and thrive
          effortlessly. Access services, find jobs and houses, and get emergency
          assistance. Empowering residents, transforming communities.
        </Text>
      </View>
      <View className="w-full">
        <TouchableOpacity
          activeOpacity={0.5}
          className="w-full bg-[#007acc] p-3 rounded-lg flex items-center justify-center "
        >
          <Text className="text-white">Create an Account</Text>
        </TouchableOpacity>
        <View className="flex my-6 flex-row items-center justify-between">
          <View className="h-[1px] bg-gray-300 flex-1"></View>
          <Text className="text-gray-400 mx-4">or Sign up with</Text>
          <View className="h-[1px] bg-gray-300 flex-1"></View>
        </View>
        <TouchableOpacity>
          <View className="rounded-full w-[50px] mx-auto border border-gray-300 h-[50px] p-2 flex items-center justify-center">
            <Image
              resizeMode="contain"
              className="w-full"
              source={require("../assets/google.png")}
            />
          </View>
        </TouchableOpacity>
        <View className="mt-6 flex flex-row item-center justify-center">
          <Text className="text-gray-500">I already have an account.</Text>
          <TouchableOpacity>
            <Text className="text-[#007acc] font-bold ml-1">Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
  },
});
export default Welcome;
