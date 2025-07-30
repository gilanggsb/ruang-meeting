import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },
  containerImage: {
    paddingBottom: 10,
  },
  image: {
    width: 400,
    height: 450,
    resizeMode: 'contain',
  },
  button: {
    position: 'absolute',
    bottom: 40,
    left: 0,
    right: 0,
    marginHorizontal: '20%'
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    lineHeight: 28,
    color: '#000',
    maxWidth: '85%',
    fontWeight: 'bold',
    textAlign: 'left'
  },
});

export default styles;