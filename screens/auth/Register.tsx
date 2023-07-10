import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from "react-native";
import { useState } from "react";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
const Register = () => {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [password2Visible, setPassword2Visible] = useState<boolean>(false);
  return (
    <ScrollView className="flex-1  ">
      <LinearGradient
        start={{ x: 0, y: 0.5 }}
        end={{ x: 0.4, y: 0.5 }}
        className="flex-1"
        colors={["#e3e8f1", "#ffff"]}
      >
        <View className="w-full flex-1  space-y-16 py-6 m-0">
          {/* Header */}
          <View className="px-6 " style={styles.container}>
            <Text className="font-mt_bold text-2xl mt-4 leading-10">
              Create an Account
            </Text>
            <Text
              style={{ lineHeight: 22 }}
              className="font-mt_mid mt-2 text-xm text-gray-400"
            >
              Step into a world of limitless possibilities.
            </Text>
          </View>
          {/* Inputs */}
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
                <FontAwesome
                  className=""
                  name="user-circle"
                  size={25}
                  color="#007acc"
                />
              </View>
              <TextInput
                className="flex-1 ml-2"
                inputMode="text"
                placeholder="Type your username"
              />
            </View>
            <View className="flex flex-row items-center w-full bg-[#f4f4f4] rounded-lg p-3">
              <View className="w-[35px] flex items-center justify-center">
                <FontAwesome
                  className=""
                  name="lock"
                  size={25}
                  color="#007acc"
                />
              </View>
              <TextInput
                className="flex-1 ml-2"
                inputMode="text"
                secureTextEntry={!passwordVisible}
                placeholder="Set your password"
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
            <View className="flex flex-row items-center w-full bg-[#f4f4f4] rounded-lg p-3">
              <View className="w-[35px] flex items-center justify-center">
                <FontAwesome
                  className=""
                  name="lock"
                  size={25}
                  color="#007acc"
                />
              </View>
              <TextInput
                className="flex-1 ml-2"
                inputMode="text"
                secureTextEntry={!password2Visible}
                placeholder="Confirm your password"
              />
              <TouchableOpacity
                onPress={() => setPassword2Visible(!password2Visible)}
                className="w-[35px] flex items-center justify-center"
              >
                <Ionicons
                  className=""
                  name={`${password2Visible ? "eye-off-sharp" : "eye-sharp"}`}
                  size={25}
                  color="#989898"
                />
              </TouchableOpacity>
            </View>
          </View>
          {/* Footer part */}
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
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight || 0,
  },
});
export default Register;
