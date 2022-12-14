const Todo = ({ todo, deleteTodo, updateTodo }) => {
    const { title, description, state, priority, id } = todo;

    return (
        <li className="list-group-item">
            <div className="d-flex justify-content-between align-items-start">
                <div>
                    <h5
                        className={`${state && "text-decoration-line-through"}`}
                    >
                        {title}
                    </h5>
                    <p className={`${state && "text-decoration-line-through"}`}>
                        {description}
                    </p>
                    <div className="d-flex gap-2">
                        <button
                            onClick={() => deleteTodo(id)}
                            className="btn btn-sm btn-danger"
                        >
                            Eliminar
                        </button>
                        <button
                            onClick={() => updateTodo(id)}
                            className="btn btn-sm btn-warning"
                        >
                            Actualizar
                        </button>
                    </div>
                </div>
                <span className="badge text-bg-primary">
                    {priority && "Prioritario"}
                </span>
            </div>
        </li>
    );
};

export default Todo;
