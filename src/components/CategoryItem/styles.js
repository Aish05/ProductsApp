import colors from "../../utils/colors";

const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 8,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: colors.grey,
    },
    image: {
        width: 32,
        height: 32,
    },
    imageContainer: {
        backgroundColor: colors.lightGrey,
        padding: 10,
        borderRadius: 8,
        marginBottom: 8,
    }
})

export default styles