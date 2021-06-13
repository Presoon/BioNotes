import { StyleSheet } from "react-native";
import colors from "../../assets/colors.js";

const styles = StyleSheet.create({
  Container: {
    display: "flex",
    width: "100%",
    zIndex: 200,
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
  buttonTitle: {
    fontWeight: "bold",
    margin: "auto",
    color: colors.gradient1,
  },
  title: {
    marginLeft: 15,
    lineHeight: 30,
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    borderBottomWidth: 1,
    borderBottomColor: colors.darkGray,
  },
  input: {
    height: 50,
    borderColor: "white",
    borderWidth: 1,
    backgroundColor: "white",
    color: "black",
    width: "85%",
    borderRadius: 25,
    padding: 15,
    marginTop: 20,
  },
  inputm: {
    height: 350,
    borderColor: "white",
    borderWidth: 1,
    backgroundColor: "white",
    color: "black",
    width: "85%",
    borderRadius: 25,
    padding: 15,
    marginTop: 20,
  },
});

export default styles;
