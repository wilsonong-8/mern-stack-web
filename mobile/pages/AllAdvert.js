import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useAppContext } from '../context/appContext';
import { createStackNavigator } from '@react-navigation/stack';
import AdvertisementCard from '../components/advertisement/AdvertisementCard';
import AdvertSearchModal from '../components/advertisement/AdvertSearchModal';
import AdvertisementDetails from '../components/advertisement/AdvertisementDetails';

const Stack = createStackNavigator();

const AllAdvert = () => {
  const { getAdverts } = useAppContext();
  

  useEffect(() => {
    getAdverts('', '', '', '', '');
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Stack.Navigator initialRouteName="AllAdvert">
        <Stack.Screen
          name="AllAdvert"
          component={AdvertisementListScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AdvertisementDetails"
          component={AdvertisementDetails}
          options={{ title: 'Advertisement Details' }}
        />
      </Stack.Navigator>
    </View>
  );
};

const AdvertisementListScreen = ({ navigation }) => {
  const { adverts,totalAdverts } = useAppContext();
  const [isSearchModalVisible, setSearchModalVisible] = useState(false);

  const toggleSearchModal = () => {
    setSearchModalVisible(!isSearchModalVisible);
  };

  return (
    <View>
      <View style={style.container}>
        <Text>{totalAdverts} Advertisements</Text>
        <TouchableOpacity
          style={style.floatingButton}
          onPress={toggleSearchModal}
        >
          <Image
            source={require('../assets/icons/search.png')}
            style={style.searchIcon}
          />
        </TouchableOpacity>
      </View>
      <AdvertSearchModal
        visible={isSearchModalVisible}
        onClose={toggleSearchModal}
      />
    <FlatList style={style.flat_list}
      data={adverts}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('AdvertisementDetails', { advertisement: item })
          }
        >
          <AdvertisementCard key={item._id} advertisement={item} />
        </TouchableOpacity>
      )}
    />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8edeb',
  },
  floatingButton: {},
  searchIcon: {
    width: 50,
    height: 50,
  },
  flat_list: {
    backgroundColor: '#f8edeb',

  }
});

export default AllAdvert;
