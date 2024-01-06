import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View style = {styles.container}>
      <Text style = {styles.Txt}>Home Screen</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  Txt: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
  },
})