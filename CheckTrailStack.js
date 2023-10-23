import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CheckTrail from '../screens/CheckTrail';
import TrailDetails from '../screens/TrailDetails'; 

const Stack = createStackNavigator();

function CheckTrailStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen 
        name="CheckTrailScreen" 
        component={CheckTrail} 
        options={{ title: 'Check Trail' }}
      />
      <Stack.Screen 
        name="TrailDetails" 
        component={TrailDetails} 
        options={{ title: 'Trail Details' }}
      />
    </Stack.Navigator>
  );
}

export default CheckTrailStack;

