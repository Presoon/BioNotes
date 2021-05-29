import { StyleSheet } from "react-native";
import colors from "../../assets/colors.js";
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    flexDirection: "row",
    width: "100%",
    height: 80,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    zIndex: 100,

    backgroundColor: colors.gray,
  },
  navItemFirst: {
    display: "flex",
    width: "25%",
    height: 80,
    borderRightWidth: 2,
    borderRightColor: colors.darkGray,
  },
  
  navItem: {
    display: "flex",
    width: "25%",
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 2,
    borderRightColor: colors.darkGray,
  },

  itemName: {
    fontSize: 25,
    color: colors.primary,
    fontWeight: "bold",
  },
});

export default styles;
