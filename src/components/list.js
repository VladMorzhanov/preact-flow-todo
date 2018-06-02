import { Item } from './item'
import { inject, observer } from 'mobx-preact'

export const List = inject('store')(observer(({ store }) => (
  <ul className="todo-list">
    {store.todos.map(item => (
      <Item store={store} {...item} />
    ))}
  </ul>
)))
