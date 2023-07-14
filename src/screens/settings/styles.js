import { StyleSheet } from "react-native";
import colors from "../../utils/colors";
 
export const styles = StyleSheet.create({
    container: {
        padding: 24,
        flex: 1
    },
    name: {
        fontSize: 20,
        fontWeight: '700'
    },
    email: {
        marginTop: 12,
        fontSize: 14,
        fontWeight: '400',
        color: colors.textLightGrey
    },
    content: {
      flex: 1,
  },
  sectionHeader: {
    color: colors.textGrey,
    fontSize: 16,
    fontWeight: '600',
  },
  personalContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
    },
  editIcon: {
    height: 24,
    width: 24
  },
  button: {
    paddingVertical: 12,
    marginTop: 32
  }
})