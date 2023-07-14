import { Image, Pressable, Text, TextInput, View } from "react-native";
import { styles } from "./styles";
import React from "react";

const EditableBox = ({label, inputValue, onChangeText, editable}: {label: string, inputValue?: string, onChangeText: (arg0: string, arg1: string) => void, editable: boolean}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput editable={editable} value={inputValue} style={styles.input} onChangeText={onChangeText}/>
        </View>
    )
}
export default React.memo(EditableBox)