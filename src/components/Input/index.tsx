import { TextInput, View, Text, Pressable, Image } from "react-native"
import styles from "./styles"
import { useState } from "react"

const Input = ({ label, placeholder, isPassword }: { label: string, placeholder: string, isPassword: boolean }) => {

    const [isPasswordVisible, setPasswordVisible] = useState(false)
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputContainer}>
                <TextInput secureTextEntry={isPassword && !isPasswordVisible} placeholder={placeholder} style={styles.input} />

                {(isPassword ? 
                    <Pressable>
                        <Image source={require('../../assets/eye.png')} />
                    </Pressable>
                 : null)
                }

            </View>
        </View>

    )
}

export default Input