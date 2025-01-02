import React from 'react';
import { ImageBackground ,View,StyleSheet, Image, Text} from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground source={require('../assets/bgg.jpg')} style={styles.background}>
            <Image source={require('../assets/companyLogo.png')} style={styles.logo}/>
            <>
            <Text style={styles.tagline}>Sell What You Don't Need</Text></>
            <View style={styles.login}>
                
            </View>
            <View style={styles.register}>
                
            </View>
        
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    login:{
        width:'100%',
        height:70,
        backgroundColor:'#074799'
    },
    register:{
        width:'100%',
        height:70,
        backgroundColor:'#FF9D23'
    },
    logo:{
        width:100,
        height:100,
        position:'absolute',
        top:70
    },
    tagline:{
        fontSize:20,
        fontWeight:'600',
        color: '#3E7B27',
        paddingVertical:20,
        position:'absolute',
        top:150
    }
})
export default WelcomeScreen;