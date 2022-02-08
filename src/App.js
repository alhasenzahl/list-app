import './App.css';
import { useState } from 'react';
import { Grid, Button, List, Container, TextField, FormGroup, ListItem, FormControlLabel, Checkbox } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';

function App() {
    const [item, setItem] = useState({
        item: '',
        checked: false
    });
    const [list, setList] = useState([]);
 
    const handleItemChange = (e) => {
        setItem({...item, item: e.target.value});
    }

    const handleListChange = () => {
        const updateList = [
            ...list, {
                id: list.length + 1,
                item: item.item,
                checked: false
            }
        ];
        setList(updateList);
    }

    const handleCheckboxChange = (todo) => {
        const updatedCheckboxes = list.map((el) => 
            todo.item === el.item ? {
                ...el, checked: ! el.checked
            } : el
        );
        setList(updatedCheckboxes);
    }

    const addItem = () => {
        if (item.item.length) {
            if (! findDuplicates()) {
                handleListChange();
                setItem({
                    item: '',
                    checked: false
                });
            } else {
                alert('You have already added this item to your list!');
            }
        } else {
            alert('You cannot add an empty item to the list!');
        }
    }

    const findDuplicates = () => {
        const newList = list.map(el => el.item.toLowerCase());
        const duplicateItem = newList.includes(item.item.toLowerCase());

        return duplicateItem ? true : false;
    }

    const filterOutCheckedItems = () => {
        const filteredList = list.filter((el) => ! el.checked); // Produces unchecked items to make new list with

        if (filteredList.length === list.length) {
            alert('You have no completed items to delete!');
        } else {
            setList(filteredList);
        }
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
                                    value={item.item}
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
                                onClick={filterOutCheckedItems}
                            >
                                <DeleteIcon></DeleteIcon>
                            </Button>
                        </Container>
                        <Container>
                            <List>
                                {list.map((item) => 
                                    <ListItem key={item.item}>
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label={item.item}
                                            checked={item.checked}
                                            onChange={() => handleCheckboxChange(item)}
                                        />
                                    </ListItem>
                                )}
                            </List>
                        </Container>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default App;
