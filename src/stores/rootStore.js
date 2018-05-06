import { types } from 'mobx-state-tree'

const RootStore = types.model('RootStore', {
  search: types.string
}).actions(self => ({
  changeSearch (v) {
    self.search = v
  }
})).views(self => ({
  get justSearch () {
    return self.search
  }
}))

export default RootStore
