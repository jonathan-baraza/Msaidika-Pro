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
import { useState, useEffect } from "react";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-root-toast";
import LoaderIcon from "../../components/loaders/LoaderIcon";
import { auth } from "../../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const navigation: any = useNavigation();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleValidation = () => {
    if (!email || !password) {
      Toast.show("Please provide all inputs", {
        duration: Toast.durations.SHORT,
        position: Toast.positions.BOTTOM,
        animation: true,
        hideOnPress: false,
        textStyle: {
          fontSize: 12,
        },
      });
    } else {
      handleSignIn();
    }
  };

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const handleSignIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
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

  // useEffect(() => {
  //   if (auth?.currentUser) {
  //     navigation.navigate("HomeLayout");
  //   }
  // }, []);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        //User if authenticated
        Toast.show("You have signed in...", {
          duration: Toast.durations.SHORT,
          position: Toast.positions.BOTTOM,
          animation: true,
          hideOnPress: false,
          textStyle: {
            fontSize: 12,
          },
        });

        navigation.navigate("HomeLayout");
      }
    });
    return () => {
      //
    };
  }, []);

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
              value={email}
              onChangeText={setEmail}
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
        </View>
        <View className="w-full px-6">
          <TouchableOpacity
            onPress={handleValidation}
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
              <Image
                resizeMode="contain"
                className="w-[40px] h-[40px] rounded-full "
                source={require("../../assets/google.png")}
              />
            </View>
          </TouchableOpacity>
          <View className="mt-6 flex flex-row item-center justify-center">
            <Text className="text-gray-500">I don't have an account.</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text className="text-[#007acc] font-bold ml-1">Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      {loading && <LoaderIcon />}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight || 0,
  },
});
export default Login;
