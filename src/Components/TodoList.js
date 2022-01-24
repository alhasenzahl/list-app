import { useState } from 'react';
// import Item from './Item';
import { Grid, Button, List, Container, TextField, FormGroup, ListItem, FormControlLabel, Checkbox } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';

function TodoList() {
    const [item, setItem] = useState({
        item: '',
        checked: false
    });
    const [list, setList] = useState([{}]);

    const handleItemChange = (e) => {
        setItem({...item, item: e.target.value});
    }

    const updateCheckedState = (el) => {
        list.forEach((item) => {
            if (item.item === el.item) { // Check to see that you have the right item in list
                if (item.checked) {
            //         // Do a setList() here to set that item's checked key to true.
            //         // Check status of item's checkbox state, if it's checked then make item state true inside list state
            //         console.log('checked');                    console.log('checked');
                } else {
                    console.log('not checked');
                }// if it's not checked then make item state false inside list state
            //       // Do a setList() here to set that item's checked key to false.
            }
        });
    }

    const handleListAddition = () => {
        const updateList = [
            ...list, {
                id: list.length + 1,
                item: item.item,
                checked: item.checked
            }
        ];
        setList(updateList);
    }

    const addItem = () => {
        if (item.item.length) {
            if (! findDuplicates()) {
                setList([...list, item]);
                handleListAddition();

                setItem({...item,
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

    return (
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
                >
                    <DeleteIcon></DeleteIcon>
                </Button>
            </Container>
            <Container>
                <List>
                    {list.map((item) =>
                        // <Item key={item.id} item={item.item} checked={item.checked} changeCheckedState={changeCheckedState}></Item>
                        <ListItem key={item.id}>
                            <FormControlLabel
                                control={<Checkbox />}
                                label={item.item}
                                checked={item.checked}
                                onChange={(el) => updateCheckedState(item)}
                            />
                            {JSON.stringify(item)}
                        </ListItem>
                    )}
                </List>
            </Container>
        </Grid>
    );
}

export default TodoList;