import { View, Text, StyleSheet, Dimensions } from "react-native";
import COLORS from "../../constants/colors";

export default function GuessLogItem({ roundNumber, guess }) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
    </View>
  );
}
const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  listItem: {
    borderColor: COLORS.primary800,
    borderWidth: 1,
    borderRadius: 40,
    padding: deviceWidth < 380 ? 8 : 12,
    marginVertical: deviceWidth < 380 ? 6 : 8,
    backgroundColor: COLORS.accent500,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    // Shadow just for android
    elevation: 4,
    // Shadow just for iOS
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  itemText: {
    fontFamily: "open-sans",
  },
});
