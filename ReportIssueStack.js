import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ReportIssue from '../screens/ReportIssue';

const Stack = createStackNavigator();

function ReportIssueStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
           <Stack.Screen 
    name="ReportIssueScreen" 
    component={ReportIssue} 
    options={{ title: 'Report Issue' }}
  />
    </Stack.Navigator>
  );
}

export default ReportIssueStack;
