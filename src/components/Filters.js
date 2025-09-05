import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import React from "react";

function Filters(props) {
  const { search, type, types, onSearchChange, onTypeChange } = props;
  return (
    <div className="filters">
      {/* INSTRUCTION: Add a text input for searching by name */}
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      ></TextField>

      {/* INSTRUCTION: Add a select field for filtering by type */}
      <FormControl sx={{ minWidth: "150px" }}>
        <InputLabel id="demo-simple-select-label">Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={type}
          label="Type"
          onChange={(e) => onTypeChange(e.target.value)}
        >
          <MenuItem value={"All"}>All Types</MenuItem>
          {types.map((type) => (
            <MenuItem key={type} value={type}>
              {type}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default Filters;
