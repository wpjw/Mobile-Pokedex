import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet, SafeAreaView } from "react-native";
import axios from "axios";
import { LinearGradient } from "expo-linear-gradient";
import SearchBar from "../Components/SearchBar";
import PokemonListItem from "../Components/PokemonListItem";

const PokedexScreen = ({ navigation }) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=1010")
      .then((response) => {
        setPokemonList(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handlePokemonPress = (pokemon) => {
    
    navigation.navigate("PokeInfo", { pokemon: pokemon });
   
  };

  const filteredPokemonList = pokemonList.filter((pokemon) => {
    return (
      pokemon.name.toLowerCase().includes(searchText.toLowerCase()) ||
      pokemon.url.includes(searchText)
    );
  });

  return (
    <LinearGradient colors={["#FF0000", "#00FFFF"]} style={{ height: "100%" }}>
      <SafeAreaView>
        <View style={styles.shadows}>
          <SearchBar searchText={searchText} setSearchText={setSearchText} />
        </View>
        <FlatList
          data={filteredPokemonList}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <PokemonListItem pokemon={item} handlePokemonPress={handlePokemonPress} />
          )}
        />
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  shadows: {
    flexDirection: "row",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
  },
});

export default PokedexScreen;
