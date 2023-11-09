import {View, Text, TextInput, Alert, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import { useAppContext } from '../context/appContext';
import { useEffect, useState } from 'react';
import Button from '../components/ui/Button';

const Profile = () => {
  const {user,updateUser} = useAppContext();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = () => {
    updateUser({name,email,number});
  }
  useEffect(() => {
    if (user) {      
      setName(user.name || '');
      setEmail(user.email || '');
      setNumber(user.number || '');
    }
  }, [user]);


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Page</Text>
      <Text style={styles.label}>Name </Text>
      <TextInput style ={styles.textfield}
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Text style={styles.label}>Email</Text>
      <TextInput style ={styles.textfield}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Text style={styles.label}>Contact Number</Text>
      <TextInput style ={styles.textfield}
        placeholder="Contact Number"
        value={number}
        onChangeText={(text) => setNumber(text)}
      />
      <Button
        onPress={handleSubmit}
      >Save Changes</Button>
    </View>
  )
}
export default Profile

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8edeb',
    // justifyContent: 'center',
    // marginTop: 30,
    // marginHorizontal: 32,
    padding: 16,
    flex: 1, // Use flex to fill the entire screen


  },
  title: {
    fontSize: 28,
    textAlign: 'center', 
    fontWeight: 'bold',
    marginBottom: 10, 
    color:'#fe6d73',
  },
  label: {

  },
  textfield: {
    // borderWidth: 1,
    borderBottomWidth:1,
    borderColor: 'gray',
    padding: 10,
    marginBottom:10,
    fontSize: 15,
  },

})