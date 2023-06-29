import { Pressable, Text, TouchableOpacity } from "react-native"
import styles from "./styles"


const Button = ({title, onPress} : {title: string, onPress: () => any}) => {

    return (        
    <TouchableOpacity activeOpacity={0.6} onPress={onPress} style={styles.container}>
        <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
    
    )
}

export default Button