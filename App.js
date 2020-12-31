import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import reactwhatsapp from "./app/components/first";
import Profile from "./app/components/profile";
import Chatscreen from "./app/components/chatscreen";
import Calls from "./app/components/Calls";
import Chats from "./app/components/Chats";
import Status from "./app/components/Status";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="reactwhatsapp" component={reactwhatsapp} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
        <Stack.Screen name="Chatscreen" component={Chatscreen}  options={{ headerShown: false }}/>
        <Stack.Screen name="Status" component={Status} options={{ headerShown: false }}/>
        <Stack.Screen name="Chats" component={Chats} options={{ headerShown: false }}/>
        <Stack.Screen name="Calls" component={Calls} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;