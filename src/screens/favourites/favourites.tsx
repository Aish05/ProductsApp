import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native-gesture-handler';
import { products } from '../../data/products';
import FavouriteItem from '../../components/FavouriteItem/FavouriteItem';
import AppHeader from '../../components/Header/AppHeader';
 
const Favourites = () => {
    const renderFavs = ({item} : {item : any}) => {
        return(
            <FavouriteItem {...item}/>
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