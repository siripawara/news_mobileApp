import * as React from 'react';
import { View, Text } from 'react-native';

//navigator import
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

//import screens
import Login from './screens/Login';
import Register from './screens/Register';
import HomeScreen from './screens/Home';
import Welcome from './screens/Welcome';
import MapScreen from './screens/MapScreen';
import NewsScreen from './screens/NewsScreen';


//create navigators(stack and tab)
const Stack = createNativeStackNavigator();
const Stack2 = createNativeStackNavigator();
const TabButtom = createBottomTabNavigator();
const TabTOP = createMaterialTopTabNavigator();

const tabs = ()=>{ //create tabs for nested navigations
  return (
    
      <TabButtom.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Login') {
            iconName ='person'
              
          } else if (route.name === 'Register') {
            iconName = 'ios-list';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
      })}
      >
        <TabButtom.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <TabButtom.Screen name="Register" component={Register} options={{ headerShown: false }}  />
      </TabButtom.Navigator>
    
  );
}
const tabs2 = ()=>{ //create tabs for nested navigations
  return (
    
      <TabTOP.Navigator
         screenOptions={{
        tabBarStyle: { backgroundColor: 'rgb(159, 182, 252)' },
      }}
      >
        <TabTOP.Screen name="Home" component={stacks} options={{ headerShown: false }} />
        <TabTOP.Screen name="Covid19" component={MapScreen} options={{ headerShown: false }}  />
      </TabTOP.Navigator>
    
  );
}
const stacks = () => {
  return(
    <Stack2.Navigator>
      <Stack.Screen name="Homenews" component={HomeScreen} options={{ headerShown: false }} /> 
      <Stack.Screen name="News" component={NewsScreen}  />
    </Stack2.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="welcome" component={Welcome} options={{ headerShown: false }} /> 
    <Stack.Screen name="LogAndReg" component={tabs} options={{ headerShown: false }} />
    <Stack.Screen name="HomeBig" component={tabs2}  options={{ headerShown: false }} />
    </Stack.Navigator>
  </NavigationContainer>
  
  );
}

export default App;