import database from '../database';
import styles from '../styles';
import { useState, useEffect } from 'react'; 
import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, FlatList, Image } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getDatabase, push, ref, onValue, remove } from 'firebase/database';
import { Icon } from 'react-native-elements';

export default function Pictures() {

    // list for saved pictures
    const [picturelist, setPicturelist] = useState([]);

    // delete a picture
    const deletePicture = (key) => {
        remove(ref(database, 'pictures/' + key)); 
    };
        
    // update list
    useEffect(() => {
        const listRef = ref(database, 'pictures/');
        onValue(listRef, (snapshot) => {
        const data = snapshot.val();
        const listitems = data ? Object.keys(data).map(key => ({ key, ...data[key] })) : [];
        setPicturelist(listitems);
        })
    }, []);

    return (
        <View style={styles.container}>

            {picturelist.length > 0 ?
                
                <FlatList
                style={{marginTop: 5}}    
                data={picturelist}
                keyExtractor={item => item.key}
                renderItem={({ item }) =>
                    <View style={styles.listcontainer}>
                        <Image resizeMode='contain' style={styles.image} source={{uri:item.picture}}></Image>
                        <Icon type="ionicon" name="trash-outline" onPress={() => deletePicture(item.key)}/>
                    </View>
                }        
                />

                : <Text>Go to the main page to get floofy pictures!</Text>}

        </View>
    );

} 
