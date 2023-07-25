import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  StatusBar,
} from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation: any = useNavigation();
  return (
    <View className="flex-1 bg-white" style={styles.container}>
      <View className="border-b border-gray-200 p-0 m-0 relative mb-3 flex flex-row  items-center px-4">
        <Pressable className="" onPress={() => navigation.openDrawer()}>
          <AntDesign name="menu-fold" size={20} color="black" />
        </Pressable>
        <Image
          className="w-[200px] h-[80px] m-0 -ml-4 -z-10"
          resizeMode="center"
          source={require("../../assets/logo2.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
  },
});
export default Home;
