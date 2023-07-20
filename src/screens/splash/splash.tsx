import React, { PropsWithRef, useContext } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import Button from "../../components/Buttons";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import AuthStackParams from "../../../src/navigators/types/typeUtil"
import { UserContext, UserContextType } from "../../../UserContext";


type SplashProps = NativeStackScreenProps<AuthStackParams, 'Splash'>

const Splash = ({navigation} :SplashProps ) => {
    
    const { user, setUser } = useContext<UserContextType>(UserContext);
    console.log(user)

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

                <View style={{width: '100%', flexDirection: "row" }}>
                    <Button title="Sign up" onPress={signUp} style={undefined} />
                </View>
            <Pressable hitSlop={20}>
                <Text style={styles.footerText} onPress={signIn}>Sign In</Text>
            </Pressable>
        </View>

    )

}

export default Splash