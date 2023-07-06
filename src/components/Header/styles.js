import colors from "../../utils/colors";

const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    icon: {
        width: 22,
        height: 22

    },
    title: {
        color: colors.black,
        fontSize: 16,
        fontWeight: 'bold',
        paddingHorizontal: 12

    },
    space: {
        width: 22,
        height: 22

    },
})

export default styles