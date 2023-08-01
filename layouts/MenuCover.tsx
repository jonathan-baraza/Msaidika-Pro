import { View, Text, StatusBar, StyleSheet, Pressable } from "react-native";
import React from "react";
import { Ionicons, AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const MenuCover = ({ children }: { children: any }) => {
  const navigation: any = useNavigation();
  return (
    <View className="flex-1 m-0 p-0 " style={styles.container}>
      <View className="py-2 px-4">
        <Pressable className="" onPress={() => navigation.openDrawer()}>
          <AntDesign name="menu-fold" size={20} color="black" />
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
