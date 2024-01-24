import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ItemDetailScreen from '../screens/ItemDetailScreen';

const Stack = createStackNavigator();

function ItemListingNavigation() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Item Detail" component={ItemDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}
  
export default ItemListingNavigation;