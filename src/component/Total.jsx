import { useCart } from "../context/CartContext";

const Total = () => {
  const { amount, total } = useCart();
  return (
    <div className="mt-[1rem]">
      <div className="bg-quaternary p-[1rem] rounded-[0.7rem]">
        <h1 className="text-xl md:text-2xl font-bold">ORDER SUMMARY</h1>
        <div className="font-semibold grid gap-[0.5rem] my-[1rem] md:text-lg">
          <div className="flex justify-between">
            <span>{amount} items</span>
            <span>{total} ฿</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery</span>
            <span>30 ฿</span>
          </div>
          <div className="flex justify-between">
            <span>Total</span>
            <span>{total + 30} ฿</span>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="bg-secondary text-white px-[2rem] p-[0.5rem] rounded-[1.5rem] text-base mt-[0.5rem]">
            CHECK OUT
          </button>
        </div>
      </div>
    </div>
  );
};
export default Total;
