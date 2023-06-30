import { Pressable, StyleSheet, Text, TouchableOpacity } from "react-native"
import styles from "./styles"


const Button = ({title, onPress, style} : {title: string, onPress: () => any, style: any}) => {

    return (        
    <TouchableOpacity activeOpacity={0.6} onPress={onPress} style={[styles.container, style]}>
        <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
    
    )
}

export default Button