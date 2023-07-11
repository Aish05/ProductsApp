import { Image, Pressable, Text, TouchableOpacity, View } from "react-native"
import styles from "./styles"
import React, { useState } from "react"
import Input from "../Input";

export interface IAppHeaderProps {
    title: string;
    showLogout?: boolean;
    showSearch?: boolean;
    showBack?: boolean;
    onLogout?: () => void;
    onBackPressed?: () => void,
    onSearch: () => void,
    keyword: string
  }

const AppHeader = ({
   title,
   showLogout,
   showSearch,
   showBack,
   onLogout,
   onBackPressed,
   onSearch,
   keyword
  }: IAppHeaderProps) => {

    const [showSearchInput, setShowSearchInput] = useState(false)
    const onSearchClicked = () => {
        setShowSearchInput(s =>!s)
    }

    return (  
        <View style={styles.mainContainer}>
             <View style={styles.container}>
            {showBack ? (
                <Pressable hitSlop={20} onPress={onBackPressed}>
                    <Image style={styles.icon} source={require('../../assets/back.png')} />
                </Pressable>

            ) : showSearch ? (
                <Pressable hitSlop={20} onPress={onSearchClicked}>
                    <Image style={styles.icon} source={require('../../assets/search.png')} />
                </Pressable>
            ) : <View style={styles.space} /> }

            <Text style={styles.title}>{title}</Text>

            {showLogout ? (
                <Pressable hitSlop={20} onPress={onLogout}>
                    <Image style={styles.icon} source={require('../../assets/logout.png')} />
                </Pressable>
            )
                : <View style={styles.space} />}
        </View>
            {showSearchInput? (
                <Input onChangeText={onSearch} value={keyword} placeholder="Search Products."  label="" isPassword={false}/>
            ) : null}

        </View>      
       
    )
}

export default React.memo(AppHeader)