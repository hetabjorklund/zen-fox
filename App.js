import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, Image } from 'react-native';
import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getDatabase, push, ref, onValue, remove } from 'firebase/database';
import Quotes from './components/quotes';
import Pictures from './components/pictures';
import Home from './components/home';
import database from './database';
import styles from './styles';

const Tab = createBottomTabNavigator();

export default function App() {  
  
  return (   

      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Saved quotes" component={Quotes} />
          <Tab.Screen name="Saved pictures" component={Pictures} />
        </Tab.Navigator>
      </NavigationContainer>  

  );
}
