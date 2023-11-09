import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useAppContext } from '../context/appContext';
import { useEffect } from 'react';
import Agent from '../components/Agent'

const PropertyAgent = () => {
  const {getAgents, agents} = useAppContext();

  useEffect(()=> {
    getAgents();

  },[])

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Our most trusted Agents</Text>
        <Text style={styles.text}>
        Our panel of trusted property agents are here to assist you if you
        require any assistance in your buying/selling process. With expertise in
        the local market, they'll help you through any difficultly you face,
        whether you're buying or selling. Known for their integrity and
        professionalism, our trusted agents prioritize your satisfaction.
        Countless satisfied clients have relied on them for top-notch service.
        We value strong relationships, ensuring these agents build lasting
        connections with you. Browse our list of trusted agents to embark on a
        seamless and successful real estate experience.
        </Text>
      </View>
      <View style={styles.agentContainer}>
      {agents.map((agent) => (
        <Agent key={agent._id} {...agent} />
      ))}
      </View>
      
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f8edeb',

  },
  agentContainer: {
    backgroundColor: '#f8edeb',
  },
  title: {
    fontSize: 28,
    textAlign: 'center', 
    fontWeight: 'bold',
    marginBottom: 10, 
    color:'#fe6d73',
  },
  text: {
    fontSize: 16,
    color: "#415a77",
    textAlign: 'center',
  },
});

export default PropertyAgent