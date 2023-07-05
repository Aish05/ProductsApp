import colors from "../../utils/colors";

const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: 'center',
        marginVertical: 20
    },
    line: {
     
        height: 2,
        backgroundColor: colors.lightGrey,
        flex: 1,
    },
    text: {
    
        color: colors.blue,
        fontWeight: '500',
        marginHorizontal: 2
    }
})

export default styles