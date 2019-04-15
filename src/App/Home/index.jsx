import React from 'react'
import { Helmet } from 'react-helmet'
import { Box, Video, Button, Text, Stack, Heading, Paragraph } from 'grommet'
import { LinkNext } from 'grommet-icons'
import { Link } from 'react-router-dom'

import QueryLink from '../../vendor/react-querystring-cache/QueryLink'

import homeVideo from '../assets/home.mp4'

const Home = () => (
  <>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <Box flex="grow">
      <Stack fill>
        <Box background="dark-1" fill>
          <Video controls={false} fit="cover" autoPlay mute loop>
            <source key="video" src={homeVideo} type="video/mp4" />
          </Video>
        </Box>
        <Box
          background={{ color: 'dark-1', opacity: 'strong' }}
          fill
          align="center"
          pad={{ top: '100px', horizontal: 'medium' }}
        >
          <Heading size="large" textAlign="center">
            ...world never says “hello” back...
          </Heading>
          <Paragraph textAlign="center" margin={{ bottom: '75px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Paragraph>
          <QueryLink pathname="/explore">
            {({ path }) => (
              <Link to={path}>
                <Button
                  as="span"
                  primary
                  label={
                    <Box direction="row" pad="xsmall" align="center">
                      <Text
                        weight="bold"
                        margin={{ right: '10px' }}
                        size="xxlarge"
                      >
                        EXPLORE
                      </Text>
                      <LinkNext color="dark-1" size="large" />
                    </Box>
                  }
                />
              </Link>
            )}
          </QueryLink>
        </Box>
      </Stack>
    </Box>
  </>
)

export default Home
