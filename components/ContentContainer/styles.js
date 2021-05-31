import { StyleSheet } from "react-native";
import Constants from "expo-constants";
const styles = StyleSheet.create({

  linearGradient: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  scrollContainer: {
    flex: 1,
    width: "100%",
    marginTop: Constants.statusBarHeight + 55,
    marginBottom: 135,
  },
});

export default styles;
