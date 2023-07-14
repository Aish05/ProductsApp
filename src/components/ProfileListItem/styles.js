import { StyleSheet } from "react-native";
import colors from "../../utils/colors";
 
export const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
    cardContainer: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 8,
        padding: 18,
        marginVertical: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
      },
      textContainer: {
        flex: 1,
        marginRight: 16,
      },
      title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.blue
      },
      subtitle: {
        fontSize: 12,
        color: colors.textLightGrey,
      },
      image: {
        width: 24,
        height: 24,
        borderRadius: 8,
      },
})