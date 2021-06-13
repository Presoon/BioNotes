import { StyleSheet } from 'react-native';
import colors from '../../assets/colors.js';

const styles = StyleSheet.create({
  notesContainer: {
    display: "flex",
    width: "100%",
    zIndex: 200,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },

  noteCover: {
    width: "80%",
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
  noteButton: {
    width: "40%",
    marginHorizontal: 15,
    marginVertical: 15,

    borderRadius: 15,
    backgroundColor: colors.gray,
    padding: 20,
    
  },
});

export default styles;
