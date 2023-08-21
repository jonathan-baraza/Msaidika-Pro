import { View, Text, StatusBar, StyleSheet, Pressable } from "react-native";
import React from "react";
import { Ionicons, AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation,useRoute } from "@react-navigation/native";

const MenuCover = ({ children }: { children: any }) => {
  const navigation: any = useNavigation();
  const route:any=useRoute();
  return (
    <View className="flex-1 m-0 p-0 " style={styles.container}>
      <View className="py-2 px-4 flex items-center justify-between flex-row bg-white">
        <Pressable className="" onPress={() => navigation.openDrawer()}>
          <AntDesign name="menu-fold" size={20} color="black" />
        </Pressable>
        <Text className="semi-bold text-base">{route.name}</Text>
        <Pressable className="" onPress={() => navigation.pop()}>
          <AntDesign name="back" size={24} color="black" />
        </Pressable>
      </View>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
  },
});
export default MenuCover;
