import React from 'react';
import { ImageBackground ,View,StyleSheet, Image, Text} from 'react-native';
import colors from '../config/colors';
import AppButton from '../components/AppButton';

function WelcomeScreen(props) {
    return (
        <ImageBackground source={require('../assets/bgg.jpg')} style={styles.background} blurRadius={1}>
            <Image source={require('../assets/companyLogo.png')} style={styles.logo}/>
            <>
            <Text style={styles.tagline}>Sell What You Don't Need</Text></>
            <View style={styles.container}>
                <AppButton title = "Login" onPress={() => console.log("Login")}> </AppButton>
                <AppButton title = "Register" onPress={() => console.log("Register")} color={"primary"}> </AppButton>
            </View>
            
            {/* <View style={styles.register}>
                
            </View> */}
        
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    container:{
        width:'100%',
        padding: 10,
    },
    logo:{
        width:100,
        height:100,
        position:'absolute',
        top:70
    },
    tagline:{
        fontSize:25,
        fontWeight:'800',
        color: colors.tertiary,
        fontFamily:'Roboto',
        paddingVertical:20,
        position:'absolute',
        top:160
    }
})
export default WelcomeScreen;