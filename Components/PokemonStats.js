import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PokemonStats = ({ pokemonData }) => {
  return (
    <>
    <View style={styles.container}>
    <Text>{[`#${pokemonData.id} `, pokemonData.name]}</Text>
            <Text>
              Type: {pokemonData.types.map((type) => type.type.name).join(", ")}
            </Text>
            <Text>
              Abilities:{" "}
              {pokemonData.abilities
                .map((type) => type.ability.name)
                .join(", ")}
            </Text>
            </View>
            <View style={styles.container}>
    <Text>
      HP: {pokemonData.stats[0].base_stat} </Text>
      <Text>Attack: {pokemonData.stats[1].base_stat} Defense: {pokemonData.stats[2].base_stat}</Text>
      <Text>
      Special Attack: {pokemonData.stats[3].base_stat} Special Defense: {pokemonData.stats[4].base_stat}
      </Text><Text>
      Speed: {pokemonData.stats[5].base_stat}
    </Text>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        margin: 1,
        backgroundColor: '#f3f5d099',
        borderRadius: 30,
        
    },
   
});

export default PokemonStats;