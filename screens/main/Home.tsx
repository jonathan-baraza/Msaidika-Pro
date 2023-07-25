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
import Toast from "react-native-root-toast";

const Home = () => {
  const navigation: any = useNavigation();

  const handleCardPressed = (cardName: string) => {
    Toast.show(`Card for ${cardName} pressed`, {
      duration: Toast.durations.SHORT,
      animation: true,
      textStyle: {
        fontSize: 12,
      },
    });
  };

  return (
    <View className="flex-1 bg-white" style={styles.container}>
      <View className="border-b border-gray-200 p-0 m-0 relative flex flex-row  items-center px-4">
        <Pressable className="" onPress={() => navigation.openDrawer()}>
          <AntDesign name="menu-fold" size={20} color="black" />
        </Pressable>
        <Image
          className="w-[200px] h-[80px] m-0 -ml-4 -z-10"
          resizeMode="center"
          source={require("../../assets/logo2.png")}
        />
      </View>
      <View className="flex-1 flex-row flex-wrap bg-[#f2ffff] px-1">
        {/* Job card */}
        <Pressable
          onPress={() => {
            handleCardPressed("job");
          }}
          className="w-1/2 p-4"
        >
          <View className="bg-white rounded-lg flex overflow-hidden  shadow shadow-xl shadow-black">
            <Image
              className="w-full h-[100px] "
              resizeMode="cover"
              source={{
                uri: "https://img.freepik.com/free-photo/hiring-concept-with-empty-chair_23-2149519862.jpg?size=626&ext=jpg&ga=GA1.1.1480004811.1676452419&semt=sph",
              }}
            />
            <View className="p-3 flex justify-center">
              <Text className="font-bold text-center">Find jobs</Text>
            </View>
          </View>
        </Pressable>

        {/* Transport card */}
        <Pressable
          onPress={() => {
            handleCardPressed("transport");
          }}
          className="w-1/2 p-4"
        >
          <View className="bg-white rounded-lg flex overflow-hidden  shadow shadow-xl shadow-black">
            <Image
              className="w-full h-[100px] "
              resizeMode="cover"
              source={{
                uri: "https://img.freepik.com/premium-photo/truck-summer-road-poland-trucker-highway-lorry-doing-logistics-work-semi-trailer-with-driver-big-cargo-car-drive-freight-delivery-transport-export-industry-container-with-goods_250132-648.jpg?size=626&ext=jpg&ga=GA1.1.1480004811.1676452419&semt=sph",
              }}
            />
            <View className="p-3 flex justify-center">
              <Text className="font-bold text-center">Find Transport</Text>
            </View>
          </View>
        </Pressable>

        {/* Food card */}
        <Pressable
          onPress={() => {
            handleCardPressed("food");
          }}
          className="w-1/2 p-4"
        >
          <View className="bg-white rounded-lg flex overflow-hidden  shadow shadow-xl shadow-black">
            <Image
              className="w-full h-[100px] "
              resizeMode="cover"
              source={{
                uri: "https://img.freepik.com/premium-photo/truck-summer-road-poland-trucker-highway-lorry-doing-logistics-work-semi-trailer-with-driver-big-cargo-car-drive-freight-delivery-transport-export-industry-container-with-goods_250132-648.jpg?size=626&ext=jpg&ga=GA1.1.1480004811.1676452419&semt=sph",
              }}
            />
            <View className="p-3 flex justify-center">
              <Text className="font-bold text-center">Order food</Text>
            </View>
          </View>
        </Pressable>

        {/* House card */}
        <Pressable
          onPress={() => {
            handleCardPressed("house");
          }}
          className="w-1/2 p-4"
        >
          <View className="bg-white rounded-lg flex overflow-hidden  shadow shadow-xl shadow-black">
            <Image
              className="w-full h-[100px] "
              resizeMode="cover"
              source={{
                uri: "https://img.freepik.com/premium-photo/truck-summer-road-poland-trucker-highway-lorry-doing-logistics-work-semi-trailer-with-driver-big-cargo-car-drive-freight-delivery-transport-export-industry-container-with-goods_250132-648.jpg?size=626&ext=jpg&ga=GA1.1.1480004811.1676452419&semt=sph",
              }}
            />
            <View className="p-3 flex justify-center">
              <Text className="font-bold text-center">Find houses</Text>
            </View>
          </View>
        </Pressable>
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
