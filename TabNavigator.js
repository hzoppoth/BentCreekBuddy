import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import CheckTrailStack from './CheckTrailStack';
import PlanRouteStack from './PlanRouteStack';
import ReportIssueStack from './ReportIssueStack';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        "tabBarActiveTintColor": "#fff",
        "tabBarInactiveTintColor": "#808080",
        headerShown: false,

        "tabBarStyle": [
          {
            borderTopWidth: 0,
            backgroundColor: "black",
            "display": "flex"
          },
          null
        ]
      }}
    >
      <Tab.Screen name="HomeTab" component={HomeStack} 
       options={{ title: 'Home', 
       tabBarIcon: ({ size }) => (
        <Image source={require('../pictures/homebutton.png')} style={{width: size, height: size }} />
      ),
       }}
       />
      <Tab.Screen name="CheckTrailTab" component={CheckTrailStack} 
       options={{ title: 'Trail Check', 
       tabBarIcon: ({ size }) => (
        <Image source={require('../pictures/check.png')} style={{width: size, height: size }} />
       ),
       }}/>
      <Tab.Screen name="PlanRouteTab" component={PlanRouteStack} 
       options={{ title: 'Route Planner',
       tabBarIcon: ({ size }) => (
        <Image source={require('../pictures/route.png')} style={{width: size, height: size }} />
       ),
       }}/>
      <Tab.Screen name="ReportIssueTab" component={ReportIssueStack}
       options={{ title: 'Trail Issue Report',
       tabBarIcon: ({ size }) => (
        <Image source={require('../pictures/report.png')} style={{width: size, height: size }} />
       ),
       }} />
    </Tab.Navigator>
  );
}

export default TabNavigator;
