import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./styles";

const ProfileListItem = ({title, subtitle, onPress}: {title: string, subtitle?: string, onPress: () => void }) => {
    return (
        <Pressable style={styles.cardContainer} onPress={onPress}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{title}</Text>
                {!!subtitle ? (
                    <Text style={styles.subtitle}>{subtitle}</Text>
                ) : null }     
            </View>
            <Image
                style={styles.image}
                source={require('../../assets/go.png')}
                resizeMode="cover"
            />
        </Pressable>
    )
}
export default ProfileListItem