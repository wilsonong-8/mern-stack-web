import { useState } from 'react';
import { Alert, StyleSheet, View, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import FlatButton from '../ui/FlatButton';
import AuthForm from './AuthForm';
import { COLORS } from '../../constants';
import Logo from '../../assets/logo.png'

function AuthContent({ isLogin, onAuthenticate }) {
  const navigation = useNavigation();

  const [credentialsInvalid, setCredentialsInvalid] = useState({
    name: false,
    email: false,
    number: false,
    password: false,
  });

  function switchAuthModeHandler() {
    if (isLogin) {
      navigation.replace('Register');
    } else {
      navigation.replace('Login');
    }
  }

  function submitHandler(credentials) {
    let { name: name, email, number, password } = credentials;

    // email = email.trim();
    // number = number.trim();
    // password = password.trim();

    const nameIsValid = name.length >3
    const emailIsValid = email.includes('@');
    const numberIsValid = number.length ===8 ;
    const passwordIsValid = password.length > 5;

    if (
      !emailIsValid ||
      !passwordIsValid ||
      (!isLogin && (!nameIsValid || !numberIsValid))
    ) {
      Alert.alert('Invalid input', 'Please check your entered credentials.');
      setCredentialsInvalid({
        email: !emailIsValid,
        name: !nameIsValid,
        password: !passwordIsValid,
        number: !numberIsValid,
    });
      return;
    }
    onAuthenticate({ name, email, number, password });
  }

  return (
    <ScrollView style={styles.authContent}>
      <View style={styles.imageContainer}>
      <Image 
        source={Logo}
        style={styles.logoImage}
      />
      </View>
      
      <AuthForm
        isLogin={isLogin}
        onSubmit={submitHandler}
        credentialsInvalid={credentialsInvalid}
      />
      <View style={styles.buttons}>
        <FlatButton onPress={switchAuthModeHandler}>
          {isLogin ? 'New User? Click to Register!' : 'Back to Login'}
        </FlatButton>
      </View>
    </ScrollView>
  );
}

export default AuthContent;

const styles = StyleSheet.create({
  authContent: {
    flex: 1,
    // marginTop: 30,
    // marginHorizontal: 32,
    padding: 16,
    backgroundColor: '#f8edeb',
  },
  buttons: {
    marginTop: 8,
  },
  logoImage: {
    marginTop: 50,
    width: 300,
    height: 150, 
    marginBottom: 20, 
  },
  imageContainer: {
    alignItems: 'center'
  }
});