import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const PokemonListItem = ({ pokemon, handlePokemonPress }) => {
  return (
    <TouchableOpacity onPress={() => handlePokemonPress(pokemon)}>
      <View style={styles.container}>
        <Image
          source={{
            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              pokemon.url.split("/")[6]
            }.png`,
          }}
          style={styles.imageStyle}
        />
        <Text style={styles.text}>{pokemon.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#FFFFFF",
    margin: 5,
    borderRadius: 30,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
  },
  imageStyle: {
    width: 70,
    height: 70,
    flexDirection: "row",
    justifyContent: "space-around",
    marginLeft: 20,
  },
  text: {
    flex: 1,
    fontSize: 16,
    textAlign: "center",
    alignSelf: "center",
  },
});

export default PokemonListItem;
