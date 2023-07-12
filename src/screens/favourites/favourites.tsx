import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native-gesture-handler';
import { products } from '../../data/products';
import FavouriteItem from '../../components/FavouriteItem/FavouriteItem';
 
const Favourites = () => {
    const renderFavs = ({item} : {item : any}) => {
        return(
            <FavouriteItem {...item}/>
        )
    }
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <FlatList
                    data={products}
                    renderItem={renderFavs}
                    keyExtractor={(item) => String(item?.id)}
                />
            </View>
        </SafeAreaView>
    )
}

export default Favourites