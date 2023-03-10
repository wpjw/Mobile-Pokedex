import React, { useMemo } from "react";
import { View, Text, FlatList, StyleSheet, ScrollView } from "react-native";

const PokemonMoves = ({ pokemonData }) => {
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

  const eggMoves = useMemo(() => movesList.filter((move) => move.method === "egg"), [movesList]);
  const machineMoves = useMemo(() => movesList.filter((move) => move.method === "machine"), [movesList]);
  const levelUpMoves = movesList
    .filter((move) => move.method === "level-up")
    .sort((a, b) => a.level - b.level);

  return (
    <>
    <View style={styles.container}>
      <Text>Level-up Moves:</Text>
      <FlatList
        style={{ height: "18%" }}
        data={levelUpMoves}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ flexDirection: "row", margin: 5 }}>
            <Text>Move: {item.name} </Text>
            <Text>Level available: {item.level} </Text>
          </View>
        )}
      />
      </View>
      <View style={styles.container}>
      <Text>Machine Moves:</Text>
      <FlatList
        style={{ height: "16%"}}
        data={machineMoves}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ flexDirection: "row", margin: 5 }}>
            <Text>Move: {item.name} </Text>
        
          </View>
        )}
      />
      </View>
      <View style={styles.container}>
      <Text>Egg Moves:</Text>
      <FlatList
        style={{ height: "13%" }}
        data={eggMoves}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ flexDirection: "row", margin: 5 }}>
            <Text>Move: {item.name} </Text>
          </View>
        )}
      />
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
    }
});

export default PokemonMoves;
