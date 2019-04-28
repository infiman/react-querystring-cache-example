import React from 'react'

import { QueryContext } from '../QuerystringCache'

const QueryLink = React.memo(
  ({ children, pathname, hash, mutations, ...props }) => (
    <QueryContext.Consumer>
      {({ resolvePath }) =>
        children({
          ...props,
          path: resolvePath({ pathname, hash, mutations })
        })
      }
    </QueryContext.Consumer>
  )
)

export default QueryLink
