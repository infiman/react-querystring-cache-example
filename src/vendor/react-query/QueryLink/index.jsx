import React from 'react'

import { QueryContext } from '../Query'

const QueryLink = ({ pathname, children, add, remove }) => {
  const { queryStore } = React.useContext(QueryContext)

  return children({
    path: {
      state: {
        __query__: {}
      },
      pathname,
      search: queryStore.resolveQueryString(pathname, {
        add,
        remove
      })
    }
  })
}

export default QueryLink
