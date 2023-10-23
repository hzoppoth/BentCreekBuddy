import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';
import styles from '../styles';



function CheckTrail({ navigation }) {
  const [selectedTrail, setSelectedTrail] = useState('');
  const [trails, setTrails] = useState([]);

  // List of trails 
  useEffect(() => {
    async function fetchTrails() {
      try {
        const response = await axios.get('http://bcb1-env.eba-52jvbqit.us-east-2.elasticbeanstalk.com/report/trailnames');
        setTrails(response.data);
      } catch (error) {
        console.error('Error fetching trail names:', error);
      }
    } 

    fetchTrails();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Check Trail</Text>
      
      {/* Trail Picker */}
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedTrail}
          onValueChange={(itemValue, itemIndex) => {
            if(itemIndex !== 0) { 
              setSelectedTrail(itemValue);
            }
          }}
          style={styles.picker}
        >
          <Picker.Item label="Select a trail" value="" />
          {trails.map((trail, index) => (
            <Picker.Item key={index} label={trail} value={trail} />
          ))}
        </Picker>
      </View>

      {/* Button to navigate to TrailDetails */}
      <Button
        title="Check Trail Reports"
        onPress={() => {
          if (selectedTrail) {
            navigation.navigate('TrailDetails', { trailName: selectedTrail });
          } else {
            alert('Please select a trail first.');
          }
        }}
      />
    </View>
  );
}

export default CheckTrail;
