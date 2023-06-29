import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import Button from "../../components/Buttons";

const Splash = () => {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Image style={styles.image} source={require('../../assets/splash.png')} />
                <Text style={styles.title}>You'll Find</Text>
                <Text style={[styles.title, styles.innerTitle]}>All you need</Text>
                <Text style={styles.title}>Here!</Text>
            </View>

            <Button title="Sign up" onPress={function () {
               console.log("clicked signup ")
            } }/>
            <Pressable hitSlop={20}>
                <Text style={styles.footerText}>Sign In</Text>
            </Pressable>
        </View>

    )

}

export default Splash