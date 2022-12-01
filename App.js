import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Screens/Home';
import Login from './src/Screens/Login'
import Signup from './src/Screens/Signup'
import Calculator from './src/Screens/Calculator';

const Stack = createNativeStackNavigator();

function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator screenOptions={{ headerShown: false}}>
    //     <Stack.Screen name="Home" component={Home} />
    //     <Stack.Screen name="Login" component={Login} />
    //     <Stack.Screen name="Signup" component={Signup} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <>
    <Calculator/>
    </>
  );
}

export default App;