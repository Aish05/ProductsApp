import React, { PropsWithRef, useState } from "react";
import { Image, Linking, Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import Button from "../../components/Buttons";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import ProfileStackParams from "../../navigators/types/typeUtil"
import { SafeAreaView } from "react-native-safe-area-context";
import AppHeader from "../../components/Header/AppHeader";
import { ScrollView } from "react-native-gesture-handler";
import ProfileListItem from "../../components/ProfileListItem/listitem";
import Editablebox from "../../components/EditableBox/editablebox";


type ProfileProps = NativeStackScreenProps<ProfileStackParams, 'Settings'>

const Settings = ({ navigation }: ProfileProps) => {
    const [editing, setEditing] = useState(false);
    const [values, setValues] = useState({ name: 'User', email: 'user@mail.com' })

    const onEditPress = () => {
        setEditing(true);
    }

    const onSave = () => {
        setEditing(false);
    }

    const onChange = (key: string, value: string) => {
        setValues((v: { name: string; email: string; }) => ({ ...v, [key]: value }))
    }

    const onItemPress = () => {
        Linking.openURL('https://google.com');
    }

    const goBack = () => {
        navigation.goBack()
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <AppHeader showBack onBackPressed={goBack} title="Settings" />
            <ScrollView style={styles.container}>
                <View style={styles.personalContainer}> 
                    <Text style={styles.sectionHeader}>Personal Information:</Text>
                    <Pressable onPress={onEditPress}>
                        <Image style={styles.editIcon} source={require('../../assets/edit.png')} />
                    </Pressable>
                </View>

                <Editablebox label="Name" onChangeText={(v) => onChange('name', v)} inputValue={values.name} editable={editing} />
                <Editablebox label="Email" onChangeText={(v) => onChange('email', v)} inputValue={values.email} editable={editing} />
                { editing ? (  <Button style={styles.button} onPress={onSave} title="Save"/> ) : null}

                <Text style={[styles.sectionHeader, { marginTop: 32 }]}>Help Center:</Text>
                <ProfileListItem title="FAQ" onPress={onItemPress} />
                <ProfileListItem title="Contact Us" onPress={onItemPress} />
                <ProfileListItem title="Privacy & Terms" onPress={onItemPress} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Settings