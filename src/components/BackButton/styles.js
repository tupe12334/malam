import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  btnContainer: {
    flex: 1,
    alignItems: 'center',
    borderRadius: 180,
    paddingHorizontal: 9,
    justifyContent: 'center',
    margin: 9,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 3
  },
  btnIcon: {
    height: 17,
    width: 17
  }
});

export default styles;
