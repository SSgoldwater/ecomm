import React from 'react'
import { connect } from 'react-redux'

import Header from 'components/Header'
import Page from 'components/Page'
import { getItems } from 'store/actions/item'

let Catalog = ({
  items,
  fetchItems
}) => {
  if (items.length == 0) {
    fetchItems()
  }
  console.log(items)
  
  return (
    <div>
      <Header />
      <Page>
        Catalog
      </Page>
    </div>
  )
}

Catalog = connect(
  (state) => ({
    items: state.item.list
  }),
  dispatch => ({
    fetchItems: () => dispatch(getItems())
  })
)(Catalog)

export default Catalog

