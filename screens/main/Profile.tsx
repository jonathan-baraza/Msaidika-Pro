import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import MenuCover from "../../layouts/MenuCover";
import { Entypo } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const Profile = () => {
  return (
    <MenuCover>
      <View className="flex-1 items-center space-y-3  p-4">
        <Text className="font-bold text-xl text-center mb-3">
          Jonathan Baraza
        </Text>
        <View className="relative items-center rounded-full mb-2 p-2 bg-[#eef4ff]">
          <Image
            className="w-[120px] h-[120px] rounded-full "
            resizeMode="center"
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7nG8OgXmMOXXiwbNOc-PPXUcilcIhCkS9BQ&usqp=CAU",
            }}
          />
          <Pressable className="bg-white rounded-full absolute p-[6px] -bottom-2 ">
            <Entypo name="camera" size={20} color="#007acc" />
          </Pressable>
        </View>
        <Text className="font-bold  text-center">jbaraza46@gmail.com</Text>
        <View className="flex-row items-center">
          <Entypo name="location-pin" size={20} color="#007acc" />
          <Text>Nairobi, Kenya</Text>
        </View>
        <Text className=" text-gray-500 text-center">
          Some want it to happen, some wish it would happen, but I make it
          happen.
        </Text>
        <View className="w-full pt-4 flex flex-row items-center justify-between">
          <View className="w-[55%] ">
            <TouchableOpacity
              activeOpacity={0.8}
              className="bg-primary  p-[14px] rounded-lg"
            >
              <Text className="text-white text-xs text-center">
                Become Service Provider
              </Text>
            </TouchableOpacity>
          </View>
          <View className="w-[40%]">
            <TouchableOpacity
              activeOpacity={0.8}
              className="bg-white border  p-[14px] border-gray-200 rounded-lg"
            >
              <Text className="text-primary w-full text-xs text-center ">
                Edit Profile
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </MenuCover>
  );
};

export default Profile;
