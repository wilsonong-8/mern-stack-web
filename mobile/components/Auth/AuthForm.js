import { useState } from 'react';
import { StyleSheet, View, Text, } from 'react-native';

import Button from '../ui/Button';
import Input from './Input';

function AuthForm({ isLogin, onSubmit, credentialsInvalid }) {
  const [enteredName, setEnteredName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredNumber, setEnteredNumber] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');

  const {
    name: nameIsInvalid,
    email: emailIsInvalid,
    number: numberIsInvalid,
    password: passwordIsInvalid,
  } = credentialsInvalid;

  function updateInputValueHandler(inputType, enteredValue) {
    switch (inputType) {
      case 'name':
        setEnteredName(enteredValue);
        break;
      case 'email':
        setEnteredEmail(enteredValue);
        break;
      case 'number':
        setEnteredNumber(enteredValue);
        break;
      case 'password':
        setEnteredPassword(enteredValue);
        break;
    }
  }

  function submitHandler() {
    onSubmit({
      name: enteredName,
      email: enteredEmail,
      number: enteredNumber,
      password: enteredPassword,
    });
  }

  return (
    <View style={styles.form}>
      {isLogin && (
      <Text style={styles.title}>Login</Text>
      )}
      {!isLogin && (
      <Text style={styles.title}>Register</Text>
        )}
      <View>
      {!isLogin && (
        <Input
          label="Name"
          onUpdateValue={updateInputValueHandler.bind(this, 'name')}
          value={enteredName}
          isInvalid={nameIsInvalid}
        />
        )}
        <Input
        label="Email Address"
        onUpdateValue={updateInputValueHandler.bind(this, 'email')}
        value={enteredEmail}
        keyboardType="email-address"
        isInvalid={emailIsInvalid}
        />
        {!isLogin && (
        <Input
          label="Number"
          onUpdateValue={updateInputValueHandler.bind(this, 'number')}
          value={enteredNumber}
          isInvalid={numberIsInvalid}
        />
        )}
        <Input
        label="Password"
        onUpdateValue={updateInputValueHandler.bind(this, 'password')}
        secure
        value={enteredPassword}
        isInvalid={passwordIsInvalid}
        />
        <View style={styles.buttons}>
          <Button onPress={submitHandler}>
            {isLogin ? 'Log In' : 'Register'}
          </Button>
        </View>
      </View>
    </View>
  );
}

export default AuthForm;

const styles = StyleSheet.create({
  buttons: {
    marginTop: 10,
  },
  title: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        paddingBottom: 10,
      },
});
