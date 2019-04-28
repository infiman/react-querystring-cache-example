import React from 'react'
import { Box, TextInput } from 'grommet'
import { withRouter } from 'react-router-dom'
import _ from 'lodash'

import { QueryContext } from '../../../vendor/react-querystring-cache/QuerystringCache'

const navigateQuery = _.debounce(
  ({ history, resolvePath, value }) =>
    history.push(
      resolvePath({
        pathname: '/explore',
        mutations: [{ scope: '/*', add: { query: value } }]
      })
    ),
  250
)

const Search = ({ history, location: { search } }) => {
  const { queryStore, resolvePath } = React.useContext(QueryContext)
  const { query = '' } = queryStore.parseQueryString(search)

  return (
    <Box pad={{ horizontal: 'xlarge' }} flex="grow">
      <TextInput
        defaultValue={query || ''}
        placeholder="Search..."
        onChange={({ target: { value } }) =>
          navigateQuery({ history, resolvePath, value })
        }
      />
    </Box>
  )
}

export default withRouter(Search)
