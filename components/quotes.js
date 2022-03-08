import styles from "../styles";
import database from "../database";
import { useState, useEffect } from 'react'; 
import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, FlatList } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getDatabase, push, ref, onValue, remove } from 'firebase/database';
import { Icon, ListItem } from "react-native-elements";

export default function Quotes() {

    // list for saved quotes
    const [quotelist, setQuotelist] = useState([]);

    // delete a quote
    const deleteQuote = (key) => {
        remove(ref(database, 'quotes/' + key)); 
    };

    // update list
    useEffect(() => {
        const listRef = ref(database, 'quotes/');
        onValue(listRef, (snapshot) => {
        const data = snapshot.val();
        const listitems = data ? Object.keys(data).map(key => ({ key, ...data[key] })) : [];
        setQuotelist(listitems);
        })
    }, []);

    return (
        <View style={styles.list}>            
                
            <FlatList 
            data={quotelist}
            keyExtractor={item => item.key}
            renderItem={({ item, index }) =>
            
                <ListItem bottomDivider key={String(index)}>
                    <ListItem.Content>
                        <ListItem.Title>{item.quote}</ListItem.Title>
                        <ListItem.Subtitle>{item.author}</ListItem.Subtitle>
                    </ListItem.Content>
                <Icon type="ionicon" name="trash-outline" onPress={() => deleteQuote(item.key)}/>
                </ListItem>
            }
            ListEmptyComponent={
                <View style={styles.emptylistcomponent}>
                    <Text style={styles.emptylisttext}>Go to the main page to get inspiring quotes!</Text>
                </View>}
            />
               
        </View>
    );

} 