import { Image, Pressable, StyleSheet, Text, TouchableOpacity, Vibration, View } from "react-native"
import styles from "./styles"
import React from "react"
import colors from "../../utils/colors"


const ProductHome = ({title, onPress, image, isSelected} : {title: string, onPress?: () => void, image: string, isSelected: boolean}) => {

    return (
        <Pressable onPress={onPress} style={styles.container}>
            <View style={[styles.imageContainer, isSelected ? {backgroundColor : colors.black} : {}]}>
                <Image style={styles.image} source={{ uri: image }} />
            </View>
            <Text style={[styles.title, isSelected ? {color: colors.blue, fontWeight: '500'}: {}]}>{title}</Text>
        </Pressable>
    )
}

export default React.memo(ProductHome)