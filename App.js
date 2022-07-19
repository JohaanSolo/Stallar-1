import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./screen/Home";
import StarMapScreen from "./screen/StarMap";
import DailyPicsScreen from "./screen/DailyPic";
import SpaceCraftsScreen from "./screen/SpaceCraft";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
        screenOptions={{
          headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="StarMap" component={StarMapScreen} />
        <Stack.Screen name="DailyPics" component={DailyPicsScreen} />
        <Stack.Screen name="SpaceCrafts" component={SpaceCraftsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;