import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import PokedexScreen from './Screens/Pokedex';
import { LinearGradient } from 'expo-linear-gradient';
import PokeInfoScreen from './Screens/PokeInfo';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


export default function App() {
  return (
    
     <NavigationContainer >
      <Stack.Navigator >
        <Stack.Screen  name="Pokedex" component={PokedexScreen} options={{ headerShown: false }}/>
        <Stack.Screen  name="PokeInfo" component={PokeInfoScreen} options={{headerTransparent: true, color:'transparent'}}/>
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
