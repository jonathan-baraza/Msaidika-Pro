import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Pressable,
} from "react-native";
import { useState, useEffect } from "react";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import LoaderIcon from "../../components/loaders/LoaderIcon";
import Toast from "react-native-root-toast";
import { auth } from "../../config/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const Register = () => {
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [password2, setPassword2] = useState<string>("");
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [password2Visible, setPassword2Visible] = useState<boolean>(false);

  const [loading, setLoading] = useState<boolean>(false);
  const navigation: any = useNavigation();

  const handleValidations = () => {
    if (!email || !username || !password || !password || !password2) {
      Toast.show("Please provide all inputs", {
        duration: Toast.durations.SHORT,
        position: Toast.positions.BOTTOM,
        animation: true,
        hideOnPress: false,
        textStyle: {
          fontSize: 12,
        },
      });
    } else if (password !== password2) {
      Toast.show("The passwords don't match", {
        duration: Toast.durations.SHORT,
        position: Toast.positions.BOTTOM,
        animation: true,
        hideOnPress: false,
        textStyle: {
          fontSize: 12,
        },
      });
    } else {
      handleRegister();
    }
  };

  const handleRegister = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      clearInputs();
    } catch (error) {
      console.log(error);
      let errMsg: any;
      if (error instanceof Error) {
        errMsg = error.message.split(":")[1];
      } else {
        errMsg = "Some error occured, please try again later.";
      }
      Toast.show(errMsg, {
        duration: Toast.durations.SHORT,
        position: Toast.positions.BOTTOM,
        animation: true,
        hideOnPress: false,
        textStyle: {
          fontSize: 12,
        },
      });
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      // const response = await signInWithPopup(auth, provider);
    } catch (error) {
      console.log("google error");
      console.log(error);
      let errMsg: any;
      if (error instanceof Error) {
        errMsg = error.message.split(":")[1];
      } else {
        errMsg = "Some error occured, please try again later.";
      }
      Toast.show(errMsg, {
        duration: Toast.durations.SHORT,
        position: Toast.positions.BOTTOM,
        animation: true,
        hideOnPress: false,
        textStyle: {
          fontSize: 12,
        },
      });
    } finally {
      setLoading(false);
    }
  };

  const clearInputs = () => {
    setEmail("");
    setUsername("");
    setPassword("");
    setPassword2("");
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        //User if authenticated
        navigation.navigate("HomeLayout");
      }
    });
    return () => {
      //
    };
  }, []);

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
          {loading && <LoaderIcon />}
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
                value={email}
                onChangeText={setEmail}
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
                value={username}
                onChangeText={setUsername}
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
                value={password}
                onChangeText={setPassword}
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
                value={password2}
                onChangeText={setPassword2}
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
              onPress={handleValidations}
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
              <View className="rounded-full w-[50px] mx-auto border bg-white border-gray-300 h-[50px] flex items-center justify-center">
                <Pressable onPress={handleGoogleSignUp}>
                  <Image
                    resizeMode="contain"
                    className="w-[40px] h-[40px] rounded-full "
                    source={require("../../assets/google.png")}
                  />
                </Pressable>
              </View>
            </TouchableOpacity>
            <View className="mt-6 flex flex-row item-center justify-center">
              <Text className="text-gray-500">I already have an account.</Text>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
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
