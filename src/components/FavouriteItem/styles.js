import colors from "../../utils/colors";

const { StyleSheet, Dimensions } = require("react-native");

const { width} = Dimensions.get('window')

export const styles = StyleSheet.create({

    container: {
        margin: 4,
        flexDirection: "row"
    },
    content: {
        margin: 4,
        flex: 1
    },
    title: {
        color: colors.textGrey,
        paddingVertical: 8,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginRight:20
    },
    closeImage: {
        marginTop: 10,
        width: 24,
        height: 24,
        alignItems: 'flex-end'

    },
    price: {
        color: colors.black,
        paddingBottom: 8,
    }
})