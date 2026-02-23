import React from 'react';
import { View } from 'react-native';
import Register from './src/screens/Register/Register';
import Login from "./src/screens/Login/Login";
import Save from "./src/screens/Save/Save";
import Delete from "./src/screens/Delete/Delete";
import Update from './src/screens/Update/Update'
import Getall from './src/screens/Getall/Getall'
// import Tuch from './src/components/Tuch'
// import KeyboardAvoidingView from './src/components/KeyboardAvoidingView'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

function App() {

  return (
    // <NavigationContainer>
    // <Stack.Navigator>
    //   <Stack.Screen name="register" component={Register} />
    //   <Stack.Screen name="login" component={Login} />
    //   <Stack.Screen name="save" component={Save} />
    //   <Stack.Screen name="delete" component={Delete} />
    //   <Stack.Screen name="update" component={Update} />
    //   <Stack.Screen name="getall" component={Getall} />
    // </Stack.Navigator>
    // </NavigationContainer>



    // <NavigationContainer> 
    //   <Tab.Navigator> 
    //     <Tab.Screen
    //       name="Register"
    //       component={Register}
    //       options={{
    //         tabBarIcon: ({ color, size }) => (
    //           <MaterialCommunityIcons name="account-plus" color={color} size={size} />
    //         ),
    //       }}
    //     />

    //     <Tab.Screen
    //       name="Login"
    //       component={Login}
    //       options={{
    //         tabBarIcon: ({ color, size }) => (
    //           <MaterialCommunityIcons name="login" color={color} size={size} />
    //         ),
    //       }}
    //     />

    //     <Tab.Screen
    //       name="Save"
    //       component={Save}
    //       options={{
    //         tabBarIcon: ({ color, size }) => (
    //           <MaterialCommunityIcons name="content-save-outline" color={color} size={size} />
    //         ),
    //       }}
    //     />

    //     <Tab.Screen
    //       name="Delete"
    //       component={Delete}
    //       options={{
    //         tabBarIcon: ({ color, size }) => (
    //           <MaterialCommunityIcons name="account-remove-outline" color={color} size={size} />
    //         ),
    //       }}
    //     />

    //     <Tab.Screen
    //       name="Update"
    //       component={Update}
    //       options={{
    //         tabBarIcon: ({ color, size }) => (
    //           <MaterialCommunityIcons name="account-edit-outline" color={color} size={size} />
    //         ),
    //       }}
    //     />

    //     <Tab.Screen
    //       name="Get All"
    //       component={Getall}
    //       options={{
    //         tabBarIcon: ({ color, size }) => (
    //           <MaterialCommunityIcons name="account-group-outline" color={color} size={size} />
    //         ),
    //       }}
    //     />
    //   </Tab.Navigator>
    // </NavigationContainer>

    <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name="Register" component={Register} />
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="Save" component={Save} />
      <Drawer.Screen name="Delete" component={Delete} />
      <Drawer.Screen name="Update" component={Update} />
      <Drawer.Screen name="Get All" component={Getall} />
    </Drawer.Navigator>
    </NavigationContainer>
  );
}  

export default App;
