import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Setting = () => {
  return (
    <View style = {styles.container}>
      <Text style = {styles.Txt}>Setting Screen</Text>
    </View>
  )
}

export default Setting

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'red',
  },
  Txt: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
  },
})