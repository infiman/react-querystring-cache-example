import React from 'react'
import { Box, Video, Text, Anchor, Paragraph, Meter } from 'grommet'
import { Link } from 'react-router-dom'

import QueryLink from '../../../../vendor/react-querystring-cache/QueryLink'

const Card = ({ id, title, length, rating, video }) => (
  <Box
    key={id}
    direction="row"
    margin="medium"
    background="light-3"
    overflow="hidden"
    elevation="small"
    round="medium"
  >
    <QueryLink
      pathname="/explore"
      add={{
        video: id
      }}
    >
      {({ path }) => (
        <Link to={path}>
          <Box width="small" height="small">
            <Video controls={false} fit="cover" autoPlay mute loop>
              <source key="video" src={video} type="video/mp4" />
            </Video>
          </Box>
        </Link>
      )}
    </QueryLink>
    <Box width="medium" height="small" pad="small">
      <QueryLink
        scope="/explore"
        pathname="/explore/page"
        add={{
          video: id
        }}
      >
        {({ path }) => (
          <Link to={path}>
            <Anchor as="span" size="medium">
              {title}
            </Anchor>
          </Link>
        )}
      </QueryLink>
      <Box>
        <Text size="small" weight="bold">
          {length}m
        </Text>
        <Box direction="row" align="center">
          <Text margin={{ right: '10px' }} size="small" weight="bold">
            Rating:
          </Text>
          <Meter
            round
            type="bar"
            background="light-4"
            thickness="small"
            size="small"
            values={[
              {
                value: rating * 20,
                color: rating * 20 >= 50 ? 'status-ok' : 'status-error'
              }
            ]}
          />
        </Box>
      </Box>
      <Paragraph size="small" margin="0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Paragraph>
      <QueryLink
        scope="/explore"
        pathname="/explore/page"
        add={{
          video: id,
          feature: 'comments'
        }}
      >
        {({ path }) => (
          <Link to={path}>
            <Anchor as="span" size="small">
              Comment
            </Anchor>
          </Link>
        )}
      </QueryLink>
    </Box>
  </Box>
)

export default Card
