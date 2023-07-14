import { StyleSheet } from "react-native";
import colors from "../../utils/colors";
 
export const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      flexDirection: 'column',
      justifyContent: "space-between",
      borderRadius: 8,
      padding: 10,
      marginVertical: 12,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 4,
    },
   label:{
    color: colors.grey,
    marginTop: 6,
    fontSize: 12
   },
   input: {
    color: colors.blue,
    fontSize: 14,
    fontWeight: '500'
   }
})