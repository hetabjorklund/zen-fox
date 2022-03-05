import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, Image, Alert } from 'react-native';
import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getDatabase, push, ref, onValue, remove } from 'firebase/database';

import database from '../database';
import styles from '../styles';

export default function Home() {

    // PICTURES

    const [picture, setPicture] = useState("");
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
        Alert.alert("Picture saved!")
        setPicture("");
        setPictureready(false);
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
    const [author, setAuthor] = useState("");
    const [quoteReady, setQuoteready] = useState(false);
    //let quotes = require('./quotes.json');
    //const [quotelist, setQuotelist] = useState([]);

    // database for quotes
    ref(database, 'quotes/');

    // save a quote
    const saveQuote = () => {
        push(
            ref(database, 'quotes/'),
            {
                'quote': quote,
                'author' : author
            }
        );
        Alert.alert("", "Quote saved!")
        setQuote("");
        setQuoteready(false);
    };

    const fetchQuote = async () => {
        try {
            const response = await fetch(`https://zenquotes.io/api/quotes`);
            const data = await response.json();
            //console.log(data);
            let random = Math.floor(Math.random() * data.length);
            //console.log(data[random]);
            let newquote = data[random];
            setQuote(newquote.q);
            setAuthor(newquote.a);
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
    }, []);*/    

    return (

        <View style={styles.container}>  
    
            <View style={styles.innercontainer1}>    
                {pictureReady ?
                    <View>                        
                        <Image style={styles.image} source={{uri:picture}}></Image>                        
                    </View>                     
                : null}  
            </View>

            <View style={styles.innercontainer1}>
                {pictureReady ?
                    <Button title='Save picture' onPress={savePicture}></Button>
                : null}  
            </View>
    
            <View style={styles.innercontainer2}>
                {quoteReady ? 
                    <View>
                        <Text>{quote}</Text>
                        <Text>{author}</Text>
                    </View>
                : null}
            </View>
            
            <View style={styles.innercontainer2}>
                {quoteReady ?
                    <Button title='Save quote' onPress={saveQuote}></Button>
                : null}
            </View>

            <View style={styles.operators}>
                <Button style={styles.button} title='Get a new fox picture' onPress={fetchPicture}></Button>                
                <Button style={styles.button} title='Get a new Zen quote' onPress={fetchQuote}></Button>
            </View>
          
            
        </View>
    
    );
    
}