import React from 'react'

import { Provider, Consumer } from '../QueryContext'

const QueryRoute = React.memo(({ path, location, children }) => (
  <Consumer>
    {store => <Provider value={store.add(path, location)}>{children}</Provider>}
  </Consumer>
))

QueryRoute.defaultProps = {
  location: {},
  match: {}
}

export default QueryRoute
