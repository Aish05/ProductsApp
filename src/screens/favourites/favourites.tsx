import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native-gesture-handler';
import { products } from '../../data/products';
import FavouriteItem from '../../components/FavouriteItem/FavouriteItem';
import AppHeader from '../../components/Header/AppHeader';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import HomeStackParams from '../../navigators/typeUtil'
 
type HomeProps = NativeStackScreenProps<HomeStackParams, 'Favourites'>

const Favourites = ({navigation}: HomeProps) => {
    const renderFavs = ({item} : {item : any}) => {
        
        const onProductPress = () => {
            navigation.navigate('ProductDetails', { product: item })
        }

        return(
            <FavouriteItem {...item} onPress={onProductPress}/>
        )
    }
    return (
        <SafeAreaView>

            <AppHeader title="Favourites" />
            <FlatList
                data={products}
                renderItem={renderFavs}
                keyExtractor={(item) => String(item?.id)}
            />

        </SafeAreaView>
    )
}

export default Favourites