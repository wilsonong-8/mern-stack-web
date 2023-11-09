import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

function LoadingOverlay({ message }) {
  return (
    <View style={styles.rootContainer}>
      <ActivityIndicator size="large" />
    </View>
  );
}

export default LoadingOverlay;

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: '#f8edeb',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
});