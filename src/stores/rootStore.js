import _ from 'lodash'
import {observable, action, computed} from 'mobx'

export const hydrate = (todos) => {
  window.localStorage.setItem('todos', JSON.stringify(todos))
}

export const rehydrate = (store) => {
  const rehydrated = window.localStorage.getItem('todos')
  if (rehydrated) {
    store.todos = JSON.parse(rehydrated)
  }
}

export default {
  @observable todos: [],
  @computed get isAllDone () {
    const vals = _.map(this.todos, todo => todo.done)
    return _.reduce(vals, (res, n) => res && n)
  },
  @action deleteTodo (id) {
    _.remove(this.todos, { id: id })
    hydrate(this.todos)
  },
  @action addTodo (todo) {
    this.todos.push(todo)
    hydrate(this.todos)
  },
  @action toggleDone (id) {
    const todo = _.find(this.todos, o => o.id === id)
    todo.done = !todo.done
    hydrate(this.todos)
  },
  @action setDone (id) {
    const todo = _.find(this.todos, o => o.id === id)
    todo.done = true
    hydrate(this.todos)
  },
  @action setUndone (id) {
    const todo = _.find(this.todos, o => o.id === id)
    todo.done = false
    hydrate(this.todos)
  },
  @action toggleAll () {
    if (this.isAllDone) {
      _.each(this.todos, ({ id }) => this.setUndone(id))
    } else {
      _.each(this.todos, ({ id }) => this.setDone(id))
    }
    console.log(this.todos)
  }
}
