import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { sortByPrice, sortByName } from '../actions';
import '../assets/css/products.css'

const Products = (props) => {
  const { products, sortByPrice } = props;
  const [selectOption, setOption] = useState('sort by name')
  useEffect(() => {
    props.dispatch1(selectOption)
  }, [selectOption])
  // useEffect(() => {
  // if(selectOption === "sort by name")  props.dispatch2(selectOption)
  // },[])
  return (
    <div>
      <select style={{ marginLeft: "10rem" }} value={selectOption} onChange={e => setOption(e.target.value)}>
        <option value="sort by name">sort by name</option>
        <option value="sort by price">sort by price</option>
      </select>
      <div className="product-container">
        {products.map(product => {
          return (
            <div>
              <img className="img" src={`${product.img}`} />
              <h5>{product.name}</h5>
              <h5>{product.price}</h5>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    products: state.products
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch1: (selectOption) => {
      dispatch(sortByPrice(selectOption))
    },
    // dispatch2: (selectOption) => {
    //   dispatch(sortByName(selectOption))
    // }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Products);
