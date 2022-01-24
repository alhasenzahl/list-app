import './App.css';
import { useState, useEffects } from 'react';
import { Grid, Button, List, Container, TextField, FormGroup, ListItem, FormControlLabel, Checkbox } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';

function App() {
    const [item, setItem] = useState('');
    const [list, setList] = useState([]);
 
    const handleItemChange = (e) => {
        setItem(e.target.value);
    }

    const addItem = () => {
        if (item.length) {
            if (! findDuplicates()) {
                setList([...list, item]);
                setItem('');
            } else {
                alert('You have already added this item to your list!');
            }
        } else {
            alert('You cannot add an empty item to the list!');
        }
    }

    const findDuplicates = () => {
        const newList = list.map(el => el.toLowerCase());
        const duplicateItem = newList.includes(item.toLowerCase());

        return duplicateItem ? true : false;
    }

    return (
        <div className="App">
            <Grid container xs={12} rowSpacing={1}>
                <Grid container xs={8} direction="row" justifyContent="flex-start" alignItems="flex-start">
                    <Grid container item xs={6}>
                        <Container>
                            <FormGroup>
                                <TextField
                                    id="item"
                                    label="Item"
                                    variant="filled"
                                    value={item}
                                    onChange={handleItemChange}
                                />
                            </FormGroup>
                            <Button
                                variant="contained"
                                onClick={addItem}
                            >
                                <AddCircleIcon></AddCircleIcon>
                            </Button>
                            <Button
                                variant="contained"
                            >
                                <DeleteIcon></DeleteIcon>
                            </Button>
                        </Container>
                        <Container>
                            {list.map((item) => 
                                <p>{item}</p>
                            )}
                        </Container>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default App;
