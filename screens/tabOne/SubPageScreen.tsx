import * as React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { useEffect } from "react";
import { Text, View } from "../../components/Themed";
import { Button } from "react-native";
import { TabOneParamList } from '../../types';

export default function SubPageScreen({ navigation, route }: StackScreenProps<TabOneParamList, 'SubPage'>) {
  const { id } = route.params

  useEffect(() => {
    if (id) {
      console.log(id)
    }
  }, [id])

  return (
    <View style={{ marginTop: 100 }}>
      <Text>sub page screen</Text>
      <Button title='Back' onPress={() => navigation.goBack()}/>
    </View>
  )
}
