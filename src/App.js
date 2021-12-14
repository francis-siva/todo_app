import { useState } from 'react';
import './App.css';

function App() {
    const [newtask, set_newtask] = useState('');
    
    const add_task = (new_task) => {
        set_newtask(new_task);
    }
    const [todolist, set_todolist] = useState([
        { name: "faire les courses", done: false },
        { name: "faire execices react", done: false }
    ]);
    return (
        <div className="App">
            <header className="App-header">
                <h1>ToDo-List</h1>
            </header>
            <section>
                <div className='task'>mon message</div>
                <div className='task done'>mon message</div>
                <div className='more_task'>
                    <input type="text" name="new_task"
                        placeholder="saisir une nouvelle tâche"
                        value={newtask}
                        onChange={(e) => {
                                console.log(e.target.value);
                                set_newtask(e.target.value);
                                
                                console.warn("newtask-> " + newtask);                            

                            }
                        }

                    />
                    <button
                        onClick={() => {
                            console.warn("Click works");
                            
                            const todolistCopy = [...todolist];
                            
                            console.warn(todolistCopy);
                            todolistCopy.push(newtask);
                            console.warn(todolistCopy);
                            console.log(todolistCopy.length);

                            set_todolist(todolistCopy)
                        }}
                    >ADD TO LIST</button>
                </div>
                
            </section>
        </div>
    );
}

export default App;
