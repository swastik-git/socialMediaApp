import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import Colors from '../Constants/Colors'

const WelcomeScreen = () => {
    const image = {
        uri: ""
    }
    return (
        <View style={styles.container}>
            <View style={styles.imageHolder}>
                <Image style={styles.WelcomeImage} source={image} />
            </View>
        </View>
    )
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.color2,
    },
    imageHolder: {
        flex: 1,
        maxHeight: "50%",
        maxWidth: "100%",
    },
    WelcomeImage: {
        width: 50,
        height: 50,

    },
    TextData: {

    },
    NextDataHolder: {

    },

})