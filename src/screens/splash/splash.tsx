import React, { PropsWithRef } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import Button from "../../components/Buttons";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import AuthStackParams from "../../../src/navigators/types/typeUtil"


type SplashProps = NativeStackScreenProps<AuthStackParams, 'Splash'>

const Splash = ({navigation} :SplashProps ) => {
    console.log("navigation: ", navigation)
    const signUp = () => {
        navigation.navigate("SingUp")
    }
    const signIn = () => {
        navigation.navigate("SignIn")
    }
        return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Image style={styles.image} source={require('../../assets/splash.png')} />
                <Text style={styles.title}>You'll Find</Text>
                <Text style={[styles.title, styles.innerTitle]}>All you need</Text>
                <Text style={styles.title}>Here!</Text>
            </View>

            <Button title="Sign up" onPress={signUp} style={undefined}/>
            <Pressable hitSlop={20}>
                <Text style={styles.footerText} onPress={signIn}>Sign In</Text>
            </Pressable>
        </View>

    )

}

export default Splash