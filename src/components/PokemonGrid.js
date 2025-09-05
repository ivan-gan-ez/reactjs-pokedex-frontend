import { Box, Typography } from "@mui/material";
import React from "react";

function PokemonGrid(props) {
  const { pokemons } = props;
  return (
    <div className="pokemon-grid">
      {/* 
                INSTRUCTION: 
                if pokemons data is available, display the pokemons in a 3-columns grid. 
                You may use the css class "pokemon-card" to style each pokemon card.
                if not, display a "No pokemons found." message 
            */}
      {pokemons.length !== 0 ? (
        pokemons.map((pokemon) => (
          <Box className="pokemon-card">
            <Typography variant="h5" sx={{ mb: 1 }} fontWeight={600}>
              {pokemon.name}
            </Typography>
            <Typography>Type: {pokemon.type}</Typography>
            <Typography>Level: {pokemon.level}</Typography>
          </Box>
        ))
      ) : (
        <Typography variant="h5">No Pokemons found.</Typography>
      )}
    </div>
  );
}

export default PokemonGrid;
