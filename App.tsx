import { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function App() {
  const [btnPressed, setBtnPressed] = useState(false);

  const handlePress = () => {
    setBtnPressed(true);
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Image source={require("./assets/favicon.png")} />
      <Text>I am playing with a React native app</Text>
      <TouchableOpacity
        onPress={handlePress}
        style={{ backgroundColor: "blue", padding: 20, borderRadius: 10 }}
      />
      {btnPressed && <Text>"I was pressed"</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
