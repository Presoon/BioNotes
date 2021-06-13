import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 50,
    left: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 45,
    zIndex: 100,
    paddingHorizontal: 20,
  },
  appTitle: {
    color: 'white',
    fontSize: 34,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },

});

export default styles;
