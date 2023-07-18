import React, { PropsWithRef } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import Button from "../../components/Buttons";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import ProfileStackParams from "../../../src/navigators/types/typeUtil"
import { SafeAreaView } from "react-native-safe-area-context";
import AppHeader from "../../components/Header/AppHeader";
import { ScrollView } from "react-native-gesture-handler";
import ProfileListItem from "../../components/ProfileListItem/listitem";


type ProfileProps = NativeStackScreenProps<ProfileStackParams, 'Profile'>

const Profile = ({ navigation }: ProfileProps) => {
    const num = 10
    const onLogout = () => {
        console.log('logged out')
    }
    const onSettingsClicked = () => {
        navigation.navigate('Settings')
    }

    const onMyListingsClicked = () => {
        navigation.navigate('MyListing')
    }
 
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <AppHeader title="Profile" onLogout={onLogout} showLogout />
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.name}>User name</Text>
                    <Text style={styles.email}>User Email</Text>
                    <ProfileListItem title="My Listings" subtitle={`Already have ${num} listing`} onPress={onMyListingsClicked} />
                    <ProfileListItem onPress={onSettingsClicked} title="Settings" subtitle="Account, FAQ, Contact" />
                </View>
                <Button style={{ flex: 0 }} title="Add a new listing" onPress={() => { 
                    navigation.navigate('CreateListing')
                }} />
            </View>
        </SafeAreaView>
    )
}

export default Profile