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
  const [pictureReady, setPictureready] = useState(false);
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
  const fetchPicture = async () => {
    try
    {
      const response = await fetch(`https://randomfox.ca/floof/`);
      const data = await response.json();
      const image = data.image;
      setPicture(image);
      setPictureready(true);
    }
    catch {
      console.error();
    }
   };

  // QUOTES

  const [quote, setQuote] = useState("");
  const [quoteReady, setQuoteready] = useState(false);
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
  const fetchQuote = async () => {
    try
    {
      const response = await fetch(``); // osoite puuttuu!
      const data = await response.json();
      const quoteformatted = data.h;
      setQuote(quoteformatted);
      setQuoteready(true);
    }
    catch {
      console.error();
    }
   };
  
  return (

    <View>

      <StatusBar style="auto" />

      {pictureReady ?
        <View>
          <Image width="100" height="100">{picture}</Image>
          <Button title='Save picture' onPress={savePicture}></Button>
        </View>
        : null}
      
      <Button title='Get a new fox picture' onPress={fetchPicture}></Button>

      {quoteReady ? 
        <View>
          <Text>{quote}</Text>
          <Button title='Save quote' onPress={saveQuote}></Button>
        </View>
        : null}
      
      <Button title='Get a new Zen quote' onPress={fetchQuote}></Button>

      <NavigationContainer style={styles.container}>
        <Tab.Navigator>
          <Tab.Screen name="Saved quotes" component={Quotes} />
          <Tab.Screen name="Saved pictures" component={Pictures} />
        </Tab.Navigator>
      </NavigationContainer>
        
    </View>

  );
}
