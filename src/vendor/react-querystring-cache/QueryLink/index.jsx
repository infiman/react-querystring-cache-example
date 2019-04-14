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
  const { queryStore } = React.useContext(QueryContext)

  return children({
    path: {
      state: {
        ...queryStore.createStateObject({
          persist,
          scope: scope || pathname,
          mutation: { add, remove }
        })
      },
      pathname,
      search: queryStore.resolveQueryString(scope || pathname, {
        add,
        remove
      })
    }
  })
}

export default QueryLink
