import React, {useState, useEffect} from 'react';
import {View, Text, Button, ScrollView, TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import axios from 'axios';
import styles from '../styles';

function PlanRoute({navigation}) {
  const [selectedTrails, setSelectedTrails] = useState([]);
  const [trails, setTrails] = useState([]);
  const [urgentReports, setUrgentReports] = useState([]);

  // Fetch the list of trails
  useEffect(() => {
    async function fetchTrails() {
      try {
        const response = await axios.get(
          'http://bcb1-env.eba-52jvbqit.us-east-2.elasticbeanstalk.com/report/trailnames',
        );
        setTrails(response.data);
      } catch (error) {
        console.error('Error fetching trail names:', error);
      }
    }

    fetchTrails();
  }, []);

  const checkUrgentReports = () => {
    axios
      .get(
        `http://bcb1-env.eba-52jvbqit.us-east-2.elasticbeanstalk.com/report/urgent?trailName=${selectedTrails.join(',')}`,
        
      )
      .then(response => {
        const reports = response.data;
        setUrgentReports(reports);
        if (reports.length > 0) {
          navigation.navigate('UrgentReports', { reports: reports, selectedTrails: selectedTrails });

        } else {
          alert('No urgent reports found for selected trails.');
        }
      })
      .catch(error => {
        console.error('Error fetching urgent reports:', error);
      });
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Plan Your Route</Text>
      <Text style={styles.generalText}>Select trails one at a time to plan your route.
      You can remove a selected trail by tapping it.</Text>
      
      {/* Trail Picker */}
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedTrails[0]} // Only one trail can be selected at a time
          onValueChange={(itemValue, itemIndex) => {
            if (itemIndex !== 0 && !selectedTrails.includes(itemValue)) {
              setSelectedTrails(prevTrails => [...prevTrails, itemValue]);
            }
          }}
          style={styles.picker}>
          <Picker.Item label="Select trails" value="" />
          {trails.map((trail, index) => (
            <Picker.Item key={index} label={trail} value={trail} />
          ))}
        </Picker>
      </View>

          <Text style={styles.generalText}>Your Route:</Text>
      {/* Displaying selected trails */}
      <ScrollView style={styles.selectedTrailsContainer}>
        {selectedTrails.map((trail, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              const updatedTrails = selectedTrails.filter(t => t !== trail);
              setSelectedTrails(updatedTrails);
            }}>
            <Text style={styles.generalText}>{trail}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Button to check for urgent reports */}
      <Button
        title="Check for Urgent Reports"
        onPress={() => {
          if (selectedTrails.length > 0) {
            checkUrgentReports();
          } else {
            alert('Please select one or more trails first.');
          }
        }}
      />
    </View>
  );
}

export default PlanRoute;
