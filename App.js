import React from "react";
import { View, Text } from "react-native";
import { HomeScreen } from "./screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from "./screens/LoginScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
      name="home"
      component={HomeScreen}
      options={{ headerShown: false }} />
            
<Stack.Screen
      name="login"
      component={LoginScreen} 
      options={{ headerShown: false }}/>


    </Stack.Navigator>
    </NavigationContainer>
  );
}


