import React from 'react';
import { ScrollView, Text } from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppHeader from '../../components/Header/AppHeader';
 
const Home = () => {
    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <AppHeader title="Find All You Need" showSearch  />
                <Text>Home</Text>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home