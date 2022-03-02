import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getDatabase, push, ref, onValue, remove } from 'firebase/database';

import Quotes from './components/quotes';
import Pictures from './components/pictures';
import database from './database';

const Tab = createBottomTabNavigator();

export default function App() {

  // database for pictures
  ref(database, 'pictures/')

  // save a picture
  const savePicture = () => {
    push(
      ref(database, 'pictures/'),
      { 'picture': picture }
    );
  };
  
  // delete a picture (pictures-komponenttiin?)
  const deletePicture = (key) => {
    remove(ref(database, 'pictures/' + key)); 
  };

  // fetch a new picture

  // database for quotes
  ref(database, 'quotes/')

  // save a quote
  const saveQuote = () => {
    push(
      ref(database, 'quotes/'),
      { 'quote': quote }
    );
  };

  // delete a quote (quotes-komponenttiin?)
  const deleteQuote = (key) => {
    remove(ref(database, 'quotes/' + key)); 
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

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 2,    
    flexDirection: "column",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});