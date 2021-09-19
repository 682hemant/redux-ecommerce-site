export const DECREASE = "DECREASE"
export const INCREASE = "INCREASE"
export const REMOVE = "REMOVE"
export const CLEAR_CART = "CLEAR_CART"
export const GET_TOTALS = "GET_TOTALS"
export const TOGGLE_AMOUNT = "TOGGLE_AMOUNT"
export const SORT_BY_PRICE  = "SORT_BY_PRICE"
export const SIGN_UP = "SIGN_UP"
export const LOG_IN = "LOG_IN"
// export const SORT_BY_NAME = "SORT_BY_NAME"


export const removeItem = id => {
  return {
    type: 'REMOVE',
    payload: {id}
  }
}

export const sortByPrice = value => {
  return {
    type: 'SORT_BY_PRICE',
    payload: value
  }
}

// export const sortByName = value =>{
// 
//   return {
//     type: 'SORT_BY_NAME',
//     payload:value
//   }
// }

export const signUp = obj => {
  return {
    type:'SIGN_UP',
    payload: obj
  }
}
export const logIn = obj =>{
  return {
    type: 'LOG_IN',
    payload: obj
  }
}