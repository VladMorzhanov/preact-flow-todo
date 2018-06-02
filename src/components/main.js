import { ToggleAll } from './common/toggleAll'
import { List } from './list'
import {inject, observer} from 'mobx-preact'

export const Main = inject('store')(observer(({ store }) => (
  <div>
    <ToggleAll/>
    <List/>
  </div>
)))
