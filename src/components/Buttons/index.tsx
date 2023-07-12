import { Pressable, StyleSheet, Text, TouchableOpacity } from "react-native"
import styles from "./styles"
import React from "react"


const Button = ({title, onPress, style} : {title: string, onPress: () => any, style?: any}) => {

    return (        
    <TouchableOpacity activeOpacity={0.6} onPress={onPress} style={[styles.container, style]}>
        <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
    
    )
}

export default React.memo(Button)