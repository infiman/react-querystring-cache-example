import React from 'react'
import { Helmet } from 'react-helmet'
import {
  Layer,
  Grid,
  Box,
  Video,
  Heading,
  Text,
  Meter,
  Paragraph,
  Anchor,
  TextArea
} from 'grommet'
import { ChatOption, Contract } from 'grommet-icons'
import { Link } from 'react-router-dom'

import { QueryContext } from '../../../vendor/react-querystring-cache/QuerystringCache'
import QueryLink from '../../../vendor/react-querystring-cache/QueryLink'

import cards from '../cards'

const Page = ({ location: { search }, history }) => {
  const { queryStore, resolvePath } = React.useContext(QueryContext)
  const back = () => history.push(resolvePath({ pathname: '/explore' }))
  const { video: videoId, feature } = queryStore.parseQueryString(search)
  const index = cards.findIndex(({ id }) => id === videoId)
  const { title, length, rating, video } = cards[index] || {}

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Layer
        margin={{ horizontal: 'large', top: 'large' }}
        full
        onClickOutside={back}
        onEsc={back}
        position="bottom"
      >
        <Grid
          fill
          areas={[
            { name: 'video', start: [0, 0], end: [0, 0] },
            { name: 'description', start: [1, 0], end: [1, 0] }
          ]}
          columns={['flex', '330px']}
          rows={['flex']}
        >
          <Box
            width="auto"
            height="auto"
            gridArea="video"
            round={{ size: 'xsmall', corner: 'top-left' }}
            overflow="hidden"
          >
            <Video fit="cover" autoPlay mute loop>
              <source key="video" src={video} type="video/mp4" />
            </Video>
          </Box>
          <Box
            gridArea="description"
            background="light-2"
            pad="medium"
            round={{ size: 'xsmall', corner: 'top-right' }}
            overflow="hidden"
          >
            <Box alignSelf="end">
              <QueryLink pathname="/explore">
                {({ path }) => (
                  <Link to={path}>
                    <Anchor as="span">
                      <Contract />
                    </Anchor>
                  </Link>
                )}
              </QueryLink>
            </Box>
            <Heading level={1} size="small">
              {title}
            </Heading>
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
            <Paragraph size="small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Paragraph>
            {feature !== 'comments' && (
              <QueryLink
                pathname="/explore/page"
                mutations={[
                  {
                    add: { feature: 'comments' }
                  }
                ]}
              >
                {({ path }) => (
                  <Link to={path}>
                    <Anchor as="span" size="small">
                      Comment
                    </Anchor>
                  </Link>
                )}
              </QueryLink>
            )}
            {feature === 'comments' && (
              <Box
                background="light-1"
                pad={{ top: 'large', bottom: 'small', horizontal: 'small' }}
                flex="grow"
                border="all"
                round="xsmall"
                justify="between"
              >
                <Box alignSelf="center">
                  <ChatOption size="large" />
                </Box>
                <TextArea
                  autoFocus
                  resize="vertical"
                  placeholder="Type your comment here..."
                />
              </Box>
            )}
          </Box>
        </Grid>
      </Layer>
    </>
  )
}

export default Page
