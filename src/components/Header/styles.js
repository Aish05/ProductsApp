import colors from "../../utils/colors";

const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20
    },
    image: {
        width: 20,
        height: 20

    },
    title: {
        color: colors.blue,
        fontSize: 26,
        fontWeight: '500',
        paddingHorizontal: 12

    }
})

export default styles