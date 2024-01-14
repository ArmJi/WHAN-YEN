import { IoMdRemove, IoMdAdd, IoIosClose } from "react-icons/io";
import { useCart } from "../context/CartContext";

const Item = () => {
  const { products, addQuantity, removeItem, reduceQuantity } = useCart();
  return (
    <div>
      {products.map((product) => {
        return (
          <div
            key={product.id}
            className="py-[1rem] px-[1rem] grid grid-cols-[175px_auto] md:grid-cols-[250px_auto] gap-[1rem] relative shadow-md mb-[0.5rem]"
          >
            <div className="bg-tertiary h-[175px] md:h-[250px] flex items-center">
              <img src={product.img} alt="" className="" />
            </div>
            <div className="mt-[1.5rem]">
              <h3 className="text-base md:text-lg font-bold">{product.name}</h3>
              <p className="md:text-lg">Price : {product.price} ฿</p>
              <div className="flex items-center bg-quaternary w-max p-[0.35rem] rounded-full">
                <div
                  onClick={() => reduceQuantity(product.id)}
                  className="bg-secondary text-white px-[0.45rem] rounded-full w-[1.5rem] h-[1.5rem] md:w-[2rem] md:h-[2rem] flex items-center cursor-pointer"
                >
                  <IoMdRemove />
                </div>
                <span className="mx-[0.5rem] md:text-lg">{product.qty}</span>
                <div
                  onClick={() => addQuantity(product.id)}
                  className="bg-secondary text-white px-[0.45rem] rounded-full w-[1.5rem] h-[1.5rem] md:w-[2rem] md:h-[2rem] flex items-center cursor-pointer"
                >
                  <IoMdAdd />
                </div>
              </div>
              <div
                onClick={() => removeItem(product.id)}
                className="text-2xl md:text-3xl absolute top-[1rem] right-0 cursor-pointer"
              >
                <IoIosClose />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Item;
