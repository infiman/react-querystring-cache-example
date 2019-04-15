import React from 'react'
import { Box, RangeSelector, Stack, Text, Heading, RangeInput } from 'grommet'
import { withRouter } from 'react-router-dom'
import _ from 'lodash'

import { QueryContext } from '../../../../vendor/react-querystring-cache/QuerystringCache'

const Filter = ({ history, location: { search } }) => {
  const { queryStore, resolvePath } = React.useContext(QueryContext)
  const { duration, rating } = queryStore.parseQueryString(search)
  const [ratingState, setRatingState] = React.useState(rating || [1, 5])
  const [durationState, setDurationState] = React.useState(duration || 0)
  const navigateDuration = _.debounce(
    value =>
      history.push(
        resolvePath(queryStore, {
          pathname: '/explore',
          add: { duration: value }
        })
      ),
    750
  )
  const navigateRating = _.debounce(
    values =>
      history.push(
        resolvePath(queryStore, {
          pathname: '/explore',
          remove: { rating: undefined },
          add: { rating: values }
        })
      ),
    750
  )

  return (
    <Box>
      <Heading level={3}>Duration(>=):</Heading>
      <RangeInput
        value={durationState}
        onChange={({ target: { value } }) =>
          setDurationState(() => {
            navigateDuration(value)

            return value
          })
        }
      />
      <Heading level={3}>Rating:</Heading>
      <Stack>
        <Box direction="row" justify="between">
          {[1, 2, 3, 4, 5].map(value => (
            <Box key={value} pad="small" border={false}>
              <Text style={{ fontFamily: 'monospace' }}>{value}</Text>
            </Box>
          ))}
        </Box>
        <RangeSelector
          direction="horizontal"
          invert={false}
          min={1}
          max={5}
          size="full"
          round="small"
          values={ratingState}
          onChange={values =>
            setRatingState(() => {
              navigateRating(values)

              return values
            })
          }
        />
      </Stack>
    </Box>
  )
}

export default withRouter(Filter)
