import { Image, TouchableOpacity, View } from "react-native"
import styles from "./styles"


const Checkbox = ({ checked, onCheck }: { checked: boolean, onCheck: () => any }) => {

    return (
        <TouchableOpacity activeOpacity={0.6} onPress={onCheck} style={styles.container}>
            {
                checked ? (
                    <View style={styles.checkContainer}> 
                        <Image style={styles.checkedIcon} source={require('../../assets/check.png')}/>
                    </View>
                ) : null
            }
        </TouchableOpacity>

    )
 }
   
 export default Checkbox