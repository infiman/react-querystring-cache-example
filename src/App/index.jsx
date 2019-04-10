import React from 'react'
import { Grommet } from 'grommet'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Query from '../vendor/react-query/Query'

import Home from './Home'
import Explore from './Explore'

const App = () => (
  <Grommet>
    <Router>
      <Query>
        <Route path="/" exact component={Home} />
        <Route path="/explore" component={Explore} />
      </Query>
    </Router>
  </Grommet>
)

export default App
