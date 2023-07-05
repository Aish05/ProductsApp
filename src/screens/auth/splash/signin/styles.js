import { StyleSheet } from "react-native";
import colors from "../../../../utils/colors";


export const styles = StyleSheet.create({

    container: {
        padding: 24
    },
    termsRow: {
        flexDirection: 'row',
        alignItems: "center"
    },
    termsAgreeStyle: {
        color: colors.blue,
        marginHorizontal: 10
    },
    termsText: {
        fontWeight: 'bold',

    },
    button: {
        marginVertical: 20
    },
    footerText: {
        textAlign: "center",
        marginVertical: 50,
        color: colors.blue
    },
    footerLink: {
        fontWeight: 'bold'
    }
})