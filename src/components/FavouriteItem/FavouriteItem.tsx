import { Image, Pressable, StyleSheet, Text, TouchableOpacity, Vibration, View } from "react-native"
import { styles } from "./styles"
import React from "react"

const FavItem = ({ title, price, image, onPress }: { title: string, price: number, onPress?: () => void, image: string }) => {
    return (
            <Pressable onPress={onPress} style={styles.container}>
                <Image style={styles.image} source={{ uri: image }} />
                <View style={styles.content}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.price}>{price}</Text>
                </View>
                
                <Image style={styles.closeImage} source={require('../../assets/close.png')} />
            </Pressable>
        )
}

            export default React.memo(FavItem);