import { h, Component } from 'preact'
import rootStore, { rehydrate } from '../stores/rootStore'
import Header from './header'
import { Main } from './main'
import { observer, Provider } from 'mobx-preact'

if (module.hot) {
  require('preact/debug')
}

rehydrate(rootStore)

@observer
export class App extends Component {
  render () {
    return (
      <Provider store={rootStore}>
        <section id="app" className="todoapp">
          <Header/>
          <Main/>
        </section>
      </Provider>
    )
  }
}
