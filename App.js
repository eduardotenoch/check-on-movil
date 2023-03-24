import React from "react";
import { StyleSheet, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Text, Image } from "react-native-elements";
import { LoginForm } from "./src/components/Auth";

export default function App() {
  return (
    <KeyboardAwareScrollView centerContent={true} style={styles.content}>
      <Image
        source={require("../Check-On-Movil/assets/img/Logo.png")}
        style={styles.image}
      />
      <Text style={styles.title}>Inicia tu sesión</Text>
      <View>
        <LoginForm />
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: "#2b5876",
  },
  image: {
    resizeMode: "contain",
    height: 90,
    width: "100%",
    marginTop: 250,
  },
  title: {
    textAlign: "center",
    color: "#FFFFFF",
    marginTop: 250,
  },
});
