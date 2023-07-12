import React, { useEffect, useState } from 'react';
import { ScrollView, SectionList, Text, View } from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppHeader from '../../components/Header/AppHeader';
import { FlatList } from 'react-native-gesture-handler';
import { categories } from '../../data/categories';
import { products } from '../../data/products';
import CategoryItem from '../../components/CategoryItem/CategoryItem';
import ProductHome from '../../components/ProductHome/ProductHome';
import HomeStackParams from '../../navigators/typeUtil'
import type { NativeStackScreenProps } from '@react-navigation/native-stack';


type HomeProps = NativeStackScreenProps<HomeStackParams, 'Home'>

const Home = ({navigation}: HomeProps) => {
    const [selectedCategory, setSelectedCategory] = useState()
    const [filteredProduct, setFilteredProducts] = useState(products)
    const [keyword, setKeyword] = useState();


    useEffect(() => {
        if (selectedCategory && !keyword) {
            const updatedProducts = products.filter((product) => product?.category === selectedCategory);
            setFilteredProducts(updatedProducts);
        } else if (selectedCategory && keyword) {
            const updatedProducts = products.filter((product) => product?.category === selectedCategory && product?.title?.toLowerCase().includes(keyword?.toLowerCase()) );
            setFilteredProducts(updatedProducts); 
        } else if (!selectedCategory && keyword) {
            const updatedProducts = products.filter((product) => product?.title?.toLowerCase().includes(keyword?.toLowerCase()));
            setFilteredProducts(updatedProducts); 
        } else if (!keyword && !selectedCategory) {
            setFilteredProducts(products);
        }
    }, [selectedCategory, keyword])

    const renderCategoriesItem =({ item, index} : { item: any, index: number})  => {
        return (
            <CategoryItem 
            onPress = {() => setSelectedCategory(item?.id)}
            isSelected = {item?.id == selectedCategory}
            title={item?.title} 
            image={item?.image} />
        )
    }

    const renderProductItems =({ item, index} : { item: any, index: number})  => {
        const onProductsClick = (product: any) =>{
            navigation.navigate('ProductDetails',  {product})
        }
        return (
            <ProductHome {...item} onPress={() => onProductsClick(item)} />
        )
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <AppHeader title="Find All You Need" showSearch onSearch={setKeyword} keyword={keyword} />
                <FlatList
                    style={styles.list}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={categories}
                    renderItem={renderCategoriesItem}
                    keyExtractor={(item, index) => String(index)} />

                <FlatList
                    style={styles.productsList}
                    numColumns={2} 
                    data={filteredProduct}
                    renderItem={renderProductItems}
                    keyExtractor={(item) => String(item.id)} 
                    ListFooterComponent={<View style={{height: 200}} />} />

            </View>
        </SafeAreaView>
    )
}

export default Home