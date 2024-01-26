import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Button } from 'react-native'
import React from 'react'
import { Colors } from '../../Utils/Colors'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function SignUp({ navigation }) {
    const backIcon = <Icon name="angle-left" size={30} color={Colors.MainColor} />
    const userIcon = <Icon name="user-o" size={25} color="rgba(0, 0, 0, 0.50)" />
    const phone = <Icon name="phone" size={30} color="rgba(0, 0, 0, 0.50)" />
    const lock = <Icon name="lock" size={30} color="rgba(0, 0, 0, 0.50)" />
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerStyle}>
                {backIcon}
                <Text style={{ fontSize: 18, fontWeight: "500", color: Colors.MainColor }}>Back</Text>
            </TouchableOpacity>

            <View style={styles.design}>
                <Image source={require('../../assets/design.png')} />
            </View>

            <View style={styles.form}>
                <Text style={{ fontSize: 25, fontWeight: 500 }}>Create Account</Text>

                <View style={{marginTop: 25, display:"flex", flexDirection:"column", gap: 25}}>
                    <View style={styles.inputStyle}>
                        {userIcon}
                        <TextInput placeholder='First Name' style={{fontSize:17}}/>
                    </View>

                    <View style={styles.inputStyle}>
                        {phone}
                        <TextInput placeholder='Phone Number' style={{fontSize:17}}/>
                    </View>

                    <View style={styles.inputStyle}>
                        {lock}
                        <TextInput placeholder='Password' style={{fontSize:17}}/>
                    </View>

                    <View style={{display:"flex", justifyContent:"flex-end", alignItems:"flex-end"}}>
                        <TouchableOpacity style={{backgroundColor:Colors.MainColor, padding:17, paddingHorizontal:40, borderRadius:10}}>
                            <Text style={{fontSize:18, color:Colors.PrimaryColor}}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={{
                position: "absolute",
                bottom: 35,
                width: "100%",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                justifyContent:"center"
            }}>
                <Text>Already have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}><Text style={{ color: Colors.MainColor, fontWeight: "500" }}>Login</Text></TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.PrimaryColor,
        padding: 10,
        paddingTop: 55
    },
    headerStyle: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 5
    },
    design: {
        position: "absolute",
        right: 0,
    },
    form: {
        marginTop: "50%"
    },

    inputStyle: {
        backgroundColor: "#fff",
        shadowColor: 'rgba(0, 0, 0, 0.50)',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
        padding:15,
        borderRadius: 10,
        display: "flex",
        flexDirection:"row",
        gap: 15
    }
})