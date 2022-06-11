import logo from './logo.svg';
import './App.css';
import { Divider } from '@mui/material';
import Form from '../src/Form';
import Table from '../src/Table';
import Header from './Header';
function App() {
  return (
    <div className="App">
  

<div >
<Header/>
  
</div>

  <Divider/>
 <Form/>
 <Divider/>
 
   

  
<Table/>
        
    
    </div>
  );
}

export default App;
