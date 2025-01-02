import React from 'react';
import { StyleSheet, Text, View , Image} from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppText from '../components/AppText';

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="close" size={40} color={colors.tertiary} style={styles.closeIcon} />
      <MaterialCommunityIcons name="trash-can-outline" size={40} color={colors.primary} style={styles.deleteIcon} />
      {/* <AppText >IOS</AppText> */}
      <Image source={require('../assets/bgg.jpg')} style={styles.image}/>
    </View>
  )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    }
    ,
    container: {
        flex: 1,
        backgroundColor: colors.black
    },
    closeIcon: {
        position: 'absolute',
        top: 40,
        left: 30,
        width: 50,
        height: 50,
        // backgroundColor: colors.tertiary
        
    },
    deleteIcon: {
        position: 'absolute',
        top: 40,
        right: 30,
        width: 50,
        height: 50,
        // backgroundColor: colors.primary,
        
    }
        
    
})
