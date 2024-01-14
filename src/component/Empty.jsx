import { Link } from "react-router-dom";

const Empty = () => {
  return (
    <section>
      <div>
        <p>
          Once you add something to your bag - it will appear here. Ready to get
          started?
        </p>
        <Link to="/shop">
          <button className="bg-secondary text-white px-[2rem] py-[0.5rem] rounded-[1.5rem]">
            SEE ALL PRODUCTS
          </button>
        </Link>
      </div>
    </section>
  );
};
export default Empty;
