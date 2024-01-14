import Item from "../component/item";
import Total from "../component/Total";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { amount } = useCart();
  return (
    <section className="pt-[4.5rem] px-[2rem] md:pt-[5.5rem]">
      <div className={`${amount == 0 ? "hidden" : "grid"}`}>
        <h3 className="text-2xl md:text-3xl font-bold py-[1rem] text-center">
          YOUR CART
        </h3>
        <div className="md:flex md:justify-center">
          <div className="sm:grid sm:grid-cols-[1.5fr_1fr] md:grid-cols-[580px_380px] gap-[1.5rem]">
            <Item />
            <Total />
          </div>
        </div>
      </div>
      <div className={`${amount == 0 ? "grid" : "hidden"} text-center`}>
        <h3 className="text-2xl md:text-3xl font-bold py-[1rem]">
          YOUR CART IS EMPTY
        </h3>
        <div>
          <p className="mb-[1rem]">
            Once you add something to your cart - it will appear here. Ready to
            get started?
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
export default Cart;
