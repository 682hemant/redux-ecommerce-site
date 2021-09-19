import { DECREASE, INCREASE, CLEAR_CART, REMOVE, GET_TOTALS, SORT_BY_PRICE, SORT_BY_NAME, SIGN_UP, LOG_IN } from "./actions";
import cartItems from "./cart-items";


const initialStore = {
  logedIn: false,
  cart: cartItems,
  total: 100,
  amount: 0,
  products: [{
    img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGhvbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
    name: 'hem',
    price: 32,
  },
  {
    img: 'https://img.freepik.com/free-photo/close-up-hand-holding-phone_23-2148883491.jpg?size=626&ext=jpg',
    name: 'ata',
    price: 12,
  },
  {
    img: 'https://media.istockphoto.com/vectors/mobile-phone-vibrating-or-ringing-flat-vector-icon-for-apps-and-vector-id1141778521?k=20&m=1141778521&s=612x612&w=0&h=HR00_7snTNcWcsXAFuzcVPTPnU--qT8R6H-ve4lG2m8=',
    name: 'tta',
    price: 26,
  },
  {
    img: 'https://media.istockphoto.com/vectors/mobile-phone-vibrating-or-ringing-flat-vector-icon-for-apps-and-vector-id1141778521?k=20&m=1141778521&s=612x612&w=0&h=HR00_7snTNcWcsXAFuzcVPTPnU--qT8R6H-ve4lG2m8=',
    name: 'tta',
    price: 26,
  },
  {
    img: 'https://media.istockphoto.com/vectors/mobile-phone-vibrating-or-ringing-flat-vector-icon-for-apps-and-vector-id1141778521?k=20&m=1141778521&s=612x612&w=0&h=HR00_7snTNcWcsXAFuzcVPTPnU--qT8R6H-ve4lG2m8=',
    name: 'tta',
    price: 26,
  }
  ],
  users: [],
  username: '',
  
}

function reducer(state = initialStore, action) {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] }
  }
  if (action.type === INCREASE) {
    let tempCart = state.cart.map(cartItem => {
      if (cartItem.id === action.payload.id) {
        cartItem = { ...cartItem, amount: cartItem.amount + 1 }
      }
      return cartItem;
    })
    return {
      ...state,
      cart: tempCart
    }
  }
  if (action.type === DECREASE) {
    let tempCart = []
    if (action.payload.amount === 1) {
      tempCart = state.cart.filter(item => item.id !== action.payload.id)
    } else {
      tempCart = state.cart.map(cartItem => {
        if (cartItem.id === action.payload.id) {
          cartItem = { ...cartItem, amount: cartItem.amount - 1 }
        }
        return cartItem;
      })
    }
    return {
      ...state,
      cart: tempCart
    }
  }
  if (action.type === REMOVE) {
    return {
      ...state,
      cart: state.cart.filter(item => item.id !== action.payload.id)
    }
  }
  if (action.type === GET_TOTALS) {
    let { total, amount } = state.cart.reduce((cartTotal, cartItem) => {
      const { price, amount } = cartItem;
      const itemTotal = price * amount;
      cartTotal.total += itemTotal;
      cartTotal.amount += amount;
      return cartTotal;
    }, {
      total: 0,
      amount: 0
    })
    total = parseFloat(total.toFixed(2));
    return { ...state, total, amount };
  }
  if (action.type === SORT_BY_PRICE) {
    state.products.sort((a, b) => {
      return a.price - b.price;
    })
    return {
      ...state,
      products: state.products
    }
  }
  // if (action.type === SORT_BY_NAME) {
  //   state.products.sort((a, b) => {
  //     if (a.name < b.name) {
  //       return -1;
  //     }
  //     if (a.name > b.name) {
  //       return 1;
  //     }
  //     return 0;
  //   })
  //   return {
  //     ...state,
  //     products: state.products
  //   }
  // }
  if (action.type === SIGN_UP) {
    console.log(state.users)
    return {
      ...state,
      users: [...state.users, action.payload]
    }
  }
  if (action.type === LOG_IN) {
    state.users.map(user => {
      if (user.name === action.payload.name && user.password === action.payload.password) {
        return {
          ...state,
          logedIn:true,
          username:user.name
        }
      } else {
        return {
          ...state,
          logedIn: false
        }
      }
    })
  }
  return state;

  // switch(action.type){
  //   case 'CLEAR_CART':
  //     return {...state,cart: []};
  //     default :
  //     return state;
  // }
}

export default reducer;