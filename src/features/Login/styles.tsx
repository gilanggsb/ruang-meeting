import { Colors } from "@constants/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  page: {
    flex: 1,
    // justifyContent: 'center',
    alignContent: 'space-between'
  },
  container: {
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  loginContainer: {
    alignItems: 'center',
    backgroundColor: Colors.dark.neutral40,
    marginHorizontal: 40,
    borderRadius: 10,
    padding: 14,
  },
  title: {
    fontSize: 24,
    lineHeight: 28,
    color: '#000',
    maxWidth: '85%',
    fontWeight: 'bold',
    textAlign: 'left'
  },
  input: {
    height: 40,
    borderColor: 'gray',
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  label: {
    marginBottom: 8,
    fontSize: 16,
  },
  errorText: {
    marginLeft: 4,
    color: Colors.danger.base,
  },
  gapContainer: {
    gap: 4,
    width: '100%'
  },
  button: {
    width: '50%',
  },
  passwordContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#000',
    paddingBottom: 10,
  },
  inputStyle: {
    flex: 1,
  },
});

export default styles;