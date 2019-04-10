import React from 'react'
import { Heading, Anchor } from 'grommet'
import { Link } from 'react-router-dom'

import QueryLink from '../../../vendor/react-query/QueryLink'

const Card = ({
  match: {
    path,
    params: { name }
  },
  location
}) => (
  <>
    <QueryLink pathname="/explore">
      {({ path }) => (
        <Link to={path}>
          <Anchor as="span">BACK</Anchor>
        </Link>
      )}
    </QueryLink>
    <Heading level={2}>Card: {name}</Heading>
  </>
)

export default Card
