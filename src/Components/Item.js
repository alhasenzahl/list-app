// import { useState } from 'react';
import { ListItem, FormControlLabel, Checkbox } from '@mui/material';

function Item(props) {
    const handleCheckboxChange = (e) => {
        
        
        // props.list.map((item) => {
        //     if (item.item === el.item) { // Check to see that you have the right item in list
        //         console.log(item.item);
        //         if (! isChecked) {
        //             // Do a setList() here to set that item's checked key to true.
        //             // Check status of item's checkbox state, if it's checked then make item state true inside list state
        //             console.log('checked');
        //         } // if it's not checked then make item state false inside list state
        //           // Do a setList() here to set that item's checked key to false.
        //     }
        // });
        // props.changeCheckedState(el, isChecked);
        // Maybe the change in state needs to be added to the list
        // instead of adding it to the item, since the item state
        // is attached to the input and not the the item inside the list??

        // Perhaps this logic needs to go in a function in the TodoList component
        // and then get passed down and used here??
    }

    return (
        <ListItem>
            <FormControlLabel
                control={<Checkbox />}
                label={props.item.item}
                checked={props.item.checked}
                onChange={(e) => handleCheckboxChange(e)}
            />
        </ListItem>
    );
}

export default Item;