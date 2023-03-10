import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const PokemonImage = ({ pokemonData }) => {
  return (
    <View style={styles.imgContainer}>
      <View style={{ marginTop: 20, alignItems: "center" }}>
        <Text>Normal</Text>
        <Image
          source={{
            uri: pokemonData.sprites.other["official-artwork"].front_default,
          }}
          style={{ width: 200, height: 200 }}
        />
      </View>
      <View style={{ marginTop: 20, alignItems: "center" }}>
        <Text>Shiny</Text>
        <Image
          source={{
            uri: pokemonData.sprites.other["official-artwork"].front_shiny,
          }}
          style={{ width: 200, height: 200 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imgContainer: {
    flexDirection: "row",
    marginTop: 30,
    
    borderRadius: 30,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
  },
});

export default PokemonImage;