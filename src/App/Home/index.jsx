import React from 'react'
import { Heading, Anchor } from 'grommet'
import { Link } from 'react-router-dom'

import QueryLink from '../../vendor/react-querystring-cache/QueryLink'

const Home = () => (
  <>
    <Heading>Home</Heading>
    <QueryLink pathname="/explore">
      {({ path }) => (
        <Link to={path}>
          <Anchor as="span">Explore</Anchor>
        </Link>
      )}
    </QueryLink>
    |
    <QueryLink
      persist
      pathname="/"
      add={{
        some: 'some'
      }}
    >
      {({ path }) => (
        <Link to={path}>
          <Anchor as="span">Some</Anchor>
        </Link>
      )}
    </QueryLink>
    |
    <QueryLink
      persist
      pathname="/"
      add={{
        foo: 'bar'
      }}
    >
      {({ path }) => (
        <Link to={path}>
          <Anchor as="span">FooBar</Anchor>
        </Link>
      )}
    </QueryLink>
  </>
)

export default Home
