import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Product } from "../constants/data";
import { Link } from "react-router-dom";

const Shop = () => {
  return (
    <section className="pt-[4.5rem]">
      <div className="pt-[2.5rem]">
        <div className="flex justify-center text-3xl font-bold">
          <h1>ICE CREAM PINT</h1>
        </div>
        <div className="pt-[2.5rem] text-center">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            className="mySwiper"
          >
            {Product.map((product) => {
              if (product.type === "pint") {
                return (
                  <SwiperSlide>
                    <div className="">
                      <div className="bg-tertiary">
                        <img src={product.img} alt="" className="w-full"/>
                      </div>
                      <h3 className="text-lg font-bold text-center py-[2rem]">
                        {product.name}
                      </h3>
                    </div>
                  </SwiperSlide>
                );
              }
            })}
          </Swiper>
          <Link to="/shop/pint">
            <button className=" bg-secondary text-white px-[2rem] py-[0.5rem] rounded-[1.5rem] text-base">
              SEE ALL FLAVORS
            </button>
          </Link>
        </div>
      </div>
      <div className="pt-[2.5rem] text-center">
        <div className="flex justify-center text-3xl font-bold">
          <h1>ICE CREAM BAR</h1>
        </div>
        <div className="pt-[2.5rem]">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            className="mySwiper"
          >
            {Product.map((product) => {
              if (product.type === "bar") {
                return (
                  <SwiperSlide>
                    <div className="">
                      <div className="bg-tertiary">
                        <img src={product.img} alt="" className="w-full"/>
                      </div>
                      <h3 className="text-lg font-bold text-center py-[2rem]">
                        {product.name}
                      </h3>
                    </div>
                  </SwiperSlide>
                );
              }
            })}
          </Swiper>
          <Link to="/shop/bar">
            <button className=" bg-secondary text-white px-[2rem] py-[0.5rem] rounded-[1.5rem] text-base">
              SEE ALL FLAVORS
            </button>
          </Link>
        </div>
      </div>
      <div className="pt-[2.5rem] text-center">
        <div className="flex justify-center text-3xl font-bold">
          <h1>ICE CREAM COOKIE</h1>
        </div>
        <div className="pt-[2.5rem]">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            className="mySwiper"
          >
            {Product.map((product) => {
              if (product.type === "cookie") {
                return (
                  <SwiperSlide>
                    <div className="">
                      <div className="bg-tertiary">
                        <img src={product.img} alt="" className="w-full"/>
                      </div>
                      <h3 className="text-lg font-bold text-center py-[2rem]">
                        {product.name}
                      </h3>
                    </div>
                  </SwiperSlide>
                );
              }
            })}
          </Swiper>
          <Link to="/shop/cookie">
            <button className=" bg-secondary text-white px-[2rem] py-[0.5rem] rounded-[1.5rem] text-base">
              SEE ALL FLAVORS
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Shop;
