import React from 'react'
import { withRouter } from 'react-router-dom'
import { createQueryStore } from '@infiman/querystring-cache'

export const QueryContext = React.createContext({})

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
        queryStore: queryStore || createQueryStore(options)
      }}
    >
      {children}
    </QueryContext.Provider>
  )
}

export default withRouter(QuerystringCache)
