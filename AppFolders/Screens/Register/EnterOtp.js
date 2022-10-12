import React from 'react'
import { View, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, Text, TextInput } from 'react-native'
import RegisterImage from "../../assets/images/SVGImages/EnterOTP.svg"
import Colors from '../../Constants/Colors'
import { head1 } from '../../CommonStyling/Common'
import PrimaryButton from '../../Components/PrimaryButton'

const EnterOtp = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.imageHolder}>
                <RegisterImage width={400} height={400} />
            </View>
            <View style={styles.s2}>
                <Text style={head1}>Enter OTP</Text>
                <View style={styles.formgroup}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput style={styles.input} placeholder="Enter OTP"
                        placeholderTextColor={Colors.color2}
                    />
                    <View style={{marginTop:20}}></View>
                    <PrimaryButton style={styles.buttonStyle}>Verify</PrimaryButton>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default EnterOtp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.color4,
    },
    imageHolder: {
        flex: 2,
        maxHeight: "55%",
        maxWidth: "100%",
        alignItems: "center",
        justifyContent: "center",
        padding: 15,
    },
    s2: {
        display: "flex",
        // backgroundColor:"bl",
        zIndex: -1,
        width: "100%",
        height: "60%",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20,
    },
    formgroup: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        marginVertical: 10,
        marginHorizontal: 10,
    },
    label: {
        fontSize: 14,
        color: "rgba(0,0,0,0.7)",
        marginLeft: 10,
        marginBottom: 5,
        color: Colors.color4,
    },

    input: {
        // color: "rgba(0,0,0,0.7)",
        textAlign:"center",
        color: Colors.color1,
        backgroundColor: "rgba(0,0,0,0.1)",
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
        fontSize:20,
    },
    buttonStyle:{
    },
});




