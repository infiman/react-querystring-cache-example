import React from 'react'
import { Heading, Anchor } from 'grommet'
import { Route, Link } from 'react-router-dom'

import QueryLink from '../../vendor/react-querystring-cache/QueryLink'

import Card from './Card'

const Explore = ({ match, location, history }) => (
  <>
    <Heading>Explore</Heading>
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
    <Route path={`${match.url}/:name`} component={Card} />
  </>
)

export default Explore
