import { Product } from "../constants/data";
import { useCart } from "../context/CartContext";

const Pint = () => {
  const { addCart } = useCart();
  return (
    <section className="pt-[4.5rem] px-[2rem] md:pt-[5.5rem]">
      <h3 className="text-2xl md:text-3xl font-bold py-[1rem]">Product/Pint</h3>
      <div className="ss:grid ss:grid-cols-2 ss:gap-[2rem] md:grid-cols-3 lg:grid-cols-4">
        {Product.map((product) => {
          if (product.type === "pint") {
            return (
              <div className="py-[1rem]">
                <div className="bg-tertiary">
                  <img src={product.img} alt="" />
                </div>
                <div className="mt-[0.5rem]">
                  <h3 className="text-lg font-bold">{product.name}</h3>
                  <p className="">Price : {product.price} ฿</p>
                  <div className="flex justify-center">
                    <button
                      value={product.id}
                      onClick={(e) => addCart(e.target.value)}
                      className="bg-secondary text-white px-[2rem] py-[0.5rem] rounded-[1.5rem] text-base my-[0.5rem]"
                    >
                      Add Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </section>
  );
};
export default Pint;
