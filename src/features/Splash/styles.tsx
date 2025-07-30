import { Colors } from "@constants/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  page: {
    backgroundColor: Colors.screen.background,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold'
  }
});

export default styles;