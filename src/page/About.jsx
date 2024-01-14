import about1 from "../assets/about/about1.png";
import about2 from "../assets/about/about2.png";

const About = () => {
  return (
    <section>
      <div className="text-center">
        <img src={about1} alt="" className="hidden md:flex w-full" />
        <img src={about2} alt="" className="flex md:hidden w-full" />
        <h1 className="text-2xl font-bold mt-[2rem] mx-[4rem]">
          ICE CREAM IS FUN, SO WE TAKE IT VERY SERIOUSLY.
        </h1>
        <p className="mx-[3rem] mt-[2rem]">
          Families have included Whan-Yen's in their biggest and smallest
          moments since 1928. From grandiose reunions to a quiet, rainy Sunday
          afternoon under the covers - our flavors bring people together.
        </p>
        <p className="mx-[3rem] mt-[1rem]">
          Moms. Dads. Kids, Aunts. Uncles. And BFFs. You're on our minds. We
          love dreaming up new ways to surprise you. Tinkering away in our test
          kitchen - combining real, high quality ingredients. The way we see it,
          every scoop is a chance to get somebody to stay for dessert, and
          sweeten the moment.
        </p>
      </div>
    </section>
  );
};
export default About;
