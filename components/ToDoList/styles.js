import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import colors from '../../assets/colors.js';

const styles = StyleSheet.create({
  listContainer: {
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
    color: colors.gradient1,
  },
  listCover: {
    width: "80%",
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
  noteButton: {
    width: "40%",
    marginHorizontal: 15,
    marginVertical: 15,
    borderRadius: 15,
    backgroundColor: colors.gray,
    padding: 20,
  },
  taskItem: {
    fontWeight: "bold",
    marginHorizontal: 20,
    marginVertical: 7,
    fontSize: 18,
    color: "black",
  },
});

export default styles;
