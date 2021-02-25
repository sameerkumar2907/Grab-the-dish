import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Cuisines from "./Cuisines"
export default function ComboBox(props) {
  const [text, setText] = useState()
  function handleChange(e){
    setText(e.target.value)
    props.getCuisine(e.target.value)
  }

  return (
    <div>
    <Autocomplete
      id="combo-box-demo"
      onChange={(event, value) => {
        if(value==null)
          {
            setText("")
            props.getCuisine("")
          }
        else
          {
            setText(value.title)
            props.getCuisine(value.title)
          }
      }}
      options={Cuisines}
      getOptionLabel={(option) => option.title}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} onChange={handleChange} label="Search for cuisine" variant="outlined" />}
    />
    </div>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
