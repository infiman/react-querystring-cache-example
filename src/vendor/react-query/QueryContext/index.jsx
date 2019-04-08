import React from 'react'

import { createQueryStore } from 'query-string-router'

export const { Provider, Consumer } = React.createContext(createQueryStore())
