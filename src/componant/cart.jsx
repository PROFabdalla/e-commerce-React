import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { delitem } from '../redux/action'
import { NavLink } from 'react-router-dom';

export default function Cart() {
  const state = useSelector((state)=> state.cartreducer)
  const dispatch =  useDispatch()


  state.map((item)=>{
    return(console.log(item))
  })

  const closeItem = (item) => {
    dispatch(delitem(item))
  }

  const checkoutbtn = () =>{
    return(
      <div className="container">
        <div className="row">
          <NavLink to="/checkout" className="btn btn-success mb-4 w-25 mx-auto">you can checkout</NavLink>
        </div>
      </div>
    )
  }


  const emptycart =  () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className="row">
            <h3>you still has no item</h3>
          </div>
        </div>
      </div>

    );
  }

  const cartitems = (cartitem) => {
    return(
      <div className="px-4 my-5 bg-light rounded-3" key={cartitem.id}>
        <div className="container py-4">
          <button className="btn-close float-end" aria-label="Close" onClick={()=>closeItem(cartitem)}></button>
          <div className="row jusify-content-center">
            <div className="col-md-4">
              <img src={cartitem.image} alt="" height="200px" width="200px"/>
            </div>
            <div className="col-md-4">
              <h3>{cartitem.title}</h3>
              <p className='lead fw-bold'>{cartitem.price} $</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      
      {state.length === 0 && emptycart()}
      {state.length !== 0 && state.map(cartitems)}
      {state.length !== 0 && checkoutbtn()}
    </>
  )
}
