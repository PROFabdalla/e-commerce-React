import React from "react";
import {Products} from './products'
export default function Home() {
  return (
    <div className="home">
    <img src="https://images.pexels.com/photos/5418899/pexels-photo-5418899.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="the_image" />
    <Products />
    </div>
  );
}

