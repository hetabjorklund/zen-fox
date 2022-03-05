import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
  },
  container: {
      flex: 1,    
      flexDirection: "column",
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  },
  image: { 
    width: '70%',
    height: 150,
    borderRadius: 1
  },
  innercontainer1: {
    flex: 1,    
    flexDirection: "column",
    backgroundColor: '#e6cd8e',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    height: 100,
  },
  innercontainer2: {
    flex: 1,    
    flexDirection: "column",
    backgroundColor: '#b6e39f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input : {
    width: 200, 
    marginTop: 10,
    marginBottom: 5,
    borderColor: 'black', 
    borderWidth: 1
  },
  itemtext: {
    marginStart: 10,
    color: 'blue'
  },
  listcontainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: 5
  },
  operators: {
    flexDirection: "row",
    alignItems: 'stretch',
    marginTop: 5,
    marginBottom: 5,
    justifyContent: 'space-evenly'
  }, 
  titletext: {
    marginTop: 10,
    marginBottom: 5,
    fontWeight: "bold",
    color: 'blue'
  },
});

export default styles;