import React from "react";
import { View } from "react-native";
import { styles } from "./styles";
import AuthHeader from "../../../../components/AuthHeader";
import Input from "../../../../components/Input";

const Signup = () => {
    return (
        <View style={styles.container}>
            <AuthHeader title="Sign up" onBackPressed={function () {
            }} />
            
            <Input isPassword={false} label="Name" placeholder="John Doe" />

            <Input isPassword={false} label="Email" placeholder="example@gmail.com" />

            <Input isPassword={true} label="Password" placeholder="**********" />

        </View>
    )

}

export default Signup