import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Card } from "react-bootstrap";
import { NavLink } from 'react-router-dom';

export function Products() {
  let [data, setData] = useState([]);
  let [filter, setfilter] = useState([]);


  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setfilter(response.data);
        setData(response.data);
      })
      .catch((Error) => {
        console.log(Error);
      });
  }, []);

  const filterproduct = (category) => {
    const updatelist = data.filter((x) => x.category === category);
    setfilter(updatelist);
  }



  const Showproducts = () => {
    return (
      <>
      <div className="container">
          <div className="row " >
        <div className="buttons showproductbtns">
          <div className="btn btn-success me-2" onClick={() => setfilter(data)}>all</div>
          <div className="btn btn-success me-2" onClick={() => filterproduct("men's clothing")}>men clothing</div>
          <div className="btn btn-success me-2" onClick={() => filterproduct("women's clothing")}>women clothing</div>
          <div className="btn btn-success me-2" onClick={() => filterproduct("jewelery")}>jewels</div>
          <div className="btn btn-success me-2" onClick={() => filterproduct("electronics")}>devices</div>
        </div>
        </div>
        </div>
        <div className="container">
          <div className="row">

        {filter.map((product) => {
          return (
            <>
              <div className="col-md-4 mt-3">
                <div class="card h-100 text-center p-4" key={product.id}>
                  <img src={product.image} className="card-img-top mcard" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title mb-0">{product.title.substring(0,12)}</h5>
                    <p class="card-text fw-bold">
                    {product.price} $
                    </p>
                    <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark mb-3">buy now</NavLink>
                    <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
                </div>
            </>
          );
        })}
          </div>
        </div>
      </>
    );
  };
  return (
    <div>
      <div className="container my-3 py-3 d-flex justify-content-center">
        <div className="row">
          <div className="col-12 mb-4">
            <h1 className="fw-bolder text-center">Newest Product</h1>
            <hr className="bg-danger" />
            <h1>{filter?.title}</h1>
          </div>
          <div className="justify-content-center">
            <Showproducts />
          </div>
        </div>
      </div>
    </div>
  );
}
