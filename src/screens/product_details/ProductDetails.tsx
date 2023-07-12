import React from 'react';
import { View, Text, Image, Pressable, Linking, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeStackParams from '../../navigators/types/typeUtil'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import AppHeader from '../../components/Header/AppHeader';
import { ScrollView } from 'react-native-gesture-handler';
import { styles } from "./styles"
import ImageCarousel from '../../components/ImageCarousel/ImageCarousel';

type HomeProps = NativeStackScreenProps<HomeStackParams, 'ProductDetails'>


const ProductDetails = ({navigation, route}: HomeProps) => {
    const {product} = route?.params || {}
    console.log('product =>' , product)

    const onBackPress = () => {
        navigation.goBack();
    }

    const onContact = () => {
        // Make a phone call
        const phone = '127282827'
        Linking.openURL(`tel:${phone}`);

        // Send an Email
        const email = 'support@mail.com'
        Linking.openURL(`mailto:${email}`)
    }

    return(
        <SafeAreaView style={styles.safe}>
        <ScrollView style={styles.container}>
            {product?.images?.length ? (
                <ImageCarousel images={product?.images} />
            ) : (
                <Image style={styles.image} source={{ uri: product?.image }} />
            )}
            <View style={styles.content}>
                <Text style={styles.title}>{product?.title}</Text>
                <Text style={styles.price}>{product?.price}</Text>
                <Text style={styles.description}>{product?.description}</Text>
            </View>

            <Pressable onPress={onBackPress} style={styles.backContainer}>
                <Image style={styles.backIcon} source={require('../../assets/back.png')} />
            </Pressable>
        </ScrollView>

        <View style={styles.footer}>
            <Pressable style={styles.bookmarkContainer}>
                <Image style={styles.bookmarkIcon} source={require('../../assets/bookmark_blue.png')} />
            </Pressable>
            <Button onPress={onContact} title="Contact Seller" />
        </View>
    </SafeAreaView>
    )
}

export default React.memo(ProductDetails)