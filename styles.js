import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
      flex: 1,    
      flexDirection: "column",
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  },
  innercontainer1: {
    flex: 1,    
    flexDirection: "column",
    backgroundColor: '#e6cd8e',
    alignItems: 'center',
    justifyContent: 'center',
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
    alignItems: 'stretch',
    marginTop: 5,
    marginBottom: 5,
    justifyContent: 'space-evenly'
  },
  button: {

  }
});

export default styles;