import React from 'react'
import {
  Avatar,
  Button,
  CssBaseline,
  Box,
  Paper,
  Link,
  Grid,
  TextField,
  Typography,
  Alert,
  MenuItem
} from "@mui/material";
import { create } from './db';
function Form() {
  const genders = [
    {
      value: 'MALE',
      label: 'Male',
    },
    {
      value: 'FEMALE',
      label: 'Female',
    }
  ];
  const [gender, setGender] = React.useState('MALE');
  const [firstname, setFname] = React.useState('');
  const [lastname, setLname] = React.useState('');
  const [age, setAge] = React.useState(0);

  const handleChange = (event) => {
    setGender(event.target.value);
  };
  const handleSubmit=(e)=>{
    e.preventDefault()   
create({gender,firstname,lastname,age}).then(res=>{console.log(res)})
  }
    return (
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
       
          <div>
         
            <TextField
              id="firstname"
              label="First Name"
           
              onChange={(e) => setFname(e.target.value)}
              variant="filled"
            />
                <TextField
              id="lastname"
              label="Last Name"
           
              onChange={(e) => setLname(e.target.value)}
              variant="filled"
            />
            <TextField
          id="outlined-number"
          label="Age"
          type="number"
          onChange={(e) => setAge(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
              <TextField
          id="outlined-select-currency"
          select
          label="Gender"
          value={gender}
          onChange={handleChange}
          
        >
          {genders.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <div>
        <Button
                type="submit"
          
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
            Add student
              </Button>

        </div>
    
          </div>
      
        </Box>
      );
}

export default Form