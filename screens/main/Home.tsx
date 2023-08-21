import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  StatusBar,
} from "react-native";
import { Ionicons, AntDesign, FontAwesome5 } from "@expo/vector-icons";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-root-toast";
import { ScrollView } from "react-native-gesture-handler";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Community from "../app/Community";
import Emergency from "../app/Emergency";
import Food from "../app/Food";
import Houses from "../app/Houses";
import Jobs from "../app/Jobs";
import Transport from "../app/Transport";
const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="MainHome" >
      <Stack.Screen
        name="MainHome"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Community"
        component={Community}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Emergency"
        component={Emergency}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Food"
        component={Food}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Houses"
        component={Houses}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Jobs"
        component={Jobs}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Transport"
        component={Transport}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}



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
      <View className="border-b border-gray-200 p-0 m-0 relative flex flex-row justify-between  items-center px-4">
        <View className="flex flex-row items-center">
          <Pressable className="" onPress={() => navigation.openDrawer()}>
            <AntDesign name="menu-fold" size={20} color="black" />
          </Pressable>
          <Image
            className="w-[200px] h-[80px] m-0 -ml-4 -z-10"
            resizeMode="center"
            source={require("../../assets/logo2.png")}
          />
        </View>
        <View className="pr-2">
          <FontAwesome5 name="facebook-messenger" size={24} color="#007acc" />
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        overScrollMode={"never"}
        contentContainerStyle={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          flex: 1,
          paddingTop: "10%",
        }}
        className="bg-[#f2ffff] px-1 "
      >
        {/* Job card */}
        <Pressable
          onPress={() => {
            navigation.navigate("Jobs");
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
            navigation.navigate("Transport");
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
             navigation.navigate("Food");
          }}
          className="w-1/2 p-4 my-[2%]"
        >
          <View className="bg-white rounded-lg flex overflow-hidden  shadow shadow-xl shadow-black">
            <Image
              className="w-full h-[100px] "
              resizeMode="cover"
              source={{
                uri: "https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141352.jpg?size=626&ext=jpg&ga=GA1.1.1480004811.1676452419&semt=sph",
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
             navigation.navigate("Houses");
          }}
          className="w-1/2 p-4 my-[2%]"
        >
          <View className="bg-white rounded-lg flex overflow-hidden  shadow shadow-xl shadow-black">
            <Image
              className="w-full h-[100px] "
              resizeMode="cover"
              source={{
                uri: "https://img.freepik.com/free-photo/design-house-modern-villa-with-open-plan-living-private-bedroom-wing-large-terrace-with-privacy_1258-169741.jpg?size=626&ext=jpg&ga=GA1.2.1480004811.1676452419&semt=sph",
              }}
            />
            <View className="p-3 flex justify-center">
              <Text className="font-bold text-center">Find houses</Text>
            </View>
          </View>
        </Pressable>

        {/* Community card */}
        <Pressable
          onPress={() => {
            navigation.navigate("Community");
          }}
          className="w-1/2 p-4"
        >
          <View className="bg-white rounded-lg flex overflow-hidden  shadow shadow-xl shadow-black">
            <Image
              className="w-full h-[100px] "
              resizeMode="cover"
              source={{
                uri: "https://img.freepik.com/free-vector/social-network-connections_1010-422.jpg?size=626&ext=jpg&ga=GA1.2.1480004811.1676452419&semt=sph",
              }}
            />
            <View className="p-3 flex justify-center">
              <Text className="font-bold text-center">Community</Text>
            </View>
          </View>
        </Pressable>

        {/* Emergency card */}
        <Pressable
          onPress={() => {
             navigation.navigate("Emergency");
          }}
          className="w-1/2 p-4"
        >
          <View className="bg-white rounded-lg flex overflow-hidden  shadow shadow-xl shadow-black">
            <Image
              className="w-full h-[100px] "
              resizeMode="cover"
              source={{
                uri: "https://img.freepik.com/free-vector/vector-red-police-car-top-light-glowing-dark-black_134830-785.jpg?size=626&ext=jpg&ga=GA1.2.1480004811.1676452419&semt=sph",
              }}
            />
            <View className="p-3 flex justify-center">
              <Text className="font-bold text-center">Emergency</Text>
            </View>
          </View>
        </Pressable>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
  },
});
export default MyStack;
