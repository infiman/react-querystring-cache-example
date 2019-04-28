import React from 'react'
import {
  Box,
  RangeSelector,
  Stack,
  Text,
  Heading,
  RangeInput,
  Button
} from 'grommet'
import { withRouter } from 'react-router-dom'
import _ from 'lodash'

import { QueryContext } from '../../../../vendor/react-querystring-cache/QuerystringCache'

const navigateDuration = _.debounce(
  ({ history, resolvePath, value }) =>
    history.push(
      resolvePath({
        pathname: '/explore',
        mutations: [{ persist: true, add: { duration: value } }]
      })
    ),
  250
)

const navigateRating = _.debounce(
  ({ history, resolvePath, values }) =>
    history.push(
      resolvePath({
        pathname: '/explore',
        mutations: [
          {
            persist: true,
            remove: { rating: undefined },
            add: { rating: values }
          }
        ]
      })
    ),
  250
)

const Filter = ({ history, location: { search } }) => {
  const { queryStore, resolvePath } = React.useContext(QueryContext)
  const { duration = '0', rating = ['1', '5'] } = queryStore.parseQueryString(
    search
  )
  const [
    { duration: durationState, rating: ratingState },
    setFilterState
  ] = React.useState({
    duration: parseInt(duration, 10),
    rating: [parseInt(rating[0], 10), parseInt(rating[1], 10)]
  })

  return (
    <Box>
      <Box direction="row">
        <Button
          primary
          label={
            <Text weight="bold" size="large">
              RESET FILTER
            </Text>
          }
          onClick={() =>
            setFilterState(() => {
              history.push(
                resolvePath({
                  pathname: '/explore',
                  mutations: [
                    {
                      persist: true,
                      remove: { duration: undefined, rating: undefined }
                    }
                  ]
                })
              )

              return {
                duration: 0,
                rating: [1, 5]
              }
            })
          }
        />
      </Box>
      <Heading level={3}>Duration(>=):</Heading>
      <RangeInput
        value={durationState}
        onChange={({ target: { value } }) =>
          setFilterState(() => {
            navigateDuration({ history, resolvePath, value })

            return { duration: value }
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
            setFilterState(() => {
              navigateRating({ history, resolvePath, values })

              return { rating: values }
            })
          }
        />
      </Stack>
    </Box>
  )
}

export default withRouter(Filter)
