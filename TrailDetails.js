import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import axios from 'axios';
import styles from '../styles';

function TrailDetails({ route }) {
  const { trailName } = route.params; // Extracting trailName from the navigation parameters
  const [reports, setReports] = useState([]);
  
  useEffect(() => {
    async function fetchReports() {
      try {
        const response = await axios.get(`http://bcb1-env.eba-52jvbqit.us-east-2.elasticbeanstalk.com/report/reports?trailName=${trailName}`);
        
        // Filter out reports with no username 
        const validReports = response.data.filter(report => report.username && report.username.trim() !== "");
        
        setReports(validReports);
      } catch (error) {
        console.error('Error fetching trail reports:', error);
      }
    }
    
    fetchReports();
  }, [trailName]);


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trail: {trailName}</Text>

      <FlatList
        data={reports}
        keyExtractor={(item) => item.id.toString()} 
        renderItem={({ item }) => (
          <View style={styles.reportItem}>
            <Text style={styles.reportText}>Condition: {item.condition}</Text>
            <Text style={styles.reportText}>Comments: {item.comments}</Text>
            <Text style={styles.reportText}>Submitted by: {item.username}</Text>
            <Text style={styles.reportText}>Time: {formatDate(item.createdAt)}</Text>
            {item.is_urgent && <Text style={styles.urgentText}>Urgent!</Text>}
          </View>
        )}
      />
    </View>
  );
}
// Helper function to format the date
const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
};

export default TrailDetails;

