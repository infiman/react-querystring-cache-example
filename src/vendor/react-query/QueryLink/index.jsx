import React from 'react'

import { Consumer } from '../QueryContext'

const QueryLink = React.memo(({ to, children }) => (
  <Consumer>
    {queryStore => children({ to: queryStore.resolveQueryString(to) })}
  </Consumer>
))

export default QueryLink
