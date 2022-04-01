import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={[styles.welcome,{ flex: 2, backgroundColor:"green"}]}>Hello React Native</Text>
      <Text style={[styles.welcome,{ flex: 2,backgroundColor:"red"}]}>Hello React Native</Text>
      <Text style={[styles.welcome,{ flex: 2,backgroundColor:"yellow"}]}>Hello React Native</Text>
      <Text style={[styles.welcome,{ flex: 2,backgroundColor:"grey"}]}>Hello React Native</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: 'lightblue',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
