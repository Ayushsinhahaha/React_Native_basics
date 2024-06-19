import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SecondScreen from './SecondScreen'

const FirstScreen = ({navigation,route}) => {
    const {name,age}=route.params;
  return (
    <View>
      <Text>FirstScreen</Text>
      <Button title="change page" onPress={()=>navigation.navigate('SecondScreen')} />
      <Text style={{color:'black'}}>Name : {name}</Text>
      <Text>Age:{age}</Text>
    </View>
  )
}

export default FirstScreen

const styles = StyleSheet.create({})