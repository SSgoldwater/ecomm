import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import Entry from 'components/Entry'

ReactDOM.render(
  <AppContainer>
    <Entry />
  </AppContainer>,
  document.getElementById('app')
)

if (module.hot) {
  module.hot.accept()
}

