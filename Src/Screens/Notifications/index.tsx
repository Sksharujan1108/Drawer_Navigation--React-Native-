import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Notifications = () => {
  return (
    <View style = {styles.container}>
      <Text style = {styles.Txt}>Notification Screen</Text>
    </View>
  )
}

export default Notifications

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  Txt: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
  },
})