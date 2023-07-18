import React from 'react';
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { products } from '../../data/products';
import FavItem from '../../components/FavouriteItem/FavouriteItem';
import Header from '../../components/Header/AppHeader';
import ProfileStackParams from "../../navigators/types/typeUtil"
import { NativeStackScreenProps } from '@react-navigation/native-stack';


type ProfileProps = NativeStackScreenProps<ProfileStackParams, 'MyListing'>

const MyListings = ({ navigation }: ProfileProps) => {
    const renderItem = ({ item }) => {
        const onProductPress = () => {
            navigation.navigate('ProductDetails', { product: item })
        }
        return (
            <FavItem icon={require('../../assets/delete.png')} onPress={onProductPress} {...item} />
        )
    }

    const goBack = () => navigation.goBack()

    return (
        <SafeAreaView>
            <Header title="My Listings" showBack onBackPressed={goBack} />

            <FlatList data={products} renderItem={renderItem} keyExtractor={(item) => String(item?.id)} />
        </SafeAreaView>
    )
}

export default React.memo(MyListings);