import { TextInput, View, Text, Pressable, Image } from "react-native"
import styles from "./styles"
import { useState } from "react"

const Input = ({ label, placeholder, isPassword, onChangeText , value}: { label: string, placeholder: string, isPassword: boolean, onChangeText: () => void, value: string }) => {

    const [isPasswordVisible, setPasswordVisible] = useState(false)
    const onEyeToggle = () => {
            setPasswordVisible(!isPasswordVisible)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputContainer}>
                <TextInput value={value} placeholder={placeholder} style={styles.input} onChangeText={onChangeText}  secureTextEntry={isPassword && !isPasswordVisible} />

                
                {(isPassword ? 
                    <Pressable onPress={onEyeToggle}>
                        <Image style={styles.eye} source={isPasswordVisible ? require('../../assets/eye.png') : require('../../assets/eye_closed.png')}/>
                    </Pressable>
                 : null)
                }

            </View>
        </View>

    )
}

export default Input