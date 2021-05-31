import { StyleSheet } from "react-native";
import colors from "../../assets/colors.js";
import Constants from "expo-constants";
const styles = StyleSheet.create({
  listContainer: {
    display: "flex",
    width: "100%",
    zIndex: 200,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  listCover: {
    width: "40%",
    marginHorizontal: 15,
    marginVertical: 15,

    borderRadius: 15,
    backgroundColor: colors.gray,
    padding: 20,
  },
  listTitle: {
    marginLeft: 15,
    lineHeight: 30,
    fontSize: 20,
    fontWeight: "bold",
    borderBottomWidth: 1,
    borderBottomColor: colors.darkGray,
  },
  listHeader: {
    flexDirection: "row",
  },
});

export default styles;
