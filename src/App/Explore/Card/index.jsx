import React from 'react'
import { Heading } from 'grommet'

const Card = ({
  match: {
    params: { name }
  }
}) => <Heading level={2}>Card: {name}</Heading>

export default Card
