import image1 from "../assets/product-index/product-index.png";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <section className="product flex justify-center">
      <div className="grid text-primary mt-[3.5rem] sm:grid-cols-[1.2fr_1.5fr] md:grid-cols-[450px_550px]">
        <div className="flex justify-center items-center relative h-[300px] md:h-[400px]">
          <div className="bg-orange-300 h-[220px] w-[220px] md:w-[310px] md:h-[310px] absolute z-1 sm:h-[250px] sm:w-[250px]"></div>
          <img
            src={image1}
            alt="New"
            className="absolute z-2 w-[130px] rotate-20 md:w-[170px]"
          />
        </div>
        <div className="flex flex-col items-center sm:mt-[2rem]">
          <h3 className="font-bold text-2xl mb-[.75rem] mt-[1.5rem]">
            WHAN YEN'S PRODUCTS
          </h3>
          <p className="text-center font-semibold px-[1rem] mb-[.75rem]">
            All of your favorite flavors. What's your scoop?
          </p>
          <Link to="/shop">
            <button className="bg-secondary text-white px-[2rem] py-[0.5rem] rounded-[1.5rem]">
              SEE ALL PRODUCTS
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Product;
