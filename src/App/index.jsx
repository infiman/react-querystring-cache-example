import React from 'react'
import { Grommet } from 'grommet'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import qs from 'qs'

import QuerystringCache from '../vendor/react-querystring-cache/QuerystringCache'

import Home from './Home'
import Explore from './Explore'

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

const App = () => (
  <Grommet>
    <Router>
      <QuerystringCache options={QUERYSTRING_CACHE_OPTIONS}>
        <Route path="/" exact component={Home} />
        <Route path="/explore" component={Explore} />
      </QuerystringCache>
    </Router>
  </Grommet>
)

export default App
