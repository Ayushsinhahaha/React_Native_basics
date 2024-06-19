import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import FirstScreen from './src/screens/FirstScreen';
import SecondScreen from './src/screens/SecondScreen';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

// const Tab=createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="FirstScreen"
            component={FirstScreen}
            initialParams={{name: 'Ayush', age: 22}}
          />
          <Tab.Screen name="SecondScreen" component={SecondScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
