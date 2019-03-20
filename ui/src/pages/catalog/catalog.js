import React from 'react'
import { connect } from 'react-redux'

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
      Catalog
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

