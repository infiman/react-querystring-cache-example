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

const Explore = ({ match, location: { search, pathname } }) => {
  const { queryStore } = React.useContext(QueryContext)
  const [, , page] = pathname.split('/')
  const {
    video: videoId,
    query = '',
    duration = '0',
    rating: ratingRange = ['1', '5']
  } = queryStore.parseQueryString(search)
  const index = cards.findIndex(({ id }) => id === videoId)
  const { video } = cards[index] || {}
  const filteredCards = cards.filter(
    ({ title, length, rating }) =>
      title.includes(query) &&
      length >= parseInt(duration, 10) &&
      (rating >= parseInt(ratingRange[0], 10) &&
        rating <= parseInt(ratingRange[1], 10))
  )

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
