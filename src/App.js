import './App.css';
// import { useState } from 'react';
import { Grid } from '@mui/material';
// import AddCircleIcon from '@mui/icons-material/AddCircle';
// import DeleteIcon from '@mui/icons-material/Delete';
import TodoList from './Components/TodoList';

function App() {
    return (
        <div className="App">
            <Grid container xs={12} rowSpacing={1}>
                <Grid container xs={8} direction="row" justifyContent="flex-start" alignItems="flex-start">
                    <TodoList/>
                </Grid>
            </Grid>
        </div>
    );
}

export default App;
