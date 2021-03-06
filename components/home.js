import { Text, View, Image, Alert } from 'react-native';
import { useEffect, useState } from 'react';
import { push, ref } from 'firebase/database';
import { Button } from "react-native-elements";
import database from '../database';
import styles from '../styles';

const buttoncolour = '#fdb6cb';

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

    // database for all quotes
    //ref(database, 'allquotes/');

    // database for saved quotes
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

    // fetch a new quote
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

    // fetch all quotes
    /* the idea was to first fetch all the quotes to a database first 
    and then pick a random one every time the button was pushed 
    instead of a new fetch to the API every time
    but it doesn't work: the useEffect never runs and the data never goes into the database */
    /*useEffect(() => {
        const fetchAllQuotes = async () => {    
            try {
                const response = await fetch(`https://zenquotes.io/api/quotes`);
                const data = await response.json(); // array containing objects
                
                for (let i = 0; i > data.length; i++) {
                    let author = data[i].a;
                    let quote = data[i].q;
                    let id = i + 1;
                    
                    push(
                        ref(database, 'allquotes/'),
                        {
                            'id' : id,
                            'quote': quote,
                            'author' : author
                        }
                    );   
                    console.log("push succeeded!")
                }
            } catch {
              console.error();
            }          
        }
        fetchAllQuotes();
       }, []);*/

    return (

        <View style={styles.container}>  
    
            <View style={styles.innercontainer1}>    
                {pictureReady ?                                           
                    <View>
                        <Image
                            marginTop={5}
                            resizeMode='contain'
                            style={styles.imagehome}
                            source={{ uri: picture }} />
                        <Button                          
                            title='Save picture'
                            onPress={savePicture}
                            containerStyle={{
                                width: 150,
                                marginHorizontal: '33%',
                                marginVertical: 5 }}
                            icon={{name: 'save', color: 'white'}}   
                            buttonStyle={{ backgroundColor: buttoncolour }} />
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
                            buttonStyle={{ backgroundColor: buttoncolour }}                          
                        />
                    </View>
                : null}
            </View>          
         
            <View style={styles.operators}>
                <Button
                    buttonStyle={{
                        backgroundColor: buttoncolour,
                        marginHorizontal: 15 }}
                    title='Get a new fox picture'
                    onPress={fetchPicture}/>                
                <Button
                    buttonStyle={{ backgroundColor: buttoncolour }}
                    title='Get a new Zen quote'
                    onPress={fetchQuote} />
            </View>          
            
        </View>
    
    );
    
}