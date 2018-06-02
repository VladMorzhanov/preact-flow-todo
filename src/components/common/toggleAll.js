import { inject, observer } from 'mobx-preact'

export const ToggleAll = inject('store')(observer(({ store }) => (
  <div style={{display: 'inline'}}>
    <input checked={store.isAllDone}
      id="toggle-all"
      onClick={() => store.toggleAll()}
      className="toggle-all"
      type="checkbox"/>
    <label htmlFor="toggle-all">Mark all as complete</label>
  </div>
)))
