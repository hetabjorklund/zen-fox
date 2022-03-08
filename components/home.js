import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, Alert } from 'react-native';
import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getDatabase, push, ref, onValue, remove } from 'firebase/database';
import { Button } from "react-native-elements";
import database from '../database';
import styles from '../styles';

export default function Home() {

    // PICTURES

    const [picture, setPicture] = useState("");
    const [pictureReady, setPictureready] = useState(false);

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
        //console.log(data.image);
        setPicture(data.image);
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

    return (

        <View style={styles.container}>  
    
            <View style={styles.innercontainer1}>    
                {pictureReady ?                                           
                    <View>
                        <Image resizeMode='contain' style={styles.image2} source={{ uri: picture }} />
                        <Button                          
                            title='Save picture'
                            onPress={savePicture}
                            containerStyle={{
                                width: 150,
                                marginHorizontal: '33%',
                                marginVertical: 5 }}
                            icon={{name: 'save', color: 'white'}}   
                            buttonStyle={{ backgroundColor: '#fdb6cb' }} />
                    </View>
                : null}  
            </View>
    
            <View style={styles.innercontainer2}>
                {quoteReady ? 
                    <View style={{
                        marginTop: '10%',
                        marginBottom: '5%',
                        marginLeft: '20%',
                        marginRight: '20%' }}>
                        <Text style={styles.emptylisttext}>{quote}</Text>
                        <Text style={{marginBottom: '5%'}}>{author}</Text>
                        <Button
                            title='Save quote'
                            onPress={saveQuote}
                            containerStyle={{
                                width: 150,
                                marginHorizontal: '33%',
                                marginVertical: 5 }}
                            icon={{name: 'save', color: 'white'}}   
                            buttonStyle={{ backgroundColor: '#fdb6cb' }}                          
                        />
                    </View>
                : null}
            </View>          
         
            <View style={styles.operators}>
                <Button buttonStyle={{ backgroundColor: '#fdb6cb' }} title='Get a new fox picture' onPress={fetchPicture}></Button>                
                <Button buttonStyle={{ backgroundColor: '#fdb6cb' }} title='Get a new Zen quote' onPress={fetchQuote}></Button>
            </View>
          
            
        </View>
    
    );
    
}