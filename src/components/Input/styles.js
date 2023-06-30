
import colors from "../../utils/colors";

const { StyleSheet, YellowBox } = require("react-native");

const styles = StyleSheet.create({
    container: {
        marginBottom: 20
    },
    label: {
        marginVertical: 10,
        color: colors.blue,
        fontSize: 14,
        fontWeight : '500'
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: colors.grey,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: "center"

    },
    input: {
        paddingHorizontal: 16,
        paddingVertical: 20, 
        flex: 1
    },
    eye: {
        width:24,
        height: 24,
        marginHorizontal: 16
    }
})

export default styles