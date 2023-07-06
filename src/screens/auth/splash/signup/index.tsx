import React, { useState } from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import AuthHeader from "../../../../components/AuthHeader";
import Input from "../../../../components/Input";
import Checkbox from "../../../../components/Checkbox";
import Button from "../../../../components/Buttons";
import Separator from "../../../../components/Separator";
import Googlelogin from "../../../../components/Googlelogin";
import { SafeAreaView } from "react-native-safe-area-context";

const Signup = ({navigation}) => {
    const [checked, setChecked] = useState(false)

    const onSignIn = () => {
        navigation.navigate("SignIn")
    }

    const onBack = () => {
        navigation.goBack()
    }

    const checkChanged = () => {
        setChecked(prevChecked => !prevChecked);
      }

        return (
            <SafeAreaView>
                <View style={styles.container}>
                    <AuthHeader title="Sign up" onBackPressed={onBack} />

                    <Input isPassword={false} label="Name" placeholder="John Doe" />

                    <Input isPassword={false} label="Email" placeholder="example@gmail.com" />

                    <Input isPassword={true} label="Password" placeholder="**********" />

                    <View style={styles.termsRow}>
                        <Checkbox checked={checked} onCheck={checkChanged} />
                        <Text style={styles.termsAgreeStyle}>I agree with <Text style={styles.termsText}>Terms & Privacy</Text></Text>
                    </View>

                    <Button style={styles.button} title="Sign Up" onPress={function () {

                    }} />

                    <Separator title="Or sign up with" />

                    <Googlelogin onPress={function () {

                    }} />

                    <Text style={styles.footerText}>
                        Already have an account? <Text style={styles.footerLink} onPress={onSignIn}>Sign In</Text>
                    </Text>
                </View >
            </SafeAreaView>
   
    )

}

export default Signup