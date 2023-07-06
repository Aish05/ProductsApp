import { Image, Pressable, Text, TouchableOpacity, View } from "react-native"
import styles from "./styles"
import App from "../../../App"
import React from "react"


const AppHeader = (title: string, onBackPressed : ()=>{}, onLogout?: ()=>{}, showLogout?: boolean, showSearch?: boolean, showBack?: boolean) => {

    return (        

        <View style={styles.container}>
            {showBack ? (
                <Pressable hitSlop={20} onPress={onBackPressed}>
                    <Image style={styles.image} source={require('../../assets/back.png')} />
                </Pressable>

            ) : showSearch ? (
                <Pressable hitSlop={20} onPress={onBackPressed}>
                    <Image style={styles.image} source={require('../../assets/search.png')} />
                </Pressable>
            ) : null}

            <Text style={styles.title}>{title}</Text>

            {showLogout ? (
                <Pressable hitSlop={20} onPress={onLogout}>
                    <Image style={styles.image} source={require('../../assets/logout.png')} />
                </Pressable>
            )
                : null}
        </View>
    )
}

export default React.memo(AppHeader)