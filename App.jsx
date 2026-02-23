import React from 'react';
import {View } from 'react-native';
import Register from './src/screens/Register/Register';
import Login  from "./src/screens/Login/Login"; 
import Save from "./src/screens/Save/Save";
import Delete from "./src/screens/Delete/Delete";
import Update from './src/screens/Update/Update'
import Getall from './src/screens/Getall/Getall' 
// import Tuch from './src/components/Tuch'
// import KeyboardAvoidingView from './src/components/KeyboardAvoidingView'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

function App() {

  return ( 
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="register" component={Register} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="save" component={Save} />
      <Stack.Screen name="delete" component={Delete} />
      <Stack.Screen name="update" component={Update} />
      <Stack.Screen name="getall" component={Getall} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}
//     // <View>
//       {/* <Register/> */}
//       // <Login/>
//       {/* <Save/> */}
//       {/* <Delete/> */}
//       {/* <Update/> */}
//       {/* <Getall/> */}
//       {/* <FlatList/> */}  
//       {/* <KeyboardAvoidingView/> */}
//       {/* <Tuch/> */}
      
//     // </View>
//   // );
// // }
//   )};

export default App;
