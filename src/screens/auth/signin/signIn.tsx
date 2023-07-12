import React, { useState } from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";
import Checkbox from "../../../components/Checkbox";
import Button from "../../../components/Buttons";
import Separator from "../../../components/Separator";
import Googlelogin from "../../../components/Googlelogin";
import { SafeAreaView } from "react-native-safe-area-context";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import AuthStackParams from "../../../navigators/types/typeUtil"

type SignInProps = NativeStackScreenProps<AuthStackParams, 'SignIn'>

const SignIn = ({navigation}: SignInProps) => {


    const onSignUp = () => {
        navigation.navigate("SingUp")
    }

    const onBack = () => {
        navigation.goBack()
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <AuthHeader title="Sign In" onBackPressed={onBack} />

                <Input isPassword={false} label="Email" placeholder="example@gmail.com" />

                <Input isPassword={true} label="Password" placeholder="**********" />

                <View style={{ width: '100%', flexDirection: "row" }}>
                    <Button style={styles.button} title="Sign In" onPress={function () {

                    }} />
                </View>

                <Separator title="or sign in with" />

                <Googlelogin onPress={function () {

                }} />

                <Text style={styles.footerText}>
                    Don’t have an account? <Text style={styles.footerLink} onPress={onSignUp}>Sign Up </Text>
                </Text>

            </View>
        </SafeAreaView>
    )

}

export default SignIn