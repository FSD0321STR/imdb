import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function Search() {
  let value = "";
  const search = () => 
  {
    console.log(value);
    if(value == "" || value == " ") alert('error, empty search input')
  }
  const handleChange = (event) => { value = event.target.innerText };

  return (
      <div class="search">
        <Autocomplete
            id="combo-box-demo"
            options={top100Films}
            getOptionLabel={(option) => option.title}
            style={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Search..." variant="outlined" />}
            onChange={handleChange}
            />
            <Button variant="contained" color="primary"  onClick={search}> Search</Button>
    </div> 
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
    { title: 'Mobiles' },
    { title: 'Portatiles' },
    { title: 'Sobremesas' },
    { title: 'Tablets' },
    { title: 'Drones' },
    { title: 'Accesorioss' },
    { title: 'Tech' }

]