import { inject, observer } from 'mobx-preact'
import { h, Component } from 'preact'

@inject('store')
@observer
export default class Header extends Component {
  constructor ({store}) {
    super()
    this.state = { text: '' }
  }

  handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      const value = e.target.value
      this.props.store.addTodo({
        id: Date.now(),
        title: value,
        done: false
      })
      this.setState({text: ''})
    }
  }

  render ({ store }) {
    return (
      <header>
        <h1>todos</h1>
        <input className="new-todo"
          value={this.state.text}
          onKeyPress={e => this.handleKeyPress(e)}
          placeholder="What needs to be done?"/>
      </header>
    )
  }
}
