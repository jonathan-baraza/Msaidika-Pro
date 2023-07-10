import { View, Text } from "react-native";
import Home from "./main/Home";
import About from "./main/About";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { Entypo, Ionicons, AntDesign } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        style={{ backgroundColor: "red", position: "absolute", bottom: 0 }}
        icon={({}) => <AntDesign name="logout" size={20} color="black" />}
        label="Logout"
        onPress={() => alert("Link to help")}
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
          drawerIcon: ({ color, size }) => (
            <Ionicons
              name="md-information-circle-outline"
              size={24}
              color="black"
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
