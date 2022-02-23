import {Alert } from "react-native";


// Creando el alert si se compartio o no
export const useShare = () => {
  const createShared = () =>
    setTimeout(() => {
      Alert.alert(
        "Se ha compartido Correctamente!",
        "Shared..!!",
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );
    }, 1000);
  const createShare = () =>
    setTimeout(() => {
      Alert.alert(
        "Ha dejado compartir Correctamente!",
        "Has stopped sharing!!",
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );
  }, 1000);  

  return  {
    createShared,
    createShare
  };
}


