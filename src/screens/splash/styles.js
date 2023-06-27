import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    
    container: {
        padding: 24,
       flexDirection : "column",
       justifyContent: "center",
       alignContent: "center",
       borderWidth: 1,
       height: '100%'
    },

    titleContainer: {
        marginVertical: 24,
    },

    image: {
        width: '100%',
        height: 200,
    },

    title: {
        fontSize: 32,
        fontWeight: "bold",
        textAlign: "center"
    },
    innerTitle: {
        color: '#FCA34B',
        textDecorationLine : "underline"
    },
    footerText: {
        color: "#4F63AC",
        textAlign: "center",
        fontSize: 16,
        marginTop: 10,
        fontWeight: "bold"
    }
})