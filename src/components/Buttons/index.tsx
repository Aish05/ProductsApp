import { Pressable, Text, TouchableOpacity } from "react-native"
import styles from "./styles"


const Button = ({title} : {title:string} ) => {

    const handleClick = () => {
        console.log("Button Clicked");
        
    }
    return (        
    <TouchableOpacity activeOpacity={0.6} onPress={handleClick} style={styles.container}>
        <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
    
    )
}

export default Button