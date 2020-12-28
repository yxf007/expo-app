import * as React from 'react';
import { Button, StyleSheet } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { useEffect, useState } from "react";

export default function TabOneScreen({ navigation }: { navigation: any }) {
  const [moment, setMoment] = useState<boolean>(false);

  useEffect(() => {
    console.log('DidMount One')
    return () => {
      console.log('WillUnmount One')
    }
  }, [moment])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
      <EditScreenInfo path="/screens/TabOneScreen.tsx"/>
      <Button title='subPage' onPress={() => navigation.navigate('SubPage', { id: 123 })}/>
      <Button title='触发useEffect' onPress={() => setMoment(!moment)}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
