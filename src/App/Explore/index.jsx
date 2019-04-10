import React from 'react'
import { Heading, Anchor } from 'grommet'
import { Route, Link } from 'react-router-dom'

import QueryLink from '../../vendor/react-query/QueryLink'

import Card from './Card'

const Explore = ({ match, location, history }) => (
  <>
    <Heading>Explore</Heading>
    <QueryLink pathname="/explore/bla" add={{ some: Date.now() }}>
      {({ path }) => (
        <Link to={path}>
          <Anchor as="span">TEST 1</Anchor>
        </Link>
      )}
    </QueryLink>
    |
    <QueryLink pathname="/explore/bla">
      {({ path }) => (
        <Link to={path}>
          <Anchor as="span">TEST 2</Anchor>
        </Link>
      )}
    </QueryLink>
    <Route path={`${match.url}/:name`} component={Card} />
  </>
)

export default Explore
