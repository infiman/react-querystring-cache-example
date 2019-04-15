import React from 'react'
import { withRouter } from 'react-router-dom'
import { createQueryStore } from '@infiman/querystring-cache'

export const QueryContext = React.createContext({})

const resolvePath = (
  queryStore,
  { persist, scope, pathname, add, remove }
) => ({
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
})

const QuerystringCache = ({ history, children, options }) => {
  const { queryStore } = React.useContext(QueryContext)
  const [, setState] = React.useState()
  React.useEffect(
    () =>
      history.listen(location => {
        ;(queryStore || createQueryStore(options)).add(location)

        setState()
      }),
    []
  )

  return (
    <QueryContext.Provider
      value={{
        resolvePath,
        queryStore: queryStore || createQueryStore(options)
      }}
    >
      {children}
    </QueryContext.Provider>
  )
}

export default withRouter(QuerystringCache)
