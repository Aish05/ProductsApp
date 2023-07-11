import colors from "../../utils/colors";

const { StyleSheet, Dimensions } = require("react-native");

const { width} = Dimensions.get('window')

export const styles = StyleSheet.create({
    container: {
        margin: 4,
    },
    title: {
        color: colors.textGrey,
        paddingVertical: 8,
    },
    image: {
        resizeMode: 'cover',
        width: (width - 60) / 2,
        height: 220,
        borderRadius: 8,
    },
    price: {
        color: colors.black,
        paddingBottom: 8,
    }
})