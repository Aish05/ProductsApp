import React, { useState } from "react";
import { View, Text, Alert } from "react-native";
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
import { request } from "../../../utils/request";
import Config from 'react-native-config'
import axios from "axios";


type SignUpProps = NativeStackScreenProps<AuthStackParams, 'SignUp'>

const Signup = ({ navigation }: SignUpProps) => {
    const [checked, setChecked] = useState(false)
    const [values, setValues] = useState({})

    const onChange = (key: any, value: any) => {
        setValues(v => ({ ...v, [key]: value }))
    }

    const onSignIn = () => {
        navigation.navigate("SignIn")
    }

    const onBack = () => {
        navigation.goBack()
    }

    const checkChanged = () => {
        setChecked(prevChecked => !prevChecked);
    }
    const onSubmit = async () => {
        let url = "https://listicle.deegeehub.com/api/user/register"
        // axios.post(url, {
        //     fullName: 'Aish', email: 'Flintstone@gmail.com', password: 'Test!23', confirmPassword:'Test!23'
        // }).then(function (response) {
        //     console.log(response);
        // }).catch(function(error) {
        //      console.log(error);
        // });

        try {
            if (!values?.fullName || !values?.email || !values?.password) {
                Alert.alert('All fields are required');
                return;
            }
            const response = await request({
                url: url,
                method: 'post',
                data: values
            }).then(response=> {
                console.log('response', response);    
            }).catch((error)=>{
                console.log('Request URL:', `${url}`);
                console.log('Request Method:', 'POST');
                console.log('Request Data:', values);
                console.log('Error:', error);
                Alert.alert(error.message);
             });

        } catch (error) {
            console.log('error :>> ', error);
        }
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <AuthHeader title="Sign up" onBackPressed={onBack} />

                <Input isPassword={false} label="Name" placeholder="John Doe" onChangeText={(v) => onChange('fullName', v)} value={values.fullName} />

                <Input isPassword={false} label="Email" placeholder="example@gmail.com" onChangeText={(v) => onChange('email', v)} value={values.email} />

                <Input isPassword={true} label="Password" placeholder="**********" onChangeText={(v) => onChange('password', v)} value={values.password} />
                <Input value={values.confirmPassword} onChangeText={(v) => onChange('confirmPassword', v)} isPassword label="Confirm Password" placeholder="*******" />


                <View style={styles.termsRow}>
                    <Checkbox checked={checked} onCheck={checkChanged} />
                    <Text style={styles.termsAgreeStyle}>I agree with <Text style={styles.termsText}>Terms & Privacy</Text></Text>
                </View>

                <View style={{ width: '100%', flexDirection: "row" }}>
                    <Button style={styles.button} title="Sign Up" onPress={onSubmit} />
                </View>

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