import { View, Text } from "react-native";
import React from "react";
import { PostType } from "../../types/posts";

const PostItem = ({ post }: { post: PostType }) => {
  return (
    <View>
      <Text>PostItem</Text>
    </View>
  );
};

export default PostItem;
