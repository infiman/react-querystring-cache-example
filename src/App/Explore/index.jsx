import React from 'react'
import { Helmet } from 'react-helmet'
import { Anchor, Box, Grid } from 'grommet'
import { Route, Link } from 'react-router-dom'

import QueryLink from '../../vendor/react-querystring-cache/QueryLink'

import Card from './components/Card'

import cards from './cards'

const Explore = ({ match, location, history }) => (
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
      </Box>
      <Box gridArea="content" pad="medium" direction="row" wrap>
        {cards.map(Card)}
        <QueryLink pathname="/explore/bla" add={{ some: 'string' }}>
          {({ path }) => (
            <Link to={path}>
              <Anchor as="span">BLA WITH SOME</Anchor>
            </Link>
          )}
        </QueryLink>
        |
        <QueryLink pathname="/explore/bla">
          {({ path }) => (
            <Link to={path}>
              <Anchor as="span">BLA</Anchor>
            </Link>
          )}
        </QueryLink>
      </Box>
    </Grid>
    <Route path={`${match.url}/:name`} component={Card} />
  </>
)

export default Explore
