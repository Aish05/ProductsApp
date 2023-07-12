import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeStackParams from '../../navigators/types/typeUtil'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import AppHeader from '../../components/Header/AppHeader';

type HomeProps = NativeStackScreenProps<HomeStackParams, 'ProductDetails'>


const ProductDetails = ({navigation, route}: HomeProps) => {
    const {product} = route?.params || {}
    console.log('product =>' , product)

    return(
        <SafeAreaView>
            <AppHeader title="Product Details" showBack={true} onBackPressed={() => {
                navigation.goBack()
            } }/>
            <Text>{product.title}</Text>
        </SafeAreaView>
    )
}

export default React.memo(ProductDetails)