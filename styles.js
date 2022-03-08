import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
  },
  container: {
      flex: 1,    
      flexDirection: "column",
      backgroundColor: '#7ba39b',
      alignItems: 'center',
      justifyContent: 'center',
  },
  emptylistcomponent: {
    marginTop: '50%',
    marginLeft: '20%',
    marginRight: '20%'
  },
  emptylisttext: {
    fontFamily: 'sans-serif-light',
    fontSize: 20
  },
  image: { 
    width: '90%',
    height: 150,
  },
  image2: { 
    width: '90%',
    height: '80%',
    marginHorizontal: '5%'
  },
  innercontainer1: {
    flex: 1,    
    flexDirection: "column",
    backgroundColor: '#7ba39b',
    alignItems: 'stretch',
    justifyContent: 'space-around',
    width: '100%',
    height: '50%',
  },
  innercontainer2: {
    flex: 1,    
    flexDirection: "column",
    backgroundColor: '#7ba39b',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '50%',
  },
  input : {
    width: 200, 
    marginTop: 10,
    marginBottom: 5,
    borderColor: 'black', 
    borderWidth: 1
  },
  itemtext: {
    //marginStart: 10,
    color: 'blue'
  },
  list: {
    backgroundColor: '#fff',
    width: '100%'
  },
  listcontainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 5
  },
  operators: {
    flexDirection: "row",
    justifyContent: 'space-between',
    marginTop: 5,
    marginBottom: 10
  }, 
  titletext: {
    marginTop: 10,
    marginBottom: 5,
    fontWeight: "bold",
    color: 'blue'
  },
});

export default styles;