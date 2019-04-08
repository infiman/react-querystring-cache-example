import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './Home'
import Market from './Market'

const App = () => (
  <Router>
    <Route path="/" exact component={Home} />
    <Route path="/market" component={Market} />
  </Router>
)

export default App
