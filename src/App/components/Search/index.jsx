import React from 'react'
import { Box, TextInput } from 'grommet'
import { withRouter } from 'react-router-dom'
import _ from 'lodash'

import { QueryContext } from '../../../vendor/react-querystring-cache/QuerystringCache'

const Search = ({ history, location: { search } }) => {
  const { queryStore, resolvePath } = React.useContext(QueryContext)
  const { query } = queryStore.parseQueryString(search)
  const navigate = _.debounce(
    value =>
      history.push(
        resolvePath(queryStore, {
          scope: '*',
          pathname: '/explore',
          add: { query: value }
        })
      ),
    250
  )

  return (
    <Box pad={{ horizontal: 'xlarge' }} flex="grow">
      <TextInput
        defaultValue={query || ''}
        placeholder="Search..."
        onChange={({ target: { value } }) => navigate(value)}
      />
    </Box>
  )
}

export default withRouter(Search)
