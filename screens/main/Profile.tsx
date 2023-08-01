import { View, Text, Image, Pressable } from "react-native";
import { useState } from "react";
import MenuCover from "../../layouts/MenuCover";
import { Entypo } from "@expo/vector-icons";
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import PostItem from "../../components/posts/PostItem";
import { PostType } from "../../types/posts";

const Profile = () => {
  const [isOwner, setIsOwner] = useState<boolean>(false);
  const [myPost, setMyPost] = useState<PostType>({
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  });
  return (
    <MenuCover>
      <ScrollView className="bg-red">
        <View className="flex-1 items-center space-y-3  p-4">
          {/* Name of the user */}
          <Text className="font-bold text-xl text-center mb-3">
            Jonathan Baraza
          </Text>

          {/* user photo area */}
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
          {/* User email */}
          <Text
            className="font-bold  
        text-center"
          >
            jbaraza46@gmail.com
          </Text>
          {/* User location */}
          <View className="flex-row items-center">
            <Entypo name="location-pin" size={20} color="#007acc" />
            <Text>Nairobi, Kenya</Text>
          </View>
          {/* User Bio */}
          <Text className=" text-gray-500 text-center">
            Some want it to happen, some wish it would happen, but I make it
            happen.
          </Text>

          {/* Followers data */}
          <View className="w-full flex-row justify-center">
            <View className="flex-row w-1/2 justify-center items-center">
              <Text className="font-bold text-xl">500</Text>
              <Text className="text-lg text-gray-500 ml-1">Followers</Text>
            </View>
            <View className="flex-row w-1/2 justify-center items-center">
              <Text className="font-bold text-xl">120</Text>
              <Text className="text-lg text-gray-500 ml-1">Following</Text>
            </View>
          </View>

          {/* Auth user profile buttons */}
          {isOwner ? (
            <View className="w-full pt-2 flex flex-row items-center justify-between">
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
          ) : (
            <View className="w-full pt-2 flex flex-row items-center justify-between">
              <View className="w-[55%] ">
                <TouchableOpacity
                  activeOpacity={0.8}
                  className="bg-primary  p-[14px] rounded-lg"
                >
                  <Text className="text-white text-xs text-center">Follow</Text>
                </TouchableOpacity>
              </View>
              <View className="w-[40%]">
                <TouchableOpacity
                  activeOpacity={0.8}
                  className="bg-white border  p-[14px] border-gray-200 rounded-lg"
                >
                  <Text className="text-primary w-full text-xs text-center ">
                    Chat
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}

          {/* User posts */}
          <View className="w-full pt-6 ">
            <Text className="font-bold text-lg mb-6">
              Jonathan's recent Posts
            </Text>

            <PostItem post={myPost} />
            <PostItem post={myPost} />
            <PostItem post={myPost} />
            <PostItem post={myPost} />
            <PostItem post={myPost} />

            {/* <FlatList
              className="h-[50vh]"
              data={[myPost, myPost, myPost, myPost]}
              keyExtractor={(post, index) => index.toString()}
              renderItem={({ item }) => <PostItem post={item} />}
            /> */}
          </View>
        </View>
      </ScrollView>
    </MenuCover>
  );
};

export default Profile;
