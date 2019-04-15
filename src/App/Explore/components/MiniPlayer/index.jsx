import React from 'react'
import { Box, Video, Anchor } from 'grommet'
import { Close, Expand } from 'grommet-icons'
import { Link, withRouter } from 'react-router-dom'

import { QueryContext } from '../../../../vendor/react-querystring-cache/QuerystringCache'
import QueryLink from '../../../../vendor/react-querystring-cache/QueryLink'

const MiniPlayer = ({ video, location: { search } }) => {
  const { queryStore } = React.useContext(QueryContext)

  return (
    <Box
      width="330px"
      height="small"
      style={{ position: 'fixed', bottom: '24px' }}
      overflow="hidden"
      elevation="medium"
      round="medium"
      background="dark-2"
      key={queryStore.parseQueryString(search).video}
    >
      <QueryLink pathname="/explore" remove={{ video: undefined }}>
        {({ path }) => (
          <Link to={path}>
            <Box style={{ position: 'fixed', zIndex: 2 }} margin="small">
              <Anchor as="span" icon={<Close />} />
            </Box>
          </Link>
        )}
      </QueryLink>
      <QueryLink pathname="/explore/page">
        {({ path }) => (
          <Link to={path}>
            <Box
              style={{ position: 'fixed', zIndex: 1, marginTop: '54px' }}
              margin="small"
            >
              <Anchor as="span" icon={<Expand />} />
            </Box>
          </Link>
        )}
      </QueryLink>
      <Video controls={false} fit="cover" autoPlay mute loop>
        <source key="video" src={video} type="video/mp4" />
      </Video>
    </Box>
  )
}

export default withRouter(MiniPlayer)
