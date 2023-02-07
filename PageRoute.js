import React from 'react';

import {
    createStackNavigator
} from '@react-navigation/stack';
import rating from './app/assests/views/screens/rating';

const Stack = createStackNavigator();
const headerOptions = {
    headerShown: false
}
const PageRoutes = () => ( 
<Stack.Navigator screenOptions = {
        headerOptions
    }>
    
    <Stack.Screen name = "rating"
    component = {
        rating
    }
    /> 
   
    </Stack.Navigator>
);

export default PageRoutes;