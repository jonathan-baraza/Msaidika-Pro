import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useState } from "react";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  return (
    <LinearGradient
      start={{ x: 0, y: 0.5 }}
      end={{ x: 0.4, y: 0.5 }}
      className="flex-1"
      colors={["#edf0f5", "#ffff"]}
    >
      <ScrollView className="flex-1 py-6 m-0 flex-col space-y-24">
        <View className="px-6 " style={styles.container}>
          <Text className="font-mt_bold text-2xl mt-4 leading-10">
            Welcome Back!
          </Text>
          <Text
            style={{ lineHeight: 22 }}
            className="font-mt_mid mt-2 text-xm text-gray-400"
          >
            Login to your journey of convenience and connection with M-Saidika.
          </Text>
        </View>

        <View className="w-full mt-8 space-y-3 px-6 flex-1">
          <View className="flex flex-row items-center w-full bg-[#f4f4f4] rounded-lg p-3">
            <View className="w-[35px] flex items-center justify-center">
              <Ionicons className="" name="mail" size={25} color="#007acc" />
            </View>
            <TextInput
              className="flex-1 ml-2"
              inputMode="email"
              placeholder="Type your email"
            />
          </View>

          <View className="flex flex-row items-center w-full bg-[#f4f4f4] rounded-lg p-3">
            <View className="w-[35px] flex items-center justify-center">
              <FontAwesome className="" name="lock" size={25} color="#007acc" />
            </View>
            <TextInput
              className="flex-1 ml-2"
              inputMode="text"
              secureTextEntry={!passwordVisible}
              placeholder="Type your password"
            />
            <TouchableOpacity
              onPress={() => setPasswordVisible(!passwordVisible)}
              className="w-[35px] flex items-center justify-center"
            >
              <Ionicons
                className=""
                name={`${passwordVisible ? "eye-off-sharp" : "eye-sharp"}`}
                size={25}
                color="#989898"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View className="w-full px-6">
          <TouchableOpacity
            activeOpacity={0.5}
            className="w-full bg-[#007acc] p-3 rounded-lg flex items-center justify-center "
          >
            <Text className="text-white">Next</Text>
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
                source={require("../../assets/google.png")}
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
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight || 0,
  },
});
export default Login;
