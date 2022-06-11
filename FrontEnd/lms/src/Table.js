import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { flush, get } from './db';
import {useState,useEffect}from 'react'
import {
    Avatar,
    Button,
    CssBaseline,
    Box,
    Link,
    Grid,
    TextField,
    Typography,
    Alert,
    MenuItem
  } from "@mui/material";
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));


export default function BasicTable() {
const [rows, setrows] = useState([])
    useEffect(() => {
    get().then(res=>setrows(res.data))
 
   
    },[rows])
  const  handledelete=(id,e)=>{
    e.preventDefault()   
flush(id).then(res=>console.log(res.data))
  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 600 }}  aria-label="customized table">
        <TableHead>
          <TableRow >
          
            <StyledTableCell align="right">First Name</StyledTableCell>
            <StyledTableCell align="right">Last Name</StyledTableCell>
            <StyledTableCell align="right">Gender</StyledTableCell>
            <StyledTableCell align="right">Age</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
          
              <TableCell align="right">{row.firstname}</TableCell>
              <TableCell align="right">{row.lastname}</TableCell>
              <TableCell align="right">{row.gender}</TableCell>
              <TableCell align="right">{row.age}</TableCell>
              <Button
        
                
      onClick={(e) => handledelete(row.id, e)}
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Delete
              </Button>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
