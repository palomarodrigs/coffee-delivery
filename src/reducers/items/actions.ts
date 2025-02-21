import { CartItem } from './reducer'

export enum ActionTypes {
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
  CLEAR_CART = 'CLEAR_CART',
}

export function addItemAction(item: CartItem) {
  return {
    type: ActionTypes.ADD_ITEM,
    payload: { item },
  }
}

export function removeItemAction(id: number) {
  return {
    type: ActionTypes.REMOVE_ITEM,
    payload: { id },
  }
}

export function incrementAction(id: number) {
  return {
    type: ActionTypes.INCREMENT,
    payload: { id },
  }
}

export function decrementAction(id: number) {
  return {
    type: ActionTypes.DECREMENT,
    payload: { id },
  }
}

export function clearCartAction() {
  return {
    type: ActionTypes.CLEAR_CART,
  }
}
