import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ArtisanScreen from '../screens/ArtisanScreen';
import ItemDetailScreen from '../screens/ItemDetailScreen';
const Stack = createStackNavigator();
//navigationOptions: { header: { visible: false } }; 

//<Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
function FollowingNavigation() {
    return (
        <Stack.Navigator initialRouteName="Home" >         
           <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
          <Stack.Screen name="ArtisanDetail" component={ArtisanScreen} />
          <Stack.Screen name="ItemDetail" component={ItemDetailScreen} />
        </Stack.Navigator>
    );
}
  
export default FollowingNavigation; 