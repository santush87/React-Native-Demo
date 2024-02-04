import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import OutlinedButton from "../components/ui/OutlinedButton";
import { Colors } from "../constants/colors";
import { useEffect } from "react";

export default function PlaceDetails({ route }) {
  function showOnMapHandler() {}

  const selectedPlaceId = route.params.placeId;

  useEffect(() => {
    // use selectedPlaceId to fetch data for a single place
  }, [selectedPlaceId]);

  return (
    <ScrollView>
      <Image style={styles.image} />
      <View style={styles.locationContainer}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>Address</Text>
        </View>
        <OutlinedButton icon="map" onPress={showOnMapHandler}>
          View on Map
        </OutlinedButton>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    height: "35%",
    minHeight: 300,
    width: "100%",
  },
  locationContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  addressContainer: {
    padding: 20,
  },
  address: {
    color: Colors.primary500,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});
