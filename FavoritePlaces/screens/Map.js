import { useCallback, useLayoutEffect, useState } from "react";
import { Alert, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import IconButton from "../components/ui/IconButton";

export default function Map({ navigation }) {
  const [selectedLocation, setSelectedLocation] = useState();

  const region = {
    latitude: 37.78,
    longitude: -122.43,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  function selectLocationHandler(event) {
    const lat = event.nativeEvent.coordinate.latitude;
    // console.log("------------------- LATITUDE");
    // console.log(event.nativeEvent.coordinate.latitude);
    // console.log(lat);

    const lng = event.nativeEvent.coordinate.longitude;
    // console.log("------------------- LONGITUDE");
    // console.log(event.nativeEvent.coordinate.longitude);
    // console.log(lng);

    setSelectedLocation({ lat: lat, lng: lng });
    // console.log("-------------------");
    // console.log(selectedLocation);
    // console.log(selectedLocation.lat);
    // console.log(selectedLocation.lng);
  }

  const savePickedLocationHandler = useCallback(() => {
    if (!selectedLocation) {
      Alert.alert(
        "No location picked!",
        "You have to pick a location (by tapping on the map) first!"
      );
      return;
    }

    // console.log("-------After ALL selectedLocation------------");
    // console.log(selectedLocation);
    // console.log(selectedLocation.lat);
    // console.log(selectedLocation.lng);
    // navigation.goBack(); Also that's ok
    navigation.navigate("AddPlace", {
      // pickedLocation: selectedLocation, That is a shortcut
      pickedLat: selectedLocation.lat,
      pickedLng: selectedLocation.lng,
    });
  }, [navigation, selectedLocation]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: ({ tintColor }) => (
        <IconButton
          icon="save"
          size={24}
          color={tintColor}
          onPress={savePickedLocationHandler}
        />
      ),
    });
  }, [navigation, savePickedLocationHandler]);

  return (
    <MapView
      style={styles.map}
      initialRegion={region}
      onPress={selectLocationHandler}
    >
      {selectedLocation && (
        <Marker
          title="Picked Location"
          coordinate={{
            latitude: selectedLocation.lat,
            longitude: selectedLocation.lng,
          }}
        />
      )}
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
