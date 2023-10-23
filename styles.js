import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  appTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
    color: 'white',
    fontFamily: 'sans-serif-condensed',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  button: {
    backgroundColor: 'black',
    borderWidth: 3,
    borderColor: 'green',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 10,
    width: 220,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
  footerLinksContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    width: '100%',
  },
  footerImage: {
    width: 70,
    height: 60,
    marginHorizontal: 10,
  },
  input: {
    height: 40,
    borderColor: 'green',
    borderWidth: 1,
    marginBottom: 20,
    color: 'white',
    paddingHorizontal: 10,
    width: '100%',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 20,
    width: 200,
  },
  selectedTrailsContainer: {
    borderWidth: 1,
    color: 'white',
    borderColor: 'white',
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 20,
    width: 200,
    height: 100,
  },

  pickerConditionContainer: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 10,
    width: 100,
    height: 30,
    justifyContent: 'center',
  },
  picker: {
    height: 50,
    width: 300,
    color: 'white',
    backgroundColor: 'black',
  },
  checkBoxContainer: {
    backgroundColor: 'black',
    borderColor: 'black',
  },
  checkBoxText: {
    color: 'white',
  },
  usernameInput: {
    height: 40,
    width: 200,
    color: 'white',
    borderColor: 'white',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
  },
  reportItem: {
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
  },

  reportText: {
    color: 'white',
    fontSize: 16,
    marginBottom: 4,
  },

  urgentText: {
    color: 'red',
    fontSize: 18,
    fontWeight: 'bold',
  },
  generalText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;
