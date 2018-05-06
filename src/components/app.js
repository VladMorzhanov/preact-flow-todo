import RootStore from '../stores/rootStore'

import Header from './header'
import { List } from './list'

if (module.hot) {
  require('preact/debug')
}

const rootStore = RootStore.create({
  search: 'some search'
})

export const App = () => (
  <div id="app">
    <Header/>
    <List rootStore={rootStore}/>
  </div>
)
