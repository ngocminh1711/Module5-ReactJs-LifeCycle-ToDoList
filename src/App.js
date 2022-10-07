import logo from './logo.svg';
import './App.css';
import ToDo from "./ToDo/ToDo";
import {useState} from "react";

const props = {
    h1: 'To Do List',
    nameBtn: 'Add'
}
const toDoList = []
const works = {
    work: ''
}



function App() {
    const [work, setWork] = useState(works)

    const handleChange = (e) => {
        let toDoWork = e.target.value
       setWork({work: toDoWork})
    }
    const handleToDo = () => {
        toDoList.push(work)

    }
    console.log(toDoList)
  return (
    <div className="App">
        <ToDo
        props={props}
        onClick={handleToDo}
        onChange={handleChange}
        children={toDoList}
        />
    </div>
  );
}

export default App;
