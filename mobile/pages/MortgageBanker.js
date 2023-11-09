import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useAppContext } from '../context/appContext';
import { useEffect } from 'react';
import Banker from '../components/Banker';

const MortgageBanker = () => {
  const { getBankers, bankers } = useAppContext();

  useEffect(() => {
    getBankers();
    printBankers(bankers);
  }, []);

  function printBankers(bankers) {
    bankers.forEach((banker) => {
      console.log('Banker Name:', banker.banker_name);
      console.log('Banker Bank:', banker.banker_bank);
      console.log('Banker Position:', banker.banker_position);
      console.log('Banker Number:', banker.banker_number);
      console.log('Banker Email:', banker.banker_email);
      console.log('------------------------------------');
    });
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Recommended Mortgage Bankers</Text>
        <View style = {styles.descriptionContainer}>
        <Text style={styles.text}>
          Our dedicated panel of mortgage bankers is committed to helping you
          navigate the complex world of home financing. With extensive knowledge
          of the mortgage market, they strive to find the best loan options
          tailored to your unique needs and financial goals. Our mortgage
          bankers will guide you through the entire process with professionalism
          and care. Trusted for their expertise and customer-focused approach,
          they ensure a seamless and stress-free experience from application to
          closing. Secure your dream home with the support of our reliable and
          experienced mortgage bankers.
        </Text>
        </View>
      </View>
      <View style={styles.bankerContainer}>
        {bankers.map((banker) => (
          <Banker key={banker._id} {...banker} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f8edeb',
  },

  descriptionContainer: {
    // backgroundColor: '#ffffff',
    // padding: 10,
    // margin: 10,
    // borderRadius: 8,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 5 },
    // shadowOpacity: 0.2,
    // shadowRadius: 2,
    // elevation: 2,
  },

  bankerContainer: {
    backgroundColor: '#f8edeb',

  },
  title: {
    fontSize: 28,
    textAlign: 'center', 
    fontWeight: 'bold',
    marginBottom: 10, 
    color:'#fe6d73' ,
  },
  text: {
    fontSize: 16,
    color: "#415a77",
    textAlign: 'center',
  },
});

export default MortgageBanker;
