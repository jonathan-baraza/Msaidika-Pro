import { View, Text, Image, Pressable } from "react-native";
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

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props: any) {
  const navigation: any = useNavigation();
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
        onPress={() => navigation.navigate("Login")}
      />
    </DrawerContentScrollView>
  );
}

const HomeLayout = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
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
  );
};

export default HomeLayout;
