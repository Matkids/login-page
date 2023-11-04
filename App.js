import React from "react";
import {
  NativeBaseProvider,
  extendTheme,

} from "native-base";
import LoginScreen from "./components/LoginScreen";
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Native']);
import { NavigationContainer } from '@react-navigation/native';


// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  return (
    <NativeBaseProvider>
      <LoginScreen />
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </NativeBaseProvider>
  );
}


