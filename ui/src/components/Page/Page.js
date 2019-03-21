import React from 'react'
import injectSheet from 'react-jss'

let Page = ({ classes, children }) => (
  <div className={ classes.root }>
    { children }
  </div>
)

Page = injectSheet(theme => ({
  root: {
    marginTop: theme.header.height
  }
}))(Page)

export default Page

