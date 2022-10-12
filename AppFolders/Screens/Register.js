import React from 'react'
import { View, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, Text, TextInput } from 'react-native'
import RegisterImage from "../assets/images/SVGImages/MobileLogin.svg"
import { button1, head1 } from '../CommonStyling/Common'
import PrimaryButton from '../Components/PrimaryButton'
import Colors from '../Constants/Colors'

const Register = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.imageHolder}>
                <RegisterImage width={320} height={320} />
            </View>
            <ScrollView style={styles.s2}>
                <Text style={head1}>Create a new account</Text>
                <Text style={styles.link2}>Already registered?&nbsp;
                    <Text style={styles.link}
                        onPress={() => navigation.navigate('login')}
                    >
                        Login here
                    </Text>
                </Text>

                <View style={styles.formgroup}>
                    <Text style={styles.label}>Name</Text>
                    <TextInput style={styles.input}
                        placeholder="Enter your Name"
                        placeholderTextColor={Colors.color3}
                    />
                </View>
                <View style={styles.formgroup}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput style={styles.input}
                        placeholder="Enter your Email"
                        placeholderTextColor={Colors.color3}
                    />
                </View>
                <View style={styles.formgroup}>
                    <Text style={styles.label}>Password</Text>
                    <TextInput style={styles.input} placeholder="Enter your password"
                        placeholderTextColor={Colors.color3}
                    />
                </View>
                <View style={styles.formgroup}>
                    <Text style={styles.label}>Confirm password</Text>
                    <TextInput style={styles.input}
                        placeholderTextColor={Colors.color3}
                        placeholder="Enter your password again"
                    />
                </View>
                <PrimaryButton>Register</PrimaryButton>
                {/* <TouchableOpacity
                >
                    <Text style={button1}>Signup</Text>
                </TouchableOpacity> */}
                <View>

                </View>
            </ScrollView>
        </SafeAreaView>

    )
}

export default Register;
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
        justifyContent: "center"
    },
    s2: {
        display: "flex",
        // backgroundColor: "rgba(0,0,0,0.4)",
        zIndex: -1,
        width: "100%",
        height: "45%",
        paddingHorizontal: 20,
        // paddingVertical: 15,
    },
    formgroup: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        margin: 5,
    },
    label: {
        // fontSize: 14,
        color: "rgba(0,0,0,0.7)",
        marginLeft: 10,
        // marginBottom: 5,
        color: Colors.color4,
    },
    input: {
        color: Colors.color4,
        backgroundColor: "rgba(255,255,255,0.2)",
        borderRadius: 20,
        padding: 10,
    },
    input1: {
        color: Colors.color1,
        backgroundColor: "rgba(255,255,255,0.2)",
        borderRadius: 10,
        padding: 10,
        height: 100,
    },
    link: {
        color: Colors.color01,
        fontSize: 15,

    },
    fp: {
        display: "flex",
        alignItems: "flex-end",
        marginHorizontal: 10,
        marginVertical: 5,
    },
    link2: {
        color: Colors.color2,
        fontSize: 15,
        textAlign: "center",
    },
})