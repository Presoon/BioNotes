import { StyleSheet } from 'react-native';
import colors from '../../assets/colors';

const styles = StyleSheet.create({
  chooseButton: {
    width: '75%',
    backgroundColor: colors.gray,
    color: colors.darkGray,
    borderRadius: 20,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  chooseTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: colors.primary,

  },
});

export default styles;
