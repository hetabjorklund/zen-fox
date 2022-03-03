import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, Image } from 'react-native';
import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getDatabase, push, ref, onValue, remove } from 'firebase/database';

import Quotes from './components/quotes';
import Pictures from './components/pictures';
import database from './database';
import styles from './styles';

const Tab = createBottomTabNavigator();
//const RNFS = require('react-native-fs');

export default function App() {

  // PICTURES

  const [picture, setPicture] = useState(null);
  const [pictureReady, setPictureready] = useState(false);
  //const [picturelist, setPicturelist] = useState([]);

  // database for pictures
  ref(database, 'pictures/');

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
      console.log(image);
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
  //let quotes = require('./quotes.json');
  //const [quotelist, setQuotelist] = useState([]);

  // database for quotes
  ref(database, 'quotes/');

  // save a quote
  const saveQuote = () => {
    push(
      ref(database, 'quotes/'),
      { 'quote': quote }
    );
  };

  const fetchQuote = async () => {
    try {
      const response = await fetch(`https://zenquotes.io/api/quotes`);
      const data = await response.json();
      //console.log(data);
      let random = Math.floor(Math.random() * data.length);
      console.log(data[random].h);
      setQuote(data[random].h);
      setQuoteready(true);
    }
    catch {
      console.error();
    }
  };

  // fetch all quotes on first render and save to a local file
  /*useEffect(() => {
    const fetchQuote = async () => {
      try
      {
        const response = await fetch(`https://zenquotes.io/api/quotes`);
        const data = await response.json();        
        var path = RNFS.DocumentDirectoryPath + 'quotes.json';
        //const fs = require('fs').promises;
        //await fs.writeFileSync('quotes.json', JSON.stringify(data));
        RNFS.writeFile(path, JSON.stringify(data), 'utf8')
          .then((success) => {
            console.log('FILE WRITTEN!');
          });
      }
      catch {
        console.error();
      }
    }
      fetchQuote();
  }, []);

  // select a new quote from quote.json
  const getQuote = () => {   
      // get a list of files and directories in the main bundle
      RNFS.readDir(RNFS.DocumentDirectoryPath) // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)
        .then((result) => {
          console.log('GOT RESULT', result);
          // stat the first file
          return Promise.all([RNFS.stat(result[0].path), result[0].path]);
        })
        .then((statResult) => {
          if (statResult[0].isFile()) {
            // if we have a file, read it
            return RNFS.readFile(statResult[1], 'utf8');
          }
          return 'no file';
        })
        .then((contents) => {
          // log the file contents
          console.log(contents);
          let random = Math.floor(Math.random() * quotes.length);
              let newquote = contents[random].h;
              setQuote(newquote);
              setQuoteready(true);
        })
        .catch((err) => {
          console.log(err.message, err.code);
        });    
  }; */
  
  return (

    <View style={styles.container}>

      <StatusBar style="auto" />

      <View style={styles.input}>

      {pictureReady ?
        <View>
            {/*<Image width="100" height="100">{picture}</Image>*/}
            <Image style={styles.image} source={{picture}}></Image>
          <Button title='Save picture' onPress={savePicture}></Button>
        </View>
        : null}
      
      <Button title='Get a new fox picture' onPress={fetchPicture}></Button>
      
      </View>

      <View style={styles.input}>
      {quoteReady ? 
        <View>
          <Text>{quote}</Text>
          <Button title='Save quote' onPress={saveQuote}></Button>
        </View>
        : null}
      
      <Button title='Get a new Zen quote' onPress={fetchQuote}></Button>
        
      </View>

      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Saved quotes" component={Quotes} />
          <Tab.Screen name="Saved pictures" component={Pictures} />
        </Tab.Navigator>
      </NavigationContainer>
        
    </View>

  );
}
