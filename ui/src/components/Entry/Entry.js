import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, Switch } from 'react-router-dom'
import injectSheet, { ThemeProvider } from 'react-jss'
import createHistory from 'history/createBrowserHistory'

import theme from 'utils/theme'
import Client from 'client/Client'
import createEcommStore from 'store/store'

import Home from 'pages/home'
import Catalog from 'pages/catalog'

const history = createHistory()

const store = createEcommStore({
  client: new Client({
    baseURL: process.env.API_HOST
  }),
  history
})


const Entry = () => {
  return (
    <Provider store={ store }>
      <ThemeProvider theme={ theme }>
        <Router history={ history }>
          <Switch>
            <Route
              path={ '/catalog' }
              render={ props =>
                <Catalog { ...props } />
              }
            />
            <Route
              path={ '/' }
              render={ props =>
                <Home { ...props } />
              }
            />
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  )
}

export default Entry

