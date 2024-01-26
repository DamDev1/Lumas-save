import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../../Utils/Colors';

export default function Welcome({navigation }) {
    return (
        <View style={styles.container}>
            <View style={{paddingTop: "30%"}}>
                <Image source={require('../../assets/welcome-image.png')} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.headingText}>Save your money with <Text style={{color:Colors.MainColor}}>Lumus Saving</Text></Text>
                <Text style={{marginTop: 20, fontSize: 18, color: Colors.TextColor}}>Save money to reach your Goal for future and make your dreams come true</Text>
            </View>
            <TouchableOpacity style={{position:"absolute", bottom: 50, backgroundColor:Colors.MainColor, padding:15, width: "80%", borderRadius:40}} onPress={() => navigation.navigate('SignUp')}>
                <Text style={{textAlign:"center", color: "white", fontSize:18}}>Get Started</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        position: "relative",
        backgroundColor: "white"
    },
    textContainer:{
        marginTop: 30,
        paddingHorizontal: 25
    },
    headingText: {
        color: "black",
        fontSize: 30,
    }
});
