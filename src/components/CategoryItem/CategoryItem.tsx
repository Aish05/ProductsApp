import { Image, Pressable, StyleSheet, Text, TouchableOpacity, Vibration, View } from "react-native"
import styles from "./styles"
import React from "react"


const ProductHome = ({title, onPress, image} : {title: string, onPress?: () => void, image: string}) => {

    return (
        <Pressable onPress={onPress} style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: image }} />
            </View>
            <Text style={styles.title}>{title}</Text>
        </Pressable>
    )
}

export default React.memo(ProductHome)