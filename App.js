import React, { Component } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './page/Home';
import Coba from './page/Coba';
import Komponent from './page/component/Komponent';
import BasicComponet from './page/component/BasicComponet';
import UseIn from './page/component/UseIn';
import Listviews from './page/component/Listviews';
import AndroidComponentsAPIs from './page/component/AndroidComponentsAPIs';
import Others from './page/component/Others';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Coba" component={Coba} />
        <Stack.Screen name="Text_Component" component={Komponent} />
        <Stack.Screen name="Basic_Componet" component={BasicComponet} />
        <Stack.Screen name="User_Interface" component={UseIn} />
        <Stack.Screen name="List_views" component={Listviews} />
        <Stack.Screen name="Android_Components_APIs" component={AndroidComponentsAPIs} />
        <Stack.Screen name="Others" component={Others} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;