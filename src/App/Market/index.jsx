import React from 'react'
import { Route } from 'react-router-dom'

import QueryRoute from '../../vendor/react-query/QueryRoute'
import QueryLink from '../../vendor/react-query/QueryLink'

import Product from './Product'

const Market = ({ match: { path, url }, location }) => (
  <QueryRoute path={path} location={location}>
    <span>MARKET</span>
    <QueryLink>{({ to }) => <a href="/market/bla">TEST</a>}</QueryLink>
    <Route path={`${url}/:name`} component={Product} />
  </QueryRoute>
)

export default Market
