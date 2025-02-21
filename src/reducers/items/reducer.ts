import { ActionTypes } from './actions'

import { produce } from 'immer'

export interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  image?: string
}

export function itemsReducer(state: CartItem[], action: any) {
  switch (action.type) {
    case ActionTypes.ADD_ITEM:
      return produce(state, (draft) => {
        const existingItemIndex = draft.findIndex(
          (item) => item.id === action.payload.item.id,
        )

        if (existingItemIndex >= 0) {
          draft[existingItemIndex].quantity += action.payload.item.quantity
        } else {
          draft.push(action.payload.item)
        }
      })

    case ActionTypes.REMOVE_ITEM:
      return produce(state, (draft) => {
        const itemIndex = draft.findIndex((item) => item.id === action.payload.id)
        if (itemIndex >= 0) {
          draft.splice(itemIndex, 1)
        }
      })

    case ActionTypes.INCREMENT:
      return produce(state, (draft) => {
        const itemIndex = draft.findIndex((item) => item.id === action.payload.id)
        if (itemIndex >= 0) {
          draft[itemIndex].quantity += 1
        }
      })

    case ActionTypes.DECREMENT:
      return produce(state, (draft) => {
        const itemIndex = draft.findIndex((item) => item.id === action.payload.id)
        if (itemIndex >= 0) {
          const item = draft[itemIndex]
          if (item.quantity > 1) {
            item.quantity -= 1
          } else {
            draft.splice(itemIndex, 1)
          }
        }
      })

    case ActionTypes.CLEAR_CART:
      return []

    default:
      return state
  }
}
