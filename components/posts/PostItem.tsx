import { View, Text, Image } from "react-native";
import React from "react";
import { PostType } from "../../types/posts";

const PostItem = ({ post }: { post: PostType }) => {
  return (
    <View className="w-full  ">
      {/* Post header */}
      <View className="w-full flex-row justify-between  ">
        <View className="flex-row items-center">
          <Image
            className="w-[40px] h-[40px] rounded-full"
            source={{ uri: "https://randomuser.me/api/portraits/men/41.jpg" }}
          />
          <View className=" ml-2">
            <Text className="font-bold textsm">Jonathan Baraza</Text>
            <Text className="text-primary text-xs">Nairobi, Kenya</Text>
          </View>
        </View>
        <Text className="text-gray-500 text-xs">1h ago</Text>
      </View>
      <Text className="text-gray-500 mt-2 mx-2">
        Tea molestias quasi exercitationem repellat qui ipsa sit autTea
        molestias quasi exercitationem repellat qui ipsa sit aut.
      </Text>
    </View>
  );
};

export default PostItem;
