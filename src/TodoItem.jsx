export default function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {

  return (
    <li>
      <input type="checkbox" checked={completed} onChange={e => toggleTodo(id, e.target.checked)} />
      <label>
        {title}
      </label>
      <button onClick={() => deleteTodo(id)} className=" btn btn-danger">Delete</button>
    </li>
  )
}