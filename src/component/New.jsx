import new1 from "../assets/new/new1.png";
import { useCart } from "../context/CartContext";

const New = () => {
  const { addCart } = useCart();
  return (
    <section className="New flex justify-center">
      <div className="test grid text-primary mt-[3.5rem] md:grid-cols-[450px_550px]">
        <div className="flex justify-center items-center relative h-[300px] md:h-[400px]">
          <div className="bg-tertiary h-[270px] w-[270px] md:w-[310px] md:h-[310px] rounded-full absolute z-1"></div>
          <img
            src={new1}
            alt="New"
            className="absolute z-2 w-[350px] md:w-[400px]"
          />
        </div>
        <div className="flex flex-col items-center md:mt-[2rem]">
          <h3 className="font-bold text-2xl mb-[.75rem] mt-[1.5rem]">
            CHOCOLATE BROWNIES CONE
          </h3>
          <p className="text-center font-semibold px-[1rem] mb-[.75rem] max-w-[400px]">
            Our classic ice cream is swirled with gooey brownies, chocolate
            sauce and delicious espresso chocolate chips. Don’t blame us if your
            local barista starts to miss you.
          </p>
          <button
            value="pint1"
            onClick={(e) => addCart(e.target.value)}
            className="bg-secondary text-white px-[2rem] py-[0.5rem] rounded-[1.5rem] text-base"
          >
            ADD CART
          </button>
        </div>
      </div>
    </section>
  );
};
export default New;
