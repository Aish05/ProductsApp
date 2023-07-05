import { Pressable, StyleSheet, Text, TouchableOpacity, Image } from "react-native"
import styles from "./styles"
import React from "react"


const GoogleLogin = ({ onPress} : { onPress: () => any}) => {

    return (        
    <TouchableOpacity activeOpacity={0.6} onPress={onPress} style={styles.container}>
        <Image  style={styles.image} source={require('../../assets/gmail.png')} />
    </TouchableOpacity>
    
    )
}

export default React.memo(GoogleLogin)