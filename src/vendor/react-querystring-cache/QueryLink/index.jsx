import React from 'react'

import { QueryContext } from '../QuerystringCache'

const QueryLink = ({
  persist = false,
  scope,
  pathname,
  children,
  add,
  remove
}) => {
  const { queryStore, resolvePath } = React.useContext(QueryContext)

  return children({
    path: resolvePath(queryStore, { persist, scope, pathname, add, remove })
  })
}

export default QueryLink
