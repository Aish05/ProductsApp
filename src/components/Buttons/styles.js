import colors from "../../utils/colors";

const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
    container: {
        backgroundColor : colors.blue,
        paddingVertical : 16,
        paddingHorizontal: 8,
        width: "100%",
        flex: 1
    },
    text: {
        color : "#ffffff",
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold"
    }
})

export default styles