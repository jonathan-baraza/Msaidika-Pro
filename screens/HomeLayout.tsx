import { View, Text, Image, Pressable, ToastAndroid } from "react-native";
import { useState, useEffect } from "react";
import Home from "./main/Home";
import About from "./main/About";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import LoaderIcon from "../components/loaders/LoaderIcon";
import Toast from "react-native-root-toast";
const Drawer = createDrawerNavigator();

function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView
      contentContainerStyle={{
        flex: 1,
        paddingBottom: 20,
        paddingTop: 20,
        position: "relative",

        margin: 0,
      }}
      {...props}
    >
      <View className=" p-0 m-0 relative mb-3 flex flex-row justify-between items-center pr-4">
        <Image
          className="w-[200px] h-[80px] m-0 -ml-4"
          resizeMode="center"
          source={require("../assets/logo2.png")}
        />
        <Pressable onPress={() => props.navigation.closeDrawer()}>
          <AntDesign name="menu-unfold" size={20} color="black" />
        </Pressable>
      </View>

      <DrawerItemList {...props} />

      <DrawerItem
        style={{
          position: "absolute",
          bottom: 20,
          left: 0,
          right: 0,
        }}
        icon={({}) => <AntDesign name="logout" size={20} color="black" />}
        label="Logout"
        onPress={props.handleLogout}
      />
    </DrawerContentScrollView>
  );
}

const HomeLayout = ({ navigation }: any) => {
  const [loading, setLoading] = useState<boolean>(false);
  // const navigation: any = useNavigation();

  useEffect(() => {
    navigation.addListener("beforeRemove", (e: any) => {
      e.preventDefault();
      Toast.show("You cannot go back", {
        duration: 1000,
        animation: true,
        hideOnPress: true,
        textStyle: {
          fontSize: 12,
        },
      });
    });
  }, []);

  const handleLogout = async () => {
    setLoading(true);
    try {
      const response = await signOut(auth);
      Toast.show("You have been logged out", {
        duration: Toast.durations.SHORT,
        animation: true,
        textStyle: {
          fontSize: 12,
        },
      });
    } catch (error) {
      console.log(error);
      let errMsg: any;
      if (error instanceof Error) {
        errMsg = error.message;
      } else {
        errMsg = "Some error occured, please try again later.";
      }
      Toast.show(errMsg, {
        duration: Toast.durations.SHORT,
        position: Toast.positions.BOTTOM,
        animation: true,
        hideOnPress: false,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        console.log("someone logged out ..this is home layout btw");
        navigation.navigate("Login");
      }
    });
    return () => {
      //cleanup
    };
  }, []);

  return (
    <>
      <Drawer.Navigator
        drawerContent={(props) => (
          <CustomDrawerContent handleLogout={handleLogout} {...props} />
        )}
      >
        <Drawer.Screen
          options={{
            title: "Msaidika ",
            drawerStyle: {
              paddingTop: 20,
            },
            drawerIcon: ({ color, size }) => (
              <Ionicons name="md-home-outline" size={24} color="black" />
            ),
          }}
          name="Home"
          component={Home}
        />
        <Drawer.Screen
          options={{
            drawerStyle: {
              display: "flex",
              justifyContent: "flex-start",
            },

            drawerIcon: ({ color, size }) => (
              <Ionicons
                name="md-information-circle-outline"
                size={24}
                color={color}
              />
            ),
          }}
          name="About"
          component={About}
        />
      </Drawer.Navigator>
      {loading && <LoaderIcon />}
    </>
  );
};

export default HomeLayout;
