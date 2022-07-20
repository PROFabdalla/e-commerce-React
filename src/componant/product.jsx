import React , { useState , useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {additem ,delitem} from '../redux/action'
import { useParams } from 'react-router'
import axios from "axios";
import { NavLink } from 'react-router-dom';





export default function Product() {
    const [product, setproduct] = useState([]);
    const {id} = useParams();


    const dispatch =  useDispatch();
    const addproduct = (product)=>{
    dispatch(additem(product));
    }


    const delproduct = (product)=>{
    dispatch(delitem(product));
    }


    useEffect(() => {
        axios
          .get(`https://fakestoreapi.com/products/${id}`)
          .then((response) => {
            setproduct(response.data)
          })
          .catch((Error) => {
            console.log(Error);
          });
      }, []);
    


    const Showproduct = () => {
        return(
            <>
            <div className="card mb-3 h-100 py-3" style={{maxWidth: "900px"}}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={product.image} className="img-fluid rounded-start" style={{height: "350px",width:"350"}} alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body h-100">
                  <h2 className="card-title">{product.title}</h2>
                  <h5 className="card-title fw-30">{product.price} $</h5>
                  <p className="card-text"><small className="text-muted">{product.description}</small></p>
                  <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                    <button className="btn btn-success me-3 mt-4 px-5" onClick={()=>addproduct(product)}>add to cart</button>
                    <button className="btn btn-success me-3 mt-4 px-5" onClick={()=>delproduct(product)}>remove from cart</button>
                    <NavLink to="/cart" className="btn btn-outline-success me-3 mt-4 px-5">go to cart</NavLink>
                </div>
              </div>
            </div>
          </div>
             
             
            </>
        )
    }

  return (
    <div>
        <div className="container">
            <div className="row">
                <Showproduct />
            </div>
        </div>
    </div>
  )
}
