import React from 'react';
import { View, StyleSheet, Pressable, Text} from 'react-native';
import Colors from '../Constants/Colors';
import WelcomeSvg from "../assets/images/SVGImages/Welcome.svg"
import PrimaryButton from "../Components/PrimaryButton"

const WelcomeScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.imageHolder}>
                <WelcomeSvg width={380} height={380} />
            </View>
            <View style={styles.TextData}>
                <PrimaryButton>Login</PrimaryButton>
                <PrimaryButton>Register</PrimaryButton>
            </View>
        </View>
    )
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.color4,
    },
    imageHolder: {
        flex: 1,
        maxHeight: "50%",
        maxWidth: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    TextData: {
        flex:1,
        paddingHorizontal:50,
        alignContent:"center",
        justifyContent:"center",
    },
    NextDataHolder: {

    },
    PressableButton:{
        padding:20,
        backgroundColor:Colors.color0,
        alignItems:"center",
        justifyContent:"center",
    },

})