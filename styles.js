import { StyleSheet } from 'react-native';

const backgroundgreen = '#7ba396';

const styles = StyleSheet.create({
  container: {
      flex: 1,    
      flexDirection: "column",
      backgroundColor: backgroundgreen,
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
    imagehome: { 
    width: '90%',
    height: '80%',
    marginHorizontal: '5%'
  },
  imagelist: { 
    width: '90%',
    height: 150,
  },
  innercontainer1: {
    flex: 1.3,    
    flexDirection: "column",
    backgroundColor: backgroundgreen,
    alignItems: 'stretch',
    justifyContent: 'space-around'
  },
  innercontainer2: {
    flex: 1,    
    flexDirection: "column",
    backgroundColor: backgroundgreen,
    alignItems: 'center',
    justifyContent: 'center'
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
  }
});

export default styles;