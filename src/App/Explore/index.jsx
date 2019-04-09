import React from 'react'
import { Heading, Anchor } from 'grommet'
import { Route } from 'react-router-dom'

import QueryRoute from '../../vendor/react-query/QueryRoute'
import QueryLink from '../../vendor/react-query/QueryLink'

import Card from './Card'

const Explore = ({ match: { path, url }, location }) => (
  <QueryRoute path={path} location={location}>
    <Heading>Explore</Heading>
    <QueryLink>
      {({ to }) => <Anchor href="/explore/bla">TEST</Anchor>}
    </QueryLink>
    <Route path={`${url}/:name`} component={Card} />
  </QueryRoute>
)

export default Explore
