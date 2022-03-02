import { StatusBar } from 'expo-status-bar';
import { Text, View, Button } from 'react-native';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getDatabase, push, ref, onValue, remove } from 'firebase/database';

import Quotes from './components/quotes';
import Pictures from './components/pictures';
import database from './database';
import styles from './styles';

const Tab = createBottomTabNavigator();

export default function App() {

  // PICTURES

  const [picture, setPicture] = useState(null);
  //const [picturelist, setPicturelist] = useState([]);

  // database for pictures
  ref(database, 'pictures/')

  // save a picture
  const savePicture = () => {
    push(
      ref(database, 'pictures/'),
      { 'picture': picture }
    );
  };

  // fetch a new picture

  // QUOTES

  const [quote, setQuote] = useState("");
  //const [quotelist, setQuotelist] = useState([]);

  // database for quotes
  ref(database, 'quotes/')

  // save a quote
  const saveQuote = () => {
    push(
      ref(database, 'quotes/'),
      { 'quote': quote }
    );
  };

  // fetch a new quote
  
  return (

    <View>

      <Button title='Get a new fox picture'></Button>

      <Button title='Get a new Zen quote'></Button>


      <NavigationContainer style={styles.container}>
        <Tab.Navigator>
          <Tab.Screen name="Saved quotes" component={Quotes} />
          <Tab.Screen name="Saved pictures" component={Pictures} />
        </Tab.Navigator>
      </NavigationContainer>
        
    </View>

  );
}
