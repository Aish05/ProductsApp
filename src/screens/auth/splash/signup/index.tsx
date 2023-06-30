import React, { useState } from "react";
import { View } from "react-native";
import { styles } from "./styles";
import AuthHeader from "../../../../components/AuthHeader";
import Input from "../../../../components/Input";
import Checkbox from "../../../../components/Checkbox";

const Signup = () => {
    const [checked, setChecked] = useState(false)

    const checkChanged = () => {
        setChecked(prevChecked => !prevChecked);
      }

        return (
        <View style={styles.container}>
            <AuthHeader title="Sign up" onBackPressed={function () {
            }} />
            
            <Input isPassword={false} label="Name" placeholder="John Doe" />

            <Input isPassword={false} label="Email" placeholder="example@gmail.com" />

            <Input isPassword={true} label="Password" placeholder="**********" />

            <View>
                <Checkbox checked={checked} onCheck={checkChanged}/>
            </View>

        </View>
    )

}

export default Signup