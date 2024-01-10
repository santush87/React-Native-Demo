import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton({ children, onPressHandler }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPressHandler}
        // Only for Android - an effect!
        android_ripple={{ color: "640233" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    // Only for Android
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  // Only for iOS
  pressed: {
    opacity: 0.75,
  },
});

export default PrimaryButton;
