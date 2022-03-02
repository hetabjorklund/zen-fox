import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      marginTop: 80,
      flex: 1,    
      flexDirection: "column",
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input : {
      width: 150, 
      marginTop: 5,
      marginBottom: 5,
      borderColor: 'black', 
      borderWidth: 1
    },
    titletext: {
      marginTop: 10,
      marginBottom: 5,
      fontWeight: "bold",
      color: 'blue'
    },
    itemtext: {
      marginStart: 10,
      color: 'blue'
    },
    listcontainer: {
      flexDirection: 'row',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-evenly'   
    },
    image: { 
      width: '50%',
      height: 100,
      borderRadius: 5
    },
    operators: {
      flexDirection: "row",
      alignItems: 'center',
      marginTop: 10,
      marginBottom: 10,
      justifyContent: 'space-between'
    }
});

export default styles;