import {View, Text, FlatList} from 'react-native';
import styles from '../styles';

function UrgentReports({route}) {
  // Getting the selectedTrails from the route parameters
  const {reports, selectedTrails} = route.params;
  console.log('Selected Trails:', selectedTrails);

  return (
    <View style={styles.container}>
      <Text style={[styles.title, {color: 'white'}]}>Urgent Reports</Text>

      {/* Display the urgent reports */}
      <FlatList
        data={reports}
        keyExtractor={item => item.id.toString()} 
        renderItem={({item}) => (
          <View style={styles.reportItem}>
            <Text style={styles.generalText}>{item.trail_name}</Text>
            <Text style={styles.reportText}>Condition: {item.condition}</Text>
            <Text style={styles.reportText}>Comments: {item.comments}</Text>
          </View>
        )}
      />
    </View>
  );
}

export default UrgentReports;
