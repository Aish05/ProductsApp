import colors from "../../utils/colors";

const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
    mainContainer: {
        paddingHorizontal: 16
    },
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 24
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