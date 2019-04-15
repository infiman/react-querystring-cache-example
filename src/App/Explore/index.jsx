import React from 'react'
import { Helmet } from 'react-helmet'
import { Box, Grid, Heading } from 'grommet'
import { Route } from 'react-router-dom'

import { QueryContext } from '../../vendor/react-querystring-cache/QuerystringCache'

import MiniPlayer from './components/MiniPlayer'
import Card from './components/Card'
import Filter from './components/Filter'
import Page from './Page'

import cards from './cards'

const Explore = ({ history, match, location: { search, pathname } }) => {
  const { queryStore } = React.useContext(QueryContext)
  const [, , page] = pathname.split('/')
  const {
    video: videoId,
    query,
    duration,
    rating: ratingRange
  } = queryStore.parseQueryString(search)
  const index = cards.findIndex(({ id }) => id === videoId)
  const { video } = cards[index] || {}
  const filteredCards =
    query || ratingRange || duration
      ? cards.filter(
          ({ title, length, rating }) =>
            (query && title.includes(query)) ||
            (duration && length >= parseInt(duration, 10)) ||
            (ratingRange &&
              (rating >= ratingRange[0] && rating <= ratingRange[1]))
        )
      : cards

  return (
    <>
      <Helmet>
        <title>Explore</title>
      </Helmet>
      <Grid
        fill
        areas={[
          { name: 'nav', start: [0, 0], end: [0, 0] },
          { name: 'content', start: [1, 0], end: [1, 0] }
        ]}
        columns={['330px', 'flex']}
        rows={['flex']}
        gap="medium"
      >
        <Box gridArea="nav" pad="medium">
          <Heading level={1}>Explore:</Heading>
          <Filter />
          {!page && video && <MiniPlayer video={video} />}
        </Box>
        <Box gridArea="content" pad="medium">
          <Box direction="row" wrap>
            {filteredCards.map(Card)}
          </Box>
        </Box>
      </Grid>
      <Route path={`${match.url}/page`} component={Page} />
    </>
  )
}

export default Explore
