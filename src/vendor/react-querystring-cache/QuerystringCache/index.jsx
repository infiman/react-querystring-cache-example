import React from 'react'
import { withRouter } from 'react-router-dom'
import { createQueryStore } from '@infiman/querystring-cache'

export const QueryContext = React.createContext({})

const resolvePath = (queryStore, { pathname, mutations, hash }) => ({
  pathname,
  search: queryStore.resolveQueryString(pathname, mutations),
  hash,
  state: {
    ...queryStore.createStateObject({
      mutations
    })
  }
})

const QuerystringCache = React.memo(
  ({ options, history, location, children }) => {
    const context = React.useMemo(() => {
      const queryStore = createQueryStore(options)

      return {
        queryStore,
        resolvePath: resolvePath.bind(null, queryStore)
      }
    }, [options])
    const [, setUpdate] = React.useState(location.key)

    React.useEffect(
      () =>
        history.listen(location => {
          context.queryStore.add(location)

          setUpdate(location.key)
        }),
      [context.queryStore, history]
    )

    return (
      <QueryContext.Provider value={{ ...context }}>
        {children}
      </QueryContext.Provider>
    )
  }
)

export default withRouter(QuerystringCache)
