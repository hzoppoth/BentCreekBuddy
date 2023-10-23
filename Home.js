import React from 'react';
import { View, Text, TouchableOpacity, Image, Linking } from 'react-native';
import styles from '../styles';

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>Bent Creek Buddy</Text>
      
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('PlanRouteTab', { screen: 'PlanRoute' })}
      >
        <Text style={styles.buttonText}>Plan your route</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('CheckTrailTab', { screen: 'CheckTrail' })}
      >
        <Text style={styles.buttonText}>Check a trail</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('ReportIssueTab', { screen: 'ReportIssue' })}
      >
        <Text style={styles.buttonText}>Report a trail condition</Text>
      </TouchableOpacity>
      
      <View style={styles.footerLinksContainer}>
        <TouchableOpacity onPress={() => {Linking.canOpenURL('https://pisgahareasorba.org/')
        .then((supported) => {
        if (supported) {
         Linking.openURL('https://pisgahareasorba.org/');
      } else {
        console.log("Can't open URL");
      }
    })
    .catch((err) => console.error('An error occurred', err));
}}>
          <Image style={styles.footerImage} source={require('../pictures/psorba.png')} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {Linking.canOpenURL('https://www.accuweather.com/en/us/asheville/28801/weather-radar/329813/')
        .then((supported) => {
        if (supported) {
         Linking.openURL('https://www.accuweather.com/en/us/asheville/28801/weather-radar/329813/');
      } else {
        console.log("Can't open URL");
      }
    })
    .catch((err) => console.error('An error occurred', err));
}}>
          <Image style={styles.footerImage} source={require('../pictures/weather.png')} />
        </TouchableOpacity>

        
      </View>
    </View>
  );
}

export default Home;

