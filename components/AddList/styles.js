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
  buttonTitle: {
    fontWeight: "bold",
    margin: "auto",
    color: colors.gradient1
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
    color: "white",
    width: "70%",
    marginLeft: 45,
    marginTop: 30,
    lineHeight: 30,
    fontSize: 20,
    fontWeight: "bold",
  },
  taskListItem: {
    width: "80%",
    padding: 10,
    backgroundColor: colors.gray,
    borderRadius: 5,
    margin: 5,
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
    height: 50,
    borderColor: "white",
    borderWidth: 1,
    backgroundColor: "white",
    color: "black",
    width: "80%",
    borderRadius: 25,
    padding: 15,
    marginTop: 20,
  },
});

export default styles;
