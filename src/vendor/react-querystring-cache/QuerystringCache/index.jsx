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
  ({ options, history, location, children, persist }) => {
    const context = React.useMemo(() => {
      const initialCache = persist
        ? JSON.parse(global.localStorage.getItem('querystring-cache'))
        : {}
      const queryStore = createQueryStore({
        initialCache,
        ...options
      })

      return {
        queryStore,
        resolvePath: resolvePath.bind(null, queryStore)
      }
    }, [options, persist])
    const [, setUpdate] = React.useState(location.key)

    React.useEffect(
      () =>
        history.listen(location => {
          context.queryStore.add(location)

          if (persist) {
            global.localStorage.setItem(
              'querystring-cache',
              context.queryStore.toString()
            )
          }

          setUpdate(location.key)
        }),
      [context.queryStore, history, persist]
    )

    return (
      <QueryContext.Provider value={{ ...context }}>
        {children}
      </QueryContext.Provider>
    )
  }
)

export default withRouter(QuerystringCache)
