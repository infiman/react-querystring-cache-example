import React from 'react'
import { Box, Video, Anchor } from 'grommet'
import { Close } from 'grommet-icons'
import { Link } from 'react-router-dom'

import QueryLink from '../../../../vendor/react-querystring-cache/QueryLink'

const MiniPlayer = ({ video }) => (
  <QueryLink pathname="/explore/page">
    {({ path }) => (
      <Link to={path} key={path.search}>
        <Box
          width="330px"
          height="small"
          style={{ position: 'fixed', bottom: '24px' }}
          overflow="hidden"
          elevation="medium"
          round="medium"
          background="dark-1"
        >
          <QueryLink pathname="/explore" remove={{ video: undefined }}>
            {({ path }) => (
              <Link to={path}>
                <Box style={{ position: 'fixed', zIndex: 1 }} margin="small">
                  <Anchor as="span" icon={<Close />} />
                </Box>
              </Link>
            )}
          </QueryLink>
          <Video controls={false} fit="cover" autoPlay mute loop>
            <source key="video" src={video} type="video/mp4" />
          </Video>
        </Box>
      </Link>
    )}
  </QueryLink>
)

export default MiniPlayer
