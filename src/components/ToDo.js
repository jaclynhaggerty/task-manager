const ToDo = ({todo, handleToggle}) => {

    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }

    return (
        <div id={todo.id} task={todo.task}  onClick={handleClick} className={todo.completed ? "todo strike" : "todo"}>
            {todo.task}
        </div>
    );
};

export default ToDo;