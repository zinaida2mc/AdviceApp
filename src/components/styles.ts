import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#fffde7',
  },
  root: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 50,
  },
  advice: {
    textShadowColor: '#d50000',
    textShadowOffset: {width: 5, height: 5},
    textShadowRadius: 5,
    color: '#d50000',
    borderRadius: 20,
    marginVertical: 30,
  },
  buttonContainer: {
    borderRadius: 25,
    overflow: 'hidden',
  },
  button: {
    borderRadius: 25,
    height: 50,
    paddingHorizontal: 25,
    backgroundColor: '#000000',
  },
  buttonTitle: {
    color: '#ffffff',
    fontSize: 22,
  },
});
