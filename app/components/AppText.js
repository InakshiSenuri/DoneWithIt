import React from 'react'
import { Text, StyleSheet, Platform } from 'react-native';
import colors from '../config/colors';

export default function AppText({children}) {
  return (
    <Text style={styles.text}>{children}</Text>
  )
}


const styles = StyleSheet.create({
  text: {
    color: colors.tertiary,
    ...Platform.select({
      android: {
        fontSize: 18,
        fontFamily: "Roboto"
      },
      ios: {
        fontSize: 20,
        fontFamily: "Avenir"
      }
    })
    
  }
})