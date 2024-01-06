import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import { createDrawerNavigator, DrawerItemList } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../../Src/Screens/Home";
import Notifications from "../../Src/Screens/Notifications";
import Setting from "../../Src/Screens/Settings";
import {
  SimpleLineIcons,
  MaterialIcons,
  FontAwesome,
} from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={(props) => {
          return (
            <SafeAreaView>
              <View
                style={{
                  height: 240,
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  borderBottomColor: "blue",
                  borderBottomWidth: 1,
                  backgroundColor: "red",
                  
                }}
              >
                <View style = {{
                  marginTop: 20,
                }}>
                <Image
                  source={require("../../assets/Pic/sk.jpeg")}
                  style={{
                    height: 120,
                    width: 120,
                    borderRadius: 60,
                    
                  }}
                />
                </View>

                <View 
                  style = {{ 
                    flexDirection: 'row',
                    marginTop: 20,
                  }}>
                  <View>
                    <Text
                      style={{
                        fontSize: 17,
                        marginTop: 25,
                        marginRight: 25,
                        fontWeight: "bold",
                        color: "#111",
                      }}
                    >
                      Sk Sharujan
                    </Text>
                  </View>

                  <View>
                    <Text
                      style={{
                        fontSize: 16,
                        marginTop: 27,
                        color: "#111",
                      }}
                    >
                      {" "}
                      Product Manager
                    </Text>
                  </View>

                </View>
                
              </View>
              <DrawerItemList {...props} />
            </SafeAreaView>
          );
        }}
        screenOptions={{
          drawerStyle: {
            backgroundColor: "#9677c1", // purple
            width: 270,
          },
          headerStyle: {
            backgroundColor: "#dc7519", // orange
          },
          headerTintColor: "blue",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          drawerActiveTintColor: "#fff",
          drawerLabelStyle: {
            color: "#acee45", //lightGreen
            fontWeight: "bold",
            fontSize: 18,
          },
        }}
      >
        <Drawer.Screen
          name="Home"
          options={{
            drawerLabel: "Home",
            title: "Home",
            drawerIcon: () => (
              <SimpleLineIcons name="home" size={20} color="black" />
            ),
          }}
          component={Home}
        />

        <Drawer.Screen
          name="Notifications"
          options={{
            drawerLabel: "Notifications",
            title: "Notifications",
            drawerIcon: () => (
              <FontAwesome name="download" size={20} color="black" />
            ),
          }}
          component={Notifications}
        />

        <Drawer.Screen
          name="Settings"
          options={{
            drawerLabel: "Settings",
            title: "Settings",
            drawerIcon: () => (
              <MaterialIcons name="settings" size={20} color="black" />
            ),
          }}
          component={Setting}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigation;
