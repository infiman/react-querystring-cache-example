import React from 'react'
import { withRouter } from 'react-router-dom'
import { createQueryStore } from 'query-string-router'

export const QueryContext = React.createContext({
  queryStore: createQueryStore()
})

const Query = ({ history, children }) => {
  const { queryStore } = React.useContext(QueryContext)
  const [, setState] = React.useState()
  React.useEffect(
    () =>
      history.listen(location => {
        queryStore.add(location)
        setState()
      }),
    []
  )

  return (
    <QueryContext.Provider
      value={{
        queryStore
      }}
    >
      {children}
    </QueryContext.Provider>
  )
}

export default withRouter(Query)
