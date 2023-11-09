import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import SearchModal from '../components/pastTransactions/SearchModal';
import { useAppContext } from '../context/appContext';
import LoadingOverlay from '../components/ui/LoadingOverlay';

const PastTransaction = () => {
  const { hdb_records,isLoading,getPastRecords } = useAppContext();
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const renderItem = ({ item }) => (
    <View style={style.listItem}>
      <Text>{`Date: ${item.month}`}</Text>
      <Text>{`Block: ${item.block}`}</Text>
      <Text>{`Town: ${item.town}`}</Text>
      <Text>{`Street: ${item.street_name}`}</Text>
      <Text>{`Flat Type: ${item.flat_type}`}</Text>
      <Text>{`Storey: ${item.storey_range}`}</Text>
      <Text>{`Floor Area(sqm): ${item.floor_area_sqm}`}</Text>
      <Text>{`Lease Start Date: ${item.lease_commence_date}`}</Text>
      <Text>{`Remaining Lease: ${item.remaining_lease}`}</Text>
      <Text>{`Price: $${item.resale_price}`}</Text>
    </View>
  );

  useEffect(() => {
    getPastRecords('', '', '', '');
  }, []);

  return (
    <View>

      <View style={style.container}>
        <Text style={style.title}>HDB Past Transactions    </Text>
        <TouchableOpacity style={style.floatingButton} onPress={toggleModal}>
          <Image
            source={require('../assets/icons/search.png')}
            style={style.searchIcon}
          />
        </TouchableOpacity>
        <SearchModal visible={isModalVisible} onClose={toggleModal} />
      </View>
      <View style={style.listContainer}>
        {isLoading ? (
  <LoadingOverlay/>
) : (
  <FlatList 
    data={hdb_records}
    renderItem={renderItem}
    keyExtractor={(item) => item._id.toString()}
    style={style.flat_list}
  />
)}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 20,
  },
  container: {
    // flex: 1,
    flexDirection: 'row', // Horizontal layout
    alignItems: 'center', // Align items vertically in the center
    justifyContent: 'center', // Space items evenly along the row
    backgroundColor: '#f8edeb',


  },
  flat_list: {
    backgroundColor: '#f8edeb',

  },
  floatingButton: {
    // backgroundColor: 'white',
    // borderRadius: 50,
    // width: 60,
    // height: 60,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  searchIcon: {
    width: 50,
    height: 50,
  },
  listContainer:{
    paddingLeft:10,
    paddingRight: 10,
    backgroundColor: '#f8edeb',

  },
  listItem: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});

export default PastTransaction;
