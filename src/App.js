import './App.css';
import { useState } from 'react';
import { Grid, Button } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import TodoList from './Components/TodoList';

function App() {
    const [todos, setTodos] = useState([]);

    const addNewTodoList = () => {
        const newTodo = [
            ...todos, {
                id: todos.length + 1,
                todo: {
                    id: todos.length + 1,
                    item: '',
                    checked: false,
                }
            }
        ];
        setTodos(newTodo);
    }

    // Figure out how to get the app to produce multiple lists with their own independent lists
    // What I have right now works for one list, but I haven't been able to get it to work for 
    // more than one yet...
    // I think that it has something to do with how I am formatting the list data stuff??

    return (
        <div className="App">
            <Grid container xs={12} rowSpacing={1}>
                <Grid container xs={4} direction="row" justifyContent="flex-start" alignItems="flex-start">
                    <Button
                        variant="contained"
                        onClick={addNewTodoList}
                    >
                        <AddCircleIcon></AddCircleIcon>
                    </Button>
                </Grid>
                <Grid container xs={8} direction="row" justifyContent="flex-start" alignItems="flex-start">
                    {todos.length > 0 && todos.map((todo) => 
                        <TodoList
                            key={todo.id}
                            list={todo.todo}
                        ></TodoList>
                    )}
                </Grid>
            </Grid>
        </div>
    );
}

export default App;
