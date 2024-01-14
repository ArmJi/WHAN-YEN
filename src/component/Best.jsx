import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { bestData } from "../constants/data";
import image4 from "../assets/best/best1.png";
import "./Best.css";
import { useCart } from "../context/CartContext";

const Best = () => {
  const { addCart } = useCart();
  return (
    <section className="best">
      <div className="mt-[3.5rem]">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            500: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1060: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className=" bg-tertiary h-[474px] w-full">
              <div className="relative flex flex-col items-center">
                <h1 className="absolute top-[10rem] text-4xl font-bold">
                  BEST SELLER
                </h1>
                <div className="absolute top-[25rem] flex flex-col items-center">
                  <h1 className="text-2xl font-semibold">Right this way</h1>
                  <img
                    src={image4}
                    alt=""
                    className="bottom-[0rem] w-[75%] h-[100%]"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          {bestData.map((product) => {
            return (
              <SwiperSlide>
                <div className="flex flex-col items-center bg-tertiary py-[2rem] w-full">
                  <div className="mb-[1rem] h-[280px]">
                    <img src={product.img} alt="image" />
                  </div>
                  <div className="">
                    <div className="text-xl font-bold mb-[0.5rem]">
                      {product.name}
                    </div>
                    <div className="mb-[0.5rem]">
                      <span className="font-normal pr-[0.5rem]">
                        Price : {product.price} ฿
                      </span>
                    </div>
                    <div className="flex justify-center">
                      <button
                        value={product.id}
                        onClick={(e) => addCart(e.target.value)}
                        className="bg-secondary text-white px-[2rem] py-[0.5rem] rounded-[1.5rem] text-base"
                      >
                        ADD CART
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};
export default Best;
