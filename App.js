import { StatusBar } from 'expo-status-bar';
import { Text, View, Button } from 'react-native';
import { useEffect, useState } from 'react';
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
  let quotes = require('./quotes.json');
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

  // fetch all quotes on first render and save to a local file
  useEffect(() => {
    const fetchQuote = async () => {
      try
      {
        const response = await fetch(`https://zenquotes.io/api/quotes`);
        const data = await response.json();
        const fs = require('fs').promises;
        await fs.writeFileSync('quotes.json', JSON.stringify(data));
      }
      catch {
        console.error();
      }
    }
      fetchQuote();
  }, []);

  // select a new quote from quote.json
  const getQuote = () => { 
    let random = Math.floor(Math.random() * quotes.length);
    let newquote = quotes[random].h;
    setQuote(newquote);
    setQuoteready(true);
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
      
      <Button title='Get a new Zen quote' onPress={getQuote}></Button>

      <NavigationContainer style={styles.container}>
        <Tab.Navigator>
          <Tab.Screen name="Saved quotes" component={Quotes} />
          <Tab.Screen name="Saved pictures" component={Pictures} />
        </Tab.Navigator>
      </NavigationContainer>
        
    </View>

  );
}
