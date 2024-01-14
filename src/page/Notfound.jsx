import pagenotfound from "../assets/pagenotfound/pagenotfound.png";

const Notfound = () => {
  return (
    <section className="flex justify-center pt-[7.5rem] px-[2rem] md:pt-[8.5rem]">
      <div className="relative max-w-fit">
        <img src={pagenotfound} alt="" />
        <div className="absolute right-[1rem] bottom-[1rem] text-center">
          <h1 className="text-2xl sm:text-4xl font-bold">ERROR 404</h1>
          <p className="font-semibold sm:text-2xl">PAGE NOT FOUND</p>
        </div>
      </div>
    </section>
  );
};
export default Notfound;
