import c from 'store/constants'

export const getItems = () => (
  (dispatch, getState, { client }) => {
    return client.getItems().then(res => {
      dispatch({
        type: c.item.GET_ITEMS,
        items: res.data
      })
    })
  }
)

