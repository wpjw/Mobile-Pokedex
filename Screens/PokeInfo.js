import React, { useState, useEffect, useMemo } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView
} from "react-native";
import axios from "axios";
import { LinearGradient } from "expo-linear-gradient";
import PokemonImage from "../Components/PokemonImage";
import PokemonMoves from "../Components/PokemonMoves";
import PokemonStats from "../Components/PokemonStats";

const typeColors = {
  grass: '#439938',
  poison: '#9355cb',
  psychic: '#e86d8c',
  steel: '#6fa9bf',
  rock: '#a9a581',
  normal: '#838185',
  fairy: '#e28de1',
  ice: '#4cc6ce',
  dark: '#4f4647',
  ground: '#a6733c',
  dragon: '#586fba',
  water: '#309be3',
  ghost: '#71456f',
  electric: '#e1bd29',
  flying: '#74abd1',
  bug: '#9fa026',
  fighting: '#e4911e',
  fire: '#e6613e'



  // add more types and colors as needed
};

const PokeInfoScreen = ({ route }) => {
  const [pokemonData, setPokemonData] = useState(null);
  const movesList = useMemo(() => {
    return pokemonData
      ? pokemonData.moves.map((move) => {
          return {
            name: move.move.name,
            level: move.version_group_details[0].level_learned_at,
            method: move.version_group_details[0].move_learn_method.name,
          };
        })
      : [];
  }, [pokemonData]);

  useEffect(() => {
    const { pokemon } = route.params;
    axios
      .get(pokemon.url)
      .then((response) => {
        setPokemonData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [route.params.pokemon]);

  const colors = useMemo(() => {
    if (pokemonData && pokemonData.types) {
      const types = pokemonData.types;
      const primaryColor = typeColors[types[0].type.name];
      const secondaryColor = types.length > 1 ? typeColors[types[1].type.name] : '#FFFFFF';
      return [primaryColor, secondaryColor];
    }
    return ['#FF0000', '#00FFFF']; // default colors
  }, [pokemonData]);

  return (
    <LinearGradient style={{flex: 1,}} colors={colors}>
      <SafeAreaView>
      <View style={styles.flex}>
        {pokemonData && (
          <View>
            <PokemonImage pokemonData={pokemonData} />
            <PokemonStats pokemonData={pokemonData} />
            <PokemonMoves pokemonData={pokemonData}/>
          </View>
        )}
      </View>
      </SafeAreaView>
    </LinearGradient>
  );
};



const styles = StyleSheet.create({
  flex: {
    flexDirection: "row",
    justifyContent: "space-around",

    backgroundColor: "transparent",
    margin: 5,
    borderRadius: 30,
  },
  imgContainer: {
    flexDirection: "row",
    marginTop: 90,
    backgroundColor: "white",
    borderRadius: 30,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
  },
});
export default PokeInfoScreen;
