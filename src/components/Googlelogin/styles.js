import colors from "../../utils/colors";

const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
    container: {
        backgroundColor : colors.darkGrey,
        borderRadius: 14,
        width: "45%",
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        padding: 16
    },
    image: {
       width: 30,
       height: 30
    }
})

export default styles