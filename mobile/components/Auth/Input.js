import { View, Text, TextInput, StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

function Input({
  label,
  keyboardType,
  secure,
  onUpdateValue,
  value,
  isInvalid,
}) {
  return (
    <View style={styles.inputContainer}>
      <Text style={[styles.label, isInvalid && styles.labelInvalid]}>
        {label}
      </Text>
      <TextInput
        style={[styles.input, isInvalid && styles.inputInvalid]}
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType={keyboardType}
        secureTextEntry={secure}
        onChangeText={onUpdateValue}
        value={value}
      />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8,
  },
  label: {
    textAlign: 'center',
    paddingBottom: 5,
  },
  labelInvalid: {
    color: COLORS.gray,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
    alignSelf: 'center', // Center the input horizontally
    width: '70%', // Set the width to fill the container
  },
  inputInvalid: {
    backgroundColor: 'red',
  },
});
