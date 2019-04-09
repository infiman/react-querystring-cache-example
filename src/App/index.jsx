import React from 'react'
import { Grommet } from 'grommet'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './Home'
import Explore from './Explore'

const App = () => (
  <Grommet>
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/explore" component={Explore} />
    </Router>
  </Grommet>
)

export default App
