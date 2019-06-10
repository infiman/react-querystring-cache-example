import React from 'react'
import qs from 'qs'
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from 'react-router-dom'
import { Grommet, Box, Anchor } from 'grommet'
import { Inherit, Menu } from 'grommet-icons'
import {
  Query,
  QueryLink,
  QueryParams
} from '@infiman/react-router-querystring'

import Search from './components/Search'
import Home from './Home'
import Explore from './Explore'

import './styles.css'

const QS_CONFIG = {
  arrayFormat: 'brackets',
  addQueryPrefix: true,
  ignoreQueryPrefix: true,
  interpretNumericEntities: true
}
const QUERYSTRING_CACHE_OPTIONS = {
  parseQueryString: queryString => qs.parse(queryString, QS_CONFIG),
  stringifyQueryParams: queryParams => qs.stringify(queryParams, QS_CONFIG)
}

const QueryWithHistory = withRouter(Query)

const App = () => (
  <Router>
    <QueryWithHistory options={QUERYSTRING_CACHE_OPTIONS} respect replace>
      <QueryParams scope="/*" params={['query']}>
        <Grommet>
          <Box
            direction="row"
            flex={false}
            background="brand"
            pad="small"
            as="header"
            align="center"
          >
            <QueryLink pathname="/">
              {({ path }) => (
                <Link to={path}>
                  <Anchor
                    icon={<Inherit size="large" />}
                    as="span"
                    size="xsmall"
                  />
                </Link>
              )}
            </QueryLink>
            <Search />
            <QueryLink pathname="/">
              {({ path }) => (
                <Link to={path}>
                  <Anchor
                    icon={<Menu size="large" />}
                    as="span"
                    size="xsmall"
                  />
                </Link>
              )}
            </QueryLink>
          </Box>
          <Box background="light-2" as="main" flex="grow">
            <Route path="/" exact component={Home} />
            <Route path="/explore" component={Explore} />
          </Box>
          <Box background="light-4" pad="small" as="footer">
            <QueryLink pathname="/">
              {({ path }) => (
                <Link to={path}>
                  <Anchor as="span">Home</Anchor>
                </Link>
              )}
            </QueryLink>
            <QueryLink pathname="/explore">
              {({ path }) => (
                <Link to={path}>
                  <Anchor as="span">Explore</Anchor>
                </Link>
              )}
            </QueryLink>
          </Box>
        </Grommet>
      </QueryParams>
    </QueryWithHistory>
  </Router>
)

export default App
