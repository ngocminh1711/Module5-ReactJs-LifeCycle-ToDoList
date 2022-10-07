
const data = {
}


function ToDo({props, onClick, onChange, children}) {

    return (
        <div>
            <h1>{props.h1} </h1>
            <input id='workToDo' onChange={onChange}/>
            <button onClick={onClick}>{props.nameBtn}</button>
            <ol>
                {children.map((child, index) => (
                    <li key={index}>{child.work}</li>
                ) )}
            </ol>
        </div>
    )
}

export default ToDo