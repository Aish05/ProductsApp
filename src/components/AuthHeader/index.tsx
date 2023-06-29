import { Image, Pressable, Text, TouchableOpacity, View } from "react-native"
import styles from "./styles"


const AuthHeader = ({title, onBackPressed} : {title: string, onBackPressed: () => any}) => {

    return (        
    <View style={styles.container}>
        <Pressable hitSlop={20} onPress={onBackPressed}>
            <Image style={styles.image} source={require('../../assets/auth_back.png')}/>
        </Pressable>
        <Text style={styles.title}>{title}</Text>
    </View>
    )
}

export default AuthHeader