import React from 'react'
import { Helmet } from 'react-helmet'
import { Box, Grid } from 'grommet'
import { Route } from 'react-router-dom'

import { QueryContext } from '../../vendor/react-querystring-cache/QuerystringCache'

import MiniPlayer from './components/MiniPlayer'
import Card from './components/Card'
import Page from './Page'

import cards from './cards'

const Explore = ({ match, location: { search, pathname } }) => {
  const {
    queryStore: { parseQueryString }
  } = React.useContext(QueryContext)
  const [, , page] = pathname.split('/')
  const { video: videoId } = parseQueryString(search)
  const index = cards.findIndex(({ id }) => id === videoId)
  const { video } = cards[index] || {}

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
          Filter
          {!page && video && <MiniPlayer video={video} />}
        </Box>
        <Box gridArea="content" pad="medium" direction="row" wrap>
          {cards.map(Card)}
        </Box>
      </Grid>
      <Route path={`${match.url}/page`} component={Page} />
    </>
  )
}

export default Explore
