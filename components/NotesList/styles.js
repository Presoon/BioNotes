import { StyleSheet } from "react-native";
import colors from "../../assets/colors.js";
const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    zIndex: 100,
    marginTop: 30,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },

  noteCover: {
    width: "40%",
    marginHorizontal: 15,
    marginVertical: 15,

    borderRadius: 15,
    backgroundColor: colors.gray,
    padding: 20,
  },
  title: {
    marginLeft: 15,
    lineHeight: 30,
    fontSize: 20,
    fontWeight: "bold",
    borderBottomWidth: 1,
    borderBottomColor: colors.darkGray,
  },
  noteHeader: {
    flexDirection: "row",
  },
});

export default styles;
