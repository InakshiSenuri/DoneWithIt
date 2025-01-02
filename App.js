import { StatusBar } from 'expo-status-bar';
import { Dimensions,SafeAreaView, StyleSheet, Text, View ,Image} from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import AppButton from './app/components/AppButton';
// import { useDeviceOrientation } from '@react-native-community/hooks';



export default function App() {
  

  return (
  <WelcomeScreen/>
  // <ViewImageScreen/>
  // <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
  //   <AppButton title = "Login" onPress={() => console.log("Login")}> </AppButton>
  // </View>
  
  );
}

