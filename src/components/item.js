import classnames from 'classnames'

export const Item = ({ store, done, id, title }) => (
  <li className={classnames({ 'completed': done })}>
    <div data-id={id} className="view">
      <input checked={done} onChange={() => store.toggleDone(id)} className="toggle" type="checkbox"/>
      <label>{title}</label>
      <button onClick={() => store.deleteTodo(id)} className="destroy"></button>
    </div>
    <input className="edit"/>
  </li>
)
