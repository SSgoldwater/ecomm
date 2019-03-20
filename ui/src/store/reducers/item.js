import c from 'store/constants'


const initialState = {
  list: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case c.item.GET_ITEMS:
      console.log(action)
      return state
    default: return state
  }
}

