import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>AntiGravity AI Mobile</Text>
      <Text style={styles.subtitle}>React Native App Flow</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#00f0ff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#a0a0b0',
    marginTop: 10,
  }
});
