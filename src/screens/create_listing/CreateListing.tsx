import React, { PropsWithRef, useState } from "react";
import { ActivityIndicator, Image, KeyboardAvoidingView, Linking, Pressable, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import Button from "../../components/Buttons";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import ProfileStackParams from "../../navigators/types/typeUtil"
import { SafeAreaView } from "react-native-safe-area-context";
import AppHeader from "../../components/Header/AppHeader";
import { ScrollView } from "react-native-gesture-handler";
import ProfileListItem from "../../components/ProfileListItem/listitem";
import Editablebox from "../../components/EditableBox/editablebox";
import { ImagePickerResponse, launchImageLibrary } from "react-native-image-picker";
import { ImageLibraryOptions } from "react-native-image-picker";
import Input from "../../components/Input";
import Buttons from "../../components/Buttons";
import { categories } from "../../data/categories";


type ProfileProps = NativeStackScreenProps<ProfileStackParams, 'CreateListing'>


const CreateListing = ({ navigation }: ProfileProps) => {  


    const [images, setImages] = useState([]);
    const [values, setValues] = useState({});
    const [loading, setLoading] = useState(false);

    const goBack = () => {
        navigation.goBack();
    }

    const uploadNewImage = async () => {
        setLoading(true);
        const result = await launchImageLibrary({mediaType: 'mixed' });
        if (result?.assets?.length) {
            setImages(list => ([...list, ...result?.assets]));
            setLoading(false);
        }
    }

    const onDeleteImage = (image: any) => {
        setImages((list) => {
            const filteredImages = list.filter(img => img?.fileName !== image?.fileName);
            return filteredImages;
        });
    }

    const onChange = (value: any, key: string) => {
        setValues((val) => ({ ...val, [key]: value }));
    }

    return (
        <SafeAreaView>
        <AppHeader showBack={true} onBackPressed={goBack} title="Create a new listing" />

        <ScrollView style={styles.container}>
            <KeyboardAvoidingView behavior='position'>
                <Text style={styles.sectionTitle}>Upload Photos</Text>
                
                <View style={styles.imageRow}>
                    <TouchableOpacity disabled={loading} style={styles.uploadContainer} onPress={uploadNewImage}>
                        <View style={styles.uploadCircle}>
                            <Text style={styles.uploadPlus}>+</Text>
                        </View>
                    </TouchableOpacity>

                    {images?.map(image => (
                        <View style={styles.imageCont} key={image?.fileName}>
                            <Image style={styles.image} source={{ uri: image?.uri }} />
                            <Pressable hitSlop={20} onPress={() => onDeleteImage(image)}>
                                <Image style={styles.delete} source={require('../../assets/close.png')} />
                            </Pressable>
                        </View>
                    ))}

                    {loading ? (
                        <ActivityIndicator />
                    ) : null}
                </View>

                <Input placeholder="Listing Title" label="Title" value={values.title} onChangeText={(v) => onChange(v, 'title')} />
                <Input placeholder="Select the category" label="Category" value={values.category} onChangeText={(v) => onChange(v, 'category')} type="picker" options={categories} />
                <Input placeholder="Enter price in USD" label="Price" value={values.price} onChangeText={(v) => onChange(v, 'price')} keyboardType="numeric" />
                <Input style={styles.textarea} placeholder="Tell us more..." label="Description" value={values.description} onChangeText={(v) => onChange(v, 'description')} multiline />
            </KeyboardAvoidingView>

            <Button title="Submit" style={styles.button} onPress={function () {
                    
                } } />
        </ScrollView>
    </SafeAreaView>
    )
}

export default CreateListing