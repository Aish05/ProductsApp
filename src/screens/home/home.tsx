import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppHeader from '../../components/Header/AppHeader';
import { FlatList } from 'react-native-gesture-handler';
import { categories } from '../../data/categories';
import { products } from '../../data/products';
import CategoryItem from '../../components/CategoryItem/CategoryItem';
import ProductHome from '../../components/ProductHome/ProductHome';

 
const Home = () => {
    const renderCategoriesItem =({ item, index} : { item: any, index: number})  => {
        return (
            <CategoryItem title={item?.title} image={item?.image} />
        )
    }

    const renderProductItems =({ item, index} : { item: any, index: number})  => {
        return (
            <ProductHome {...item} />
        )
    }

    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <AppHeader title="Find All You Need" showSearch />
                <FlatList
                    style={styles.list}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={categories}
                    renderItem={renderCategoriesItem}
                    keyExtractor={(item, index) => String(index)} />

                <FlatList
                    style={styles.productsList}
                    numColumns={2} data={products}
                    renderItem={renderProductItems}
                    keyExtractor={(item) => String(item.id)} />

            </ScrollView>
        </SafeAreaView>
    )
}

export default Home