import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../context/AllProducts";
import PageHeader from "../../components/PageHeader/PageHeader";

import  { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";

import{Autoplay} from "swiper/modules"
import ProductDisplay from "./ProductDisplay";
import Review from "./Review";

function SingleProduct() {
  const allProducts = useContext(ProductsContext);
  const products = allProducts.allProducts;
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch("products").then((allProducts) => setProduct(allProducts));
  }, []);
  const result = products.filter((product) => product.id === id);

  return (
    <div>
      <PageHeader
        title={"OUR SHOP SINGLE"}
        currentPage={"Shop / Single Product"}
      />
      <div className="shop-single padding-tb aside-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="product-details">
                  <div className="row align-items-center">
                    <div className="col-md-6 col-12">
                        <div className="product-thumb">
                            <div className="swiper-container pro-single-top">
                            <Swiper className="mySwiper" spaceBetween={30} slidesPerView={1} loop={"true"} autoplay={{delay:2000,disableOnInteraction:false}} modules={[Autoplay]} navigation={{
                                prevEl:".pro-single-prev",
                                nextEl:".pro-single-next",
                            }}>
       {
        result.map((item,i)=>(
<SwiperSlide key={i}>
    <div className="single-thumb">
    <img src={item.mainImage.secure_url} alt="product image"/>

    </div>
</SwiperSlide>
        ))
       }
      </Swiper>
      <div className="pro-single-prev">
       <i className="icofont-rounded-right">

       </i>

      </div>
      <div className="pro-single-next">
       <i className="icofont-rounded-right">

       </i>

      </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="post-content">
<div>
    {
        result.map((item => <ProductDisplay key={item.id} item={item}/>))
    }
</div>
                        </div>
                    </div>
                  </div>
                </div>

                <div className="review">
                  <Review/>
                </div>
              </article>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
