import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import Quotes from './components/quotes';
import Pictures from './components/pictures';
import Home from './components/home';

const Tab = createBottomTabNavigator();

const screenOptions = ({ route }) => ({
  tabBarIcon: () => {
    if (route.name === 'Home') {
      return <Icon type="ionicon" name="home-outline"/>;
    } else if (route.name === 'Saved quotes') {
      return <Icon type="ionicon" name="document-text-outline"/>
    } else if (route.name === 'Saved pictures') {
      return <Icon type="ionicon" name="images-outline"/>
    }
  }
});

export default function App() {  
  
  return (   

      <NavigationContainer>
        <Tab.Navigator screenOptions={screenOptions}>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Saved quotes" component={Quotes} />
          <Tab.Screen name="Saved pictures" component={Pictures} />
        </Tab.Navigator>
      </NavigationContainer>  

  );
}
